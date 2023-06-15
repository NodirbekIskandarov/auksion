import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePostRequest } from '../../hooks/request'
import {
    CREATE_LEGAL_USER,
    REGISTER_CONFIRM,
    REGISTER_USER,
} from '../../tools/urls'

export default function LegalEntityRegister({
    setErrorText,
    setError,
    setSuccess,
    success,
}) {
    const [inn, setInn] = useState('')
    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [date, setDate] = useState('')
    const [mfo, setMfo] = useState('')
    const [address, setAddress] = useState('')
    const [bank, setBank] = useState('')
    const [account, setAccount] = useState('')
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')

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

    const registerFirstStep = async () => {
        const { response, error } = await registerFirstStepRequest.request({
            data: {
                phone,
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

    const registerConfirm = async () => {
        if (code?.length === 6) {
            const { response, error } = await registerConfirmRequest.request({
                data: {
                    phone,
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

    const createLegalUser = async () => {
        const { response } = await createLegalUserRequest.request({
            data: {
                name: name,
                inn: inn,
                director: owner,
                registered_date: date,
                address: address,
                mfo: mfo,
                bank: bank,
                account: account,
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

    const validateRegister = () => {
        if (
            inn?.length === 9 &&
            date &&
            name &&
            owner &&
            mfo.length === 9 &&
            address &&
            bank &&
            account?.length === 20 &&
            phone?.length >= 12
        ) {
            registerFirstStep()
        } else if (inn?.length !== 9) {
            setError(true)
            setErrorText(
                "INN ma'lumotlari xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else if (mfo?.length !== 9) {
            setError(true)
            setErrorText(
                "MFO ma'lumotlari xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else if (account?.length !== 20) {
            setError(true)
            setErrorText(
                "Bank hisob raqami xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else if (phone?.length < 12) {
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
            <div className="log_main">
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*INN</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setInn(event.target.value)}
                            value={inn}
                        />
                    </div>
                </div>
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*Tashkilot nomi</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                        />
                    </div>
                </div>
                <div className="log_main_type ">
                    <div className="inp_box">
                        <div className="inp_name">*Tashkilot rahbari FIO</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setOwner(event.target.value)}
                            value={owner}
                        />
                    </div>
                </div>
            </div>
            <div className="log_main">
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">
                            *Tashkilot ro'yxatdan o'tgan sana
                        </div>
                        <input
                            type="date"
                            placeholder=""
                            onChange={(event) => setDate(event.target.value)}
                            value={date}
                        />
                    </div>
                </div>
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*MFO</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setMfo(event.target.value)}
                            value={mfo}
                        />
                    </div>
                </div>

                <div className="log_main_type">
                    <div className="inp_box">
                        <div className="inp_name">*Manzil</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setAddress(event.target.value)}
                            value={address}
                        />
                    </div>
                </div>
            </div>
            <div className="log_main">
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*Bank filiali</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setBank(event.target.value)}
                            value={bank}
                        />
                    </div>
                </div>
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*Bank hisob raqami</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setAccount(event.target.value)}
                            value={account}
                        />
                    </div>
                </div>

                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*Telefon</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setPhone(event.target.value)}
                            value={phone}
                        />
                    </div>
                    <div
                        onClick={() => validateRegister()}
                        className="inp_btn active"
                    >
                        SMS yuborish
                    </div>
                </div>
            </div>
            <div className="log_main">
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*SMS kod</div>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder=""
                            onChange={(event) => setCode(event.target.value)}
                            value={code}
                        />
                    </div>
                    <div
                        onClick={() => registerConfirm()}
                        className="inp_btn_2"
                        style={
                            code?.length === 6
                                ? { opacity: 1 }
                                : { opacity: 0.5 }
                        }
                    >
                        <img src="/img/icon_correct.png" alt="" />
                    </div>
                </div>
                <div className="log_main_type" />

                <div className="log_main_type" />
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div
                    style={success ? { opacity: 1 } : { opacity: 0.5 }}
                    className="log_confir"
                    onClick={() => {
                        if (success) {
                            createLegalUser()
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
        </div>
    )
}
