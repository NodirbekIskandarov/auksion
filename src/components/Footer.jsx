import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { usePostRequest } from '../hooks/request'
import { GET_IN_TOUCH } from '../tools/urls'
import Alert from './alerts/AlertError'
import AlertSuccess from './alerts/AlertSuccess'
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
            setSuccessText(
                getReduxText('footer_get_in_touch_success', language)
            )
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
                                        } else {
                                            e.preventDefault()
                                            setErrorText(
                                                getReduxText(
                                                    'footer_get_in_touch_error',
                                                    language
                                                )
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
                        <div className="col-lg-8 col-md-8 col-12 d-flex align-items-center justify-content-between">
                            <div
                                className={
                                    'd-flex flex-row justify-content-between align-items-center flex-wrap w-100'
                                }
                            >
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
                                    {getReduxText(
                                        'footer_services_nav',
                                        language
                                    )}
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
                                    {getReduxText(
                                        'footer_contact_nav',
                                        language
                                    )}
                                </div>
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
