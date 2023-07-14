import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePatchRequest, usePostRequest } from '../../hooks/request'
import {
    CREATE_LEGAL_USER,
    REGISTER_CONFIRM,
    REGISTER_USER,
    USER_RUD,
} from '../../tools/urls'
import { Formik } from 'formik'
import { getReduxText } from '../../locales'
import { useSelector } from 'react-redux'

export default function LegalEntityRegister({
    setErrorText,
    setError,
    setSuccess,
    success,
}) {
    const [token, setToken] = useState('')

    const language = useSelector((state) => state.language)

    const inputRef = useRef(null)

    const navigate = useNavigate()
    const registerFirstStepRequest = usePostRequest({
        url: REGISTER_USER,
    })

    const registerConfirmRequest = usePostRequest({
        url: REGISTER_CONFIRM,
    })

    const createLegalUserRequest = usePostRequest({
        url: CREATE_LEGAL_USER,
        headers: {
            Authorization: `Token ${token ?? ''}`,
        },
    })

    const changeRoleToLegalRequest = usePatchRequest({
        url: USER_RUD,
        headers: {
            Authorization: `Token ${token ?? ''}`,
        },
    })

    const registerFirstStep = async (phone) => {
        const { response, error } = await registerFirstStepRequest.request({
            data: {
                phone: phone.replace('+', ''),
            },
        })
        if (response) {
            setErrorText(getReduxText('physical_code_notification', language))
            setError(true)
            inputRef.current.focus()
        } else if (error) {
            setErrorText(getReduxText('physical_all_data_error_text', language))
            setError(true)
        }
    }

    const registerConfirm = async (phone, code) => {
        if (code?.length === 6) {
            const { response, error } = await registerConfirmRequest.request({
                data: {
                    phone: phone.replace('+', ''),
                    code,
                    password: '12345678',
                },
            })

            if (response?.token) {
                localStorage.setItem('token', response.token)
                localStorage.setItem('role', response?.user)
                setToken(response.token)
            }

            if (response) {
                setErrorText(
                    getReduxText('physical_final_success_text', language)
                )
                setError(true)
                setSuccess(true)
            } else if (error) {
                setErrorText(
                    getReduxText('physical_all_data_error_text', language)
                )
                setError(true)
            }
        } else {
            setErrorText(getReduxText('physical_code_notification', language))
            setError(true)
        }
    }

    const createLegalUser = async (values) => {
        const { response } = await createLegalUserRequest.request({
            data: {
                name: values.name,
                inn: values.inn,
                director: values.owner,
                registered_date: values.date,
                address: values.address,
                mfo: values.mfo,
                bank: values.bank,
                account: values.account,
            },
        })

        if (response) {
            changeRoleToLegal()
        } else {
            setError(true)
            setErrorText(getReduxText('physical_fail_error_text', language))
        }
    }

    const changeRoleToLegal = async () => {
        const { response } = await changeRoleToLegalRequest.request({
            data: {
                role: 'Yuridik',
            },
        })

        if (response) {
            navigate('/login')
        } else {
            setError(true)
            setErrorText(getReduxText('physical_fail_error_text', language))
        }
    }

    const validateRegister = (values) => {
        if (
            values.inn?.length === 9 &&
            values.date &&
            values.name &&
            values.owner &&
            values.mfo.length === 5 &&
            values.address &&
            values.bank &&
            values.account?.length === 20 &&
            values.phone?.length >= 12
        ) {
            registerFirstStep(values.phone)
        } else if (values.inn?.length !== 9) {
            setError(true)
            setErrorText(getReduxText('inn_error_text', language))
        } else if (values.mfo?.length !== 5) {
            setError(true)
            setErrorText(getReduxText('mfo_error_text', language))
        } else if (values.account?.length !== 20) {
            setError(true)
            setErrorText(getReduxText('account_error_text', language))
        } else if (values.phone?.length < 12) {
            setError(true)
            setErrorText(getReduxText('physical_phone_error_text', language))
        } else {
            setError(true)
            setErrorText(getReduxText('physical_fill_all_error_text', language))
        }
    }

    return (
        <div>
            <Formik
                initialValues={{
                    inn: '',
                    name: '',
                    owner: '',
                    date: '',
                    mfo: '',
                    address: '',
                    bank: '',
                    account: '',
                    phone: '',
                    code: '',
                }}
                onSubmit={(values) => {
                    validateRegister(values)
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="log_main row">
                            <div className="log_main_type log_main_type_2 col-12 col-lg-4">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'legal_register_inn',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'inn'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.inn}
                                    />
                                </div>
                            </div>

                            <div className="log_main_type log_main_type_2 col-12 col-lg-4">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'legal_register_organization',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'name'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                </div>
                            </div>

                            <div className="log_main_type col-12 col-lg-4">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'legal_register_director',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'owner'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.owner}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="log_main row">
                            <div className="log_main_type log_main_type_2 col-12 col-lg-4">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'legal_register_registered_date',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="date"
                                        placeholder=""
                                        name={'date'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.date}
                                    />
                                </div>
                            </div>
                            <div className="log_main_type log_main_type_2 col-12 col-lg-4">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'legal_register_mfo',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'mfo'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.mfo}
                                    />
                                </div>
                            </div>

                            <div className="log_main_type col-12 col-lg-4">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'legal_register_address',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'address'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="log_main row">
                            <div className="log_main_type log_main_type_2 col-12 col-lg-4">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'legal_register_bank',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'bank'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.bank}
                                    />
                                </div>
                            </div>
                            <div className="log_main_type log_main_type_2 col-12 col-lg-4">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'legal_register_account',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'account'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.account}
                                    />
                                </div>
                            </div>

                            <div className="log_main_type log_main_type_2 col-12 col-lg-4 d-flex flex-row">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'legal_register_phone',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'phone'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                    />
                                </div>
                                <button
                                    type={'submit'}
                                    className="inp_btn active text-center"
                                >
                                    {getReduxText('send_sms', language)}
                                </button>
                            </div>
                        </div>
                        <div className="log_main row">
                            <div className="log_main_type log_main_type_2 col-12 col-lg-4 d-flex flex-row">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'legal_register_code',
                                            language
                                        )}
                                    </div>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        placeholder=""
                                        name={'code'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.code}
                                    />
                                </div>
                                <div
                                    onClick={() =>
                                        registerConfirm(
                                            values.phone,
                                            values.code
                                        )
                                    }
                                    className="inp_btn_2"
                                    style={
                                        values.code?.length === 6
                                            ? { opacity: 1 }
                                            : { opacity: 0.5 }
                                    }
                                >
                                    <img src="/img/icon_correct.png" alt="" />
                                </div>
                            </div>
                            <div className="log_main_type col-12 col-lg-4" />

                            <div className="log_main_type col-12 col-lg-4" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div
                                style={
                                    success ? { opacity: 1 } : { opacity: 0.5 }
                                }
                                className="log_confir"
                                onClick={() => {
                                    if (success) {
                                        createLegalUser(values)
                                    } else {
                                        setError(true)
                                        setErrorText(
                                            getReduxText(
                                                'physical_fail_error_text',
                                                language
                                            )
                                        )
                                    }
                                }}
                            >
                                {getReduxText('register_confirm', language)}
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}
