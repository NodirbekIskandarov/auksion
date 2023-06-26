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

export default function LegalEntityRegister({
    setErrorText,
    setError,
    setSuccess,
    success,
}) {
    const [token, setToken] = useState('')

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
            setErrorText('Telefon raqamingizga yuborilgan kodni kiriting')
            setError(true)
            inputRef.current.focus()
        } else if (error) {
            setErrorText("Ma'lumotlarni kiritishda xatolik yuz berdi")
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
                    'Akkauntingiz muvaffaqiyatli yaratildi. Tasdiqlash tugmasini bosing.'
                )
                setError(true)
                setSuccess(true)
            } else if (error) {
                setErrorText("Ma'lumotlarni kiritishda xatolik yuz berdi")
                setError(true)
            }
        } else {
            setErrorText(
                'Telefon raqamingizga yuborilgan 6 xonalik kodni kiriting'
            )
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
            setErrorText(
                "Yangi akkaunt yaratilmadi. Iltimos qaytadan urinib ko'ring"
            )
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
            setErrorText(
                "Yangi akkaunt yaratilmadi. Iltimos qaytadan urinib ko'ring"
            )
        }
    }

    const validateRegister = (values) => {
        if (
            values.inn?.length === 9 &&
            values.date &&
            values.name &&
            values.owner &&
            values.mfo.length === 9 &&
            values.address &&
            values.bank &&
            values.account?.length === 20 &&
            values.phone?.length >= 12
        ) {
            registerFirstStep(values.phone)
        } else if (values.inn?.length !== 9) {
            setError(true)
            setErrorText(
                "INN ma'lumotlari xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else if (values.mfo?.length !== 9) {
            setError(true)
            setErrorText(
                "MFO ma'lumotlari xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else if (values.account?.length !== 20) {
            setError(true)
            setErrorText(
                "Bank hisob raqami xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else if (values.phone?.length < 12) {
            setError(true)
            setErrorText(
                "Telefon raqam xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else {
            setError(true)
            setErrorText("Barcha ma'lumotlarni to'liq kiritish talab etiladi")
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
                    console.log(values)
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="log_main row">
                            <div className="log_main_type log_main_type_2 col-12 col-lg-4">
                                <div className="inp_box">
                                    <div className="inp_name">*INN</div>
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
                                        *Tashkilot nomi
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
                                        *Tashkilot rahbari FIO
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
                                        *Tashkilot ro'yxatdan o'tgan sana
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
                                    <div className="inp_name">*MFO</div>
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
                                    <div className="inp_name">*Manzil</div>
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
                                        *Bank filiali
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
                                        *Bank hisob raqami
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
                                    <div className="inp_name">*Telefon</div>
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
                                    SMS yuborish
                                </button>
                            </div>
                        </div>
                        <div className="log_main row">
                            <div className="log_main_type log_main_type_2 col-12 col-lg-4 d-flex flex-row">
                                <div className="inp_box">
                                    <div className="inp_name">*SMS kod</div>
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
                                            "Yangi akkaunt yaratilmadi. Iltimos qaytadan urinib ko'ring"
                                        )
                                    }
                                }}
                            >
                                Tasdiqlash
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}
