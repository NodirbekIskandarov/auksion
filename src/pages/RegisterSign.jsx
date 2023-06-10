import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactCodeInput from 'react-code-input'
import { usePostRequest } from '../hooks/request'
import { LOGIN_VERIFY } from '../tools/urls'
import Alert from '../components/AlertError'

const RegisterSign = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [code, setCode] = useState('')
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')

    const loginVerifyRequest = usePostRequest({
        url: LOGIN_VERIFY,
    })

    const loginVerify = async () => {
        if (code?.length === 6) {
            const { response } = await loginVerifyRequest.request({
                data: {
                    phone: state?.phone,
                    code,
                    password: '12345678',
                },
            })

            if (response?.token) {
                localStorage.setItem('token', response.token)
                localStorage.setItem('role', response.user)
            }

            if (response) {
                navigate('/cabinet')
            } else {
                setErrorText("Kod xato kiritildi. Iltimos tekshirib ko'ring.")
                setError(true)
            }
        } else {
            setErrorText("6 xonalik kodni to'liq kiritish talab etiladi.")
            setError(true)
        }
    }
    return (
        <>
            <div className="RegistrSign">
                {error ? (
                    <Alert
                        errorText={errorText}
                        setError={setError}
                        setErrorText={setErrorText}
                    />
                ) : (
                    ''
                )}
                <div className="Registration">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="reg_box">
                                    <div className="reg_box_name">
                                        Telefon raqamni tasdiqlash
                                    </div>
                                    <div className="reg_box_h">
                                        Sizning <span> {state?.phone}</span>{' '}
                                        Telefon raqamingizni tasdiqlash kodi
                                        yuborildi. Iltimos tasdiqlash kodini
                                        kiriting !
                                    </div>
                                    <div className="reg_sign_box">
                                        <ReactCodeInput
                                            type="text"
                                            fields={6}
                                            inputMode={'text'}
                                            name={'code'}
                                            inputStyle={{
                                                textTransform: 'uppercase',
                                                fontSize: 30,
                                                color: '#1AA37A',
                                                textAlign: 'center',
                                                outline: 'none',
                                                width: 80,
                                                height: 46,
                                                background:
                                                    'rgba(255, 255, 255, 0.15)',
                                                borderWidth: 1.84534,
                                                borderStyle: 'solid',
                                                borderColor:
                                                    'rgba(255, 255, 255, 0.3)',
                                                backdropFilter: 'blur(27.2187)',
                                                borderRadius: 8,
                                                marginLeft: 20,
                                            }}
                                            value={code}
                                            onChange={setCode}
                                        />
                                    </div>

                                    <div
                                        style={
                                            code?.length === 6
                                                ? { opacity: 1 }
                                                : { opacity: 0.5 }
                                        }
                                        className="reg_box_link"
                                        onClick={loginVerify}
                                    >
                                        Tasdiqlash
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterSign
