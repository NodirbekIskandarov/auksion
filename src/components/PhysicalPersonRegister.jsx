import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoad, usePostRequest } from '../hooks/request'
import {
    CREATE_PHYSICAL_USER,
    GET_ACCOUNTS_DISTRICT_LIST,
    GET_ACCOUNTS_REGIONS,
    REGISTER_CONFIRM,
    REGISTER_USER,
} from '../tools/urls'

export default function PhysicalPersonRegister({
    setErrorText,
    setError,
    setSuccess,
    success,
}) {
    const [citizen, setCitizen] = useState('')
    const [stir, setStir] = useState('')
    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [sex, setSex] = useState('')
    const [passportNumber, setPassportNumber] = useState('')
    const [passportDate, setPassportDate] = useState('')
    const [identification, setIdentification] = useState('')
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')

    const [region, setRegion] = useState({})
    const [district, setDistrict] = useState(0)
    const [districtList, setDistrictList] = useState([])

    const [token, setToken] = useState('')

    const inputRef = useRef(null)

    const navigate = useNavigate()

    const registerFirstStepRequest = usePostRequest({
        url: REGISTER_USER,
    })

    const registerConfirmRequest = usePostRequest({
        url: REGISTER_CONFIRM,
    })

    const createPhysicalUserRequest = usePostRequest({
        url: CREATE_PHYSICAL_USER,
        headers: {
            Authorization: `Token ${token ?? ''}`,
        },
    })

    const { response: regions } = useLoad({ url: GET_ACCOUNTS_REGIONS })
    const { response: districts } = useLoad(
        { url: GET_ACCOUNTS_DISTRICT_LIST },
        [region]
    )

    useEffect(() => {
        let list = []
        let idItem
        if (regions?.length) {
            idItem = regions.filter((item) => item.name === region)
        }
        if (idItem && districts?.length) {
            list = districts.filter((item) => item.region === idItem[0]?.id)
        }
        setDistrictList(list)
    }, [region])

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

    const validateRegister = () => {
        if (
            citizen &&
            stir?.length === 9 &&
            name &&
            birthDate &&
            sex &&
            passportNumber?.length === 9 &&
            passportDate &&
            identification?.length === 14 &&
            phone?.length >= 12
        ) {
            registerFirstStep()
        } else if (stir?.length !== 9) {
            setError(true)
            setErrorText(
                "Stir ma'lumotlari xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else if (passportNumber?.length !== 9) {
            setError(true)
            setErrorText(
                "Passport seriyasi xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else if (identification?.length !== 14) {
            setError(true)
            setErrorText(
                "JSHSHIR xato kiritildi. Iltimos qaytadan urinib ko'ring"
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

    const createPhysicalUser = async () => {
        const { response } = await createPhysicalUserRequest.request({
            data: {
                citizen: citizen,
                inn: stir,
                fsl: name,
                date_birth: birthDate,
                gender: sex === 'Erkak' ? 'Male' : 'Female',
                passport_num: passportNumber,
                passport_date: passportDate,
                jshshir: identification,
                passport_given_by: 'Uz',
                district: district,
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
    return (
        <div>
            <div className="log_main">
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*FIO</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                        />
                    </div>
                </div>
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*Fuqoroligi</div>
                        <select
                            onChange={(event) => setCitizen(event.target.value)}
                            name=""
                            id=""
                        >
                            <option value="Yapon">Yapon</option>
                            <option value="Uzb">Uzb</option>
                        </select>
                    </div>
                </div>
                <div className="log_main_type ">
                    <div className="inp_box">
                        <div className="inp_name">*Stir</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) => setStir(event.target.value)}
                            value={stir}
                        />
                    </div>
                </div>
            </div>
            <div className="log_main">
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*Tug‘ilgan sana</div>
                        <input
                            type="date"
                            placeholder=""
                            onChange={(event) =>
                                setBirthDate(event.target.value)
                            }
                            value={birthDate}
                        />
                    </div>
                </div>
                <div className="log_main_type ">
                    <div className="inp_box">
                        <div className="inp_name">*Jinsi</div>
                        <select
                            onChange={(event) => setSex(event.target.value)}
                            name=""
                            id=""
                        >
                            <option value="Erkak">Erkak</option>
                            <option value="Ayol">Ayol</option>
                        </select>
                    </div>
                </div>

                <div className="log_main_type">
                    <div className="inp_box">
                        <div className="inp_name">*JSHSHIR</div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) =>
                                setIdentification(event.target.value)
                            }
                            value={identification}
                        />
                    </div>
                </div>
            </div>
            <div className="log_main">
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">
                            *Pasport seriyasi va raqami
                        </div>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(event) =>
                                setPassportNumber(event.target.value)
                            }
                            value={passportNumber}
                        />
                    </div>
                </div>
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*Pasport berilgan sana</div>
                        <input
                            type="date"
                            placeholder=""
                            onChange={(event) =>
                                setPassportDate(event.target.value)
                            }
                            value={passportDate}
                        />
                    </div>
                </div>
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*Hudud/viloyat nomi</div>
                        <select
                            name=""
                            id=""
                            onChange={(event) => setRegion(event.target.value)}
                            value={region?.name}
                        >
                            {regions?.length
                                ? regions?.map((item, index) => (
                                      <option value={item.name} key={index}>
                                          {item?.name}
                                      </option>
                                  ))
                                : ''}
                        </select>
                    </div>
                </div>
            </div>
            <div className="log_main">
                <div className="log_main_type log_main_type_2">
                    <div className="inp_box">
                        <div className="inp_name">*Tuman nomi</div>
                        <select
                            name=""
                            id=""
                            onChange={(event) =>
                                setDistrict(event.target.value)
                            }
                            value={district?.name}
                        >
                            {districtList?.length
                                ? districtList?.map((item, index) => (
                                      <option
                                          value={item.id}
                                          key={index}
                                          id={item}
                                      >
                                          {item?.name}
                                      </option>
                                  ))
                                : ''}
                        </select>
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
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div
                    style={success ? { opacity: 1 } : { opacity: 0.5 }}
                    className="log_confir"
                    onClick={() => {
                        if (success) {
                            createPhysicalUser()
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
