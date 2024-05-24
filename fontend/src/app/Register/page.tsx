'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import x from '@/styles/style.module.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { env } from 'process';
import { register } from '@/services/userService';
import { toast } from 'react-toastify';

const Register = () => {

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phonenumber, setphonenumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [ConfirmPassword, setConfirmPassword] = useState<string>("");
    const defaultCheckInput = {
        usenamevalidate: true,
        emailvalidate: true,
        phonenumbervalidate: true,
        passwordvalidate: true,
        confirmPasswordvalidate: true
    }
    const [objcheckInput, setObjInput] = useState(defaultCheckInput)

    const router = useRouter()
    const handleclick = () => {
        router.push('/Login')
    }

    const handleOnkeypress = (event: any) => {
        if (event.code == "Enter" && event.charCode == 13) {
            handleSubmit()
        }
    }

    const isValidate = () => {
        setObjInput(defaultCheckInput)
        if (!username) {
            setObjInput({ ...defaultCheckInput, usenamevalidate: false })
            return false
        }
        if (!email) {
            setObjInput({ ...defaultCheckInput, emailvalidate: false })
            return false
        }
        let reqx = /\S+@\S+\.\S+/;
        if (!reqx.test(email)) {
            setObjInput({ ...defaultCheckInput, emailvalidate: false })
            return false
        }
        if (!phonenumber) {
            setObjInput({ ...defaultCheckInput, phonenumbervalidate: false })
            return false
        }
        if (!password) {
            setObjInput({ ...defaultCheckInput, passwordvalidate: false })
            return false
        }
        if (password !== ConfirmPassword) {
            setObjInput({ ...defaultCheckInput, confirmPasswordvalidate: false })
            return false
        }
        return true
    }

    const handleSubmit = async () => {
        const check = isValidate()
        if (check === true) {
            const responsive = await register(username, email, phonenumber, password)
            if (responsive.data && +responsive.data.EC === 0) {
                toast.success(responsive.data.EM)
                router.push('/Login')
            } else {
                toast.error(responsive.data.EM)
            }
        }
    }
    return (
        <>
            <div className={x["register-container"]}>
                <div className="container ">
                    <div className="row px-3">
                        <div className="content-left col-12 d-none col-sm-7 d-sm-block mt-3">
                            <div className={x['image-left']}>

                            </div>
                        </div>

                        <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 border rounded mt-3 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">

                            <input type="text" className={objcheckInput.usenamevalidate ? "form-control" : "form-control is-invalid"} placeholder='Username'
                                value={username} onChange={(event) => setUsername(event.target.value)}
                            />
                            <input type="email" className={objcheckInput.emailvalidate ? "form-control" : "form-control is-invalid"} placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)}
                            />
                            <input type="text" className={objcheckInput.phonenumbervalidate ? "form-control" : "form-control is-invalid"} placeholder='phonenumber number'
                                value={phonenumber} onChange={(event) => setphonenumber(event.target.value)}
                            />
                            <input type="password" className={objcheckInput.passwordvalidate ? "form-control" : "form-control is-invalid"} placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}
                            />
                            <input type="password" className={objcheckInput.confirmPasswordvalidate ? "form-control" : "form-control is-invalid"} placeholder='Confirm password'
                                value={ConfirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                                onKeyPress={() => { handleOnkeypress(event) }} />
                            <button type="submit" onClick={() => handleSubmit()} className="btn btn-primary ">Submit</button>
                            <hr />
                            <div className='text-center'>
                                <button className='btn btn-success' onClick={() => handleclick()}>Already have an account.Login?</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register