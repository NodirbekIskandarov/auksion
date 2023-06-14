import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { usePostRequest } from '../hooks/request'
import { GET_IN_TOUCH } from '../tools/urls'
import Alert from './AlertError'
import AlertSuccess from './AlertSuccess'
import { getReduxText } from '../locales'
import { useSelector } from 'react-redux'

const Footer = (message) => {
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [success, setSuccess] = useState(false)
    const [successText, setSuccessText] = useState('')
    const language = useSelector((state) => state.language)
    const navigate = useNavigate()

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
                                {getReduxText('get_in_touch', language)}
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
                                    {getReduxText(
                                        'get_in_touch_button',
                                        language
                                    )}
                                </button>
                            </form>
                        </div>
                        <div className="col-8 d-flex align-items-center justify-content-between">
                            <div
                                className="foot_link pointer"
                                onClick={() => {
                                    navigate('/')
                                    window.scrollTo(0, 0)
                                }}
                            >
                                {getReduxText('footer_lots_nav', language)}
                            </div>

                            <div
                                className="foot_link pointer"
                                onClick={() => {
                                    navigate('/about')
                                    window.scrollTo(0, 0)
                                }}
                            >
                                {getReduxText(
                                    'footer_about_auction_nav',
                                    language
                                )}
                            </div>

                            <div
                                className="foot_link pointer"
                                onClick={() => {
                                    navigate('/Interactive')
                                    window.scrollTo(0, 0)
                                }}
                            >
                                {getReduxText('footer_services_nav', language)}
                            </div>

                            <div
                                className="foot_link pointer"
                                onClick={() => {
                                    navigate('/')
                                    window.scrollTo(0, 0)
                                }}
                            >
                                {getReduxText(
                                    'footer_about_center_nav',
                                    language
                                )}
                            </div>

                            <div
                                className="foot_link pointer"
                                onClick={() => {
                                    navigate('/news')
                                    window.scrollTo(0, 0)
                                }}
                            >
                                {getReduxText('footer_news_nav', language)}
                            </div>

                            <div
                                className="foot_link pointer"
                                onClick={() => {
                                    navigate('/contact')
                                    window.scrollTo(0, 0)
                                }}
                            >
                                {getReduxText('footer_contact_nav', language)}
                            </div>

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
