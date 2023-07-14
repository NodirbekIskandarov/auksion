import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { usePostRequest } from '../hooks/request'
import { LOGIN } from '../tools/urls'
import Alert from '../components/alerts/AlertError'
import { useNavigate } from 'react-router-dom'
import { getReduxText } from '../locales'
import { useSelector } from 'react-redux'

const Login = () => {
    const navigate = useNavigate()
    const language = useSelector((state) => state.language)
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')

    const loginRequest = usePostRequest({
        url: LOGIN,
    })

    const login = async () => {
        if (phone?.length > 12) {
            const { response } = await loginRequest.request({
                data: {
                    phone: phone.replace('+', ''),
                    password: '12345678',
                },
            })

            if (response) {
                navigate('/registration-sign', { state: { phone } })
                localStorage.setItem('phone', phone)
            } else {
                setErrorText(getReduxText('phone_doesnot_exist', language))
                setError(true)
            }
        } else {
            setErrorText(getReduxText('physical_phone_error_text', language))
            setError(true)
        }
    }
    return (
        <>
            <div className="Registration">
                {error ? (
                    <Alert
                        errorText={errorText}
                        setError={setError}
                        setErrorText={setErrorText}
                    />
                ) : (
                    ''
                )}
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="reg_box">
                                <div className="reg_box_name">
                                    {getReduxText('nav_7', language)}
                                </div>
                                <div className="reg_inp_box">
                                    <img
                                        className="reg_inp_img_1"
                                        src="/img/icon-bell.png"
                                        alt=""
                                    />
                                    <InputMask
                                        mask={'+999 (99) 999 99 99'}
                                        placeholder="+998 (__) ___ __ __"
                                        type="text"
                                        className="form_inp"
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(
                                                e.target.value
                                                    .replaceAll('_', '')
                                                    .replace('(', '')
                                                    .replace(')', '')
                                                    .replaceAll(' ', '')
                                            )
                                        }}
                                    />
                                </div>
                                <div className="reg_inp_box none">
                                    <img
                                        className="reg_inp_img_1"
                                        src="/img/icon_lock.png"
                                        alt=""
                                    />
                                    <img
                                        className="reg_inp_img_2"
                                        src="/img/icon_view_no.png"
                                        alt=""
                                    />
                                    <input
                                        placeholder="Parol"
                                        type="text"
                                        name=""
                                        id=""
                                    />
                                </div>
                                <div className="reg_inp_box none">
                                    <img
                                        className="reg_inp_img_1"
                                        src="/img/icon_lock.png"
                                        alt=""
                                    />
                                    <img
                                        className="reg_inp_img_2"
                                        src="/img/icon_view_no.png"
                                        alt=""
                                    />
                                    <input
                                        placeholder="Parolni qayta kiriting"
                                        type="text"
                                        name=""
                                        id=""
                                    />
                                </div>
                                <div className="reg_box_h text-center">
                                    {getReduxText(
                                        'login_description',
                                        language
                                    )}
                                </div>
                                <div
                                    onClick={() => login()}
                                    className="reg_box_link"
                                    style={
                                        phone?.length === 13
                                            ? { opacity: 1 }
                                            : { opacity: 0.5 }
                                    }
                                >
                                    {getReduxText('register_confirm', language)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
