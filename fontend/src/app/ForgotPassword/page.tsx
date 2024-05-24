'use client'

import x from '@/styles/style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { use, useState } from 'react'

const ForgotPassword = () => {

    const [password, setPassword] = useState<string>("");
    const [changePassword, setChangePassword] = useState<string>("");
    const [ConfirmPassword, setConfirmPassword] = useState<string>("");

    const defaultCheckInput = {
        passwordvalidate: true,
        changePasswordvalidate: true,
        ConfirmPasswordvalidate: true
    }
    const [objcheckInput, setObjInput] = useState(defaultCheckInput)

    const isValidate = () => {
        setObjInput(defaultCheckInput)
        if (!password) {
            setObjInput({ ...defaultCheckInput, passwordvalidate: false })
            return false
        }
        if (!changePassword) {
            setObjInput({ ...defaultCheckInput, changePasswordvalidate: false })
            return false
        }
        if (!ConfirmPassword) {
            setObjInput({ ...defaultCheckInput, ConfirmPasswordvalidate: false })
            return false
        }
        return true
    }
    const handleChange = () => {
        const check = isValidate()


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
                            <label>Old password</label>
                            <input type="password" className={objcheckInput.passwordvalidate ? 'form-control' : 'form-control is-invalid'} placeholder='Old password'
                                value={password} onChange={(event) => setPassword(event.target.value)} />
                            <label>New Password</label>
                            <input type="password" className={objcheckInput.changePasswordvalidate ? 'form-control' : 'form-control is-invalid'} placeholder='New password'
                                value={changePassword} onChange={(event) => setChangePassword(event.target.value)} />
                            <label>Confirm New Password</label>
                            <input type="password" className={objcheckInput.ConfirmPasswordvalidate ? 'form-control' : 'form-control is-invalid'} placeholder='Confirm New Password'
                                value={ConfirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                            <hr />
                            <button type="submit" className="btn btn-primary" onClick={() => handleChange()} >Change password</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword