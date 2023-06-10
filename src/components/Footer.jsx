import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { usePostRequest } from '../hooks/request'
import { GET_IN_TOUCH } from '../tools/urls'
import Alert from './AlertError'
import AlertSuccess from './AlertSuccess'

const Footer = (message) => {
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [success, setSuccess] = useState(false)
    const [successText, setSuccessText] = useState('')

    const getInTouchRequest = usePostRequest({
        url: GET_IN_TOUCH,
    })

    const getInTouch = async (e) => {
        e.preventDefault()
        const { response } = await getInTouchRequest.request({
            data: { phone: phone },
        })

        if (response?.id) {
            setSuccess(true)
            setSuccessText("Siz bilan tez orada bog'lanishadi")
        }
    }
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <img
                                src="/img/logo.png"
                                alt=""
                                className="foot_img"
                            />

                            <div className="foot_h">
                                Telefon raqamingizni qoldiring va biz sizga
                                aloqaga chiqamiz !
                            </div>

                            <form action="" className="foot_form">
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
                                <button
                                    onClick={(e) => {
                                        if (phone.length > 12) {
                                            getInTouch(e)
                                            alert(phone.length)
                                            alert(phone)
                                        } else {
                                            e.preventDefault()
                                            setErrorText(
                                                "Telefon raqam noto'g'ri kiritildi. Iltimos qayta urinib ko'ring"
                                            )
                                            setError(true)
                                        }
                                    }}
                                    className="form_btn"
                                >
                                    Yuborish
                                </button>
                            </form>
                        </div>
                        <div className="col-8 d-flex align-items-center justify-content-between">
                            <Link className="foot_link" to="">
                                Lotlar
                            </Link>
                            <Link className="foot_link" to="">
                                Auksion haqida
                            </Link>
                            <Link className="foot_link" to="">
                                Interaktiv xizmatlar
                            </Link>
                            <Link className="foot_link" to="">
                                Markaz haqida
                            </Link>
                            <Link className="foot_link" to="">
                                Yangiliklar
                            </Link>
                            <Link className="foot_link" to="">
                                Bog’lanish
                            </Link>

                            {error ? (
                                <Alert
                                    errorText={errorText}
                                    setError={setError}
                                    setErrorText={setErrorText}
                                />
                            ) : (
                                ''
                            )}

                            {success ? (
                                <AlertSuccess
                                    successText={successText}
                                    setSuccess={setSuccess}
                                    setSuccessText={setSuccessText}
                                />
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
