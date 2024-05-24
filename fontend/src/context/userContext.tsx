'use client'

import exp from "constants";
import { createContext, useState, useContext, useEffect } from "react";
import { getUserAccount } from "@/services/userService";

const UserContext = createContext({});

type Props = {
    children: React.ReactNode;
}

const UserProvide = ({ children }: Props): React.ReactNode => {

    const userdefault = {
        isLoading: true,
        isAuthenticated: false,
        token: "",
        account: {}
    }
    const [user, setUser] = useState(userdefault);

    // Login updates the user data with a name parameter
    const loginContext = (userData: any) => {
        setUser({ ...userData, isLoading: false })
    };

    // Logout updates the user data to default
    const logoutContext = () => {
        setUser({ ...userdefault, isLoading: false })
    };

    const fetchUser = async () => {
        let response = await getUserAccount();
        if (response && response.data && response.data.EC === 0) {
            let groupWithRole = response.data.DT.groupWithRole
            let email = response.data.DT.email;
            let username = response.data.DT.username;
            let token = response.data.DT.access_token;

            let dataUser = {
                isAuthenticated: true,
                token: token,
                account: { groupWithRole, email, username },
                isLoading: false
            }
            setUser(dataUser)
        } else {
            alert('me')
            setUser({ ...userdefault, isLoading: false })
        }
    }

    useEffect(() => {
        if (window.location.pathname !== '/' && window.location.pathname !== '/Login' && window.location.pathname !== '/Register') {
            fetchUser()
        } else {
            setUser({ ...user, isLoading: false })
        }

    }, [])

    return (
        <UserContext.Provider value={{ user, loginContext, logoutContext }}>
            {children}
        </UserContext.Provider>
    );
}
export { UserContext, UserProvide }

