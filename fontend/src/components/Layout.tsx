import { Provider } from "react-redux"
import Appfooter from "./Appfooter"
import d from '@/styles/payment.module.css'
import SideBar from "./SideBar"
import { store } from '@/redux/store'
import Appheader from "./Appheader"

const Layout = ({ children }: any) => {
    return (
        <div>
            <Provider store={store}>
                <SideBar />
                <Appheader />
                {children}
                <div className={d['height']}>
                    <Appfooter />
                </div>
            </Provider>
        </div>
    )
}

export default Layout