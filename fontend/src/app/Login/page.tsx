'use client'
import x from '@/styles/style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { loginUser } from '@/services/userService';
import { json } from 'stream/consumers';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailed, loginSuccess } from '@/redux/authSlice';


const Login = () => {
    const [ValueLogin, setValuelogin] = useState("");
    const [password, setPassword] = useState("");
    const defaultCheckInput = {
        emailvalidate: true,
        passwordvalidate: true,
    }
    const [objcheckInput, setObjInput] = useState(defaultCheckInput)
    const router = useRouter()
    const handleclick = () => {
        router.push('/Register')
    }
    const dispatch = useDispatch()

    const isValidate = () => {
        setObjInput(defaultCheckInput)
        if (!ValueLogin) {
            setObjInput({ ...defaultCheckInput, emailvalidate: false })
            return false
        }
        if (!password) {
            setObjInput({ ...defaultCheckInput, passwordvalidate: false })
            return false
        }
        return true
    }

    const handleLogin = async () => {
        const check = isValidate()
        if (check === true) {
            // const res = await login(ValueLogin, password, dispatch)
            // console.log(res)
            const res = await loginUser(ValueLogin, password)
            dispatch(loginSuccess(res.data.DT))
            if (res && res.data && res.data.EC === 0) {
                let groupWithRole = res.data.DT.groupWithRole
                // let token = res.data.DT.access_token
                // console.log('check: ', token)
                toast.success(res.data.EM)
                router.push('/')
            } else {
                dispatch(loginFailed())
                toast.error(res.data.EM)
            }
        }
    }

    const hanldePressOnkey = (event: any) => {
        if (event.code == "Enter" && event.charCode == 13) {
            handleLogin()
        }
    }

    return (
        <>
            <div className={x["login-container"]}>
                <div className="container ">
                    <div className="row px-3">
                        <div className="content-left col-12 d-none col-sm-7 d-sm-block mt-3">
                            <div className={x['image-left']}>

                            </div>
                        </div>
                        <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 border rounded mt-3 bg-light shadow p-3 bg-body-tertiary rounded">
                            <input type="email" className={objcheckInput.emailvalidate ? "form-control" : "form-control is-invalid"} placeholder='Email address or phone number'
                                value={ValueLogin} onChange={(event) => { setValuelogin(event.target.value) }} />

                            <input type="password" className={objcheckInput.passwordvalidate ? "form-control" : "form-control is-invalid"} placeholder='Password'
                                value={password} onChange={(event) => { setPassword(event.target.value) }}
                                onKeyPress={() => hanldePressOnkey(event)} />

                            <button type="submit" onClick={() => handleLogin()} className="btn btn-primary" >Login</button>
                            <span className='text-center'><a className={x['forgot-password']} href='/ForgotPassword'>Forgot your password</a></span>
                            <hr />
                            <div className='text-center'>
                                <button className='btn btn-success' onClick={() => handleclick()}>Create new account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login