import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoad, usePostRequest } from '../../hooks/request'
import {
    CREATE_PHYSICAL_USER,
    GET_ACCOUNTS_DISTRICT_LIST,
    GET_ACCOUNTS_REGIONS,
    REGISTER_CONFIRM,
    REGISTER_USER,
} from '../../tools/urls'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'
import { getReduxText } from '../../locales'

export default function PhysicalPersonRegister({
    setErrorText,
    setError,
    setSuccess,
    success,
}) {
    const language = useSelector((state) => state.language)
    const [code, setCode] = useState('')

    const [region, setRegion] = useState({})
    // const [district, setDistrict] = useState(1)
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

    const { response: regions } = useLoad(
        { url: GET_ACCOUNTS_REGIONS.replace('en', language) },
        [language]
    )
    const { response: districts } = useLoad(
        { url: GET_ACCOUNTS_DISTRICT_LIST.replace('en', language) },
        [region, language]
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

    const registerConfirm = async (phone) => {
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

    const validateRegister = (values) => {
        if (
            values.citizen &&
            values.stir &&
            values.fsl &&
            values.birthDate &&
            values.gender &&
            values.passportNumber &&
            values.passportDate &&
            values.identification &&
            values.phone
        ) {
            if (
                values.citizen &&
                values.stir?.length === 9 &&
                values.fsl &&
                values.birthDate &&
                values.gender &&
                values.passportNumber?.length === 9 &&
                values.passportDate &&
                values.identification?.length === 14 &&
                values.phone?.length >= 12
            ) {
                registerFirstStep(values.phone)
            } else if (values.stir?.length !== 9) {
                setError(true)
                setErrorText(getReduxText('physical_stir_error_text', language))
            } else if (values.passportNumber?.length !== 9) {
                setError(true)
                setErrorText(
                    getReduxText('physical_passport_error_text', language)
                )
            } else if (values.identification?.length !== 14) {
                setError(true)
                setErrorText(
                    getReduxText('physical_jshshr_error_text', language)
                )
            } else if (values.phone?.length < 12) {
                setError(true)
                setErrorText(
                    getReduxText('physical_phone_error_text', language)
                )
            } else {
                setError(true)
                setErrorText(
                    getReduxText('physical_fill_all_error_text', language)
                )
            }
        } else {
            setError(true)
            setErrorText(getReduxText('physical_fill_all_error_text', language))
        }
    }

    const createPhysicalUser = async (values) => {
        const { response } = await createPhysicalUserRequest.request({
            data: {
                citizen: values.citizen,
                inn: values.stir,
                fsl: values.fsl,
                date_birth: values.birthDate,
                gender: values.gender,
                passport_num: values.passportNumber,
                passport_date: values.passportDate,
                jshshir: values.identification,
                passport_given_by: 'Uz',
                district: values.district,
            },
        })

        if (response) {
            navigate('/login')
        } else {
            setError(true)
            setErrorText(getReduxText('physical_fail_error_text', language))
        }
    }
    return (
        <div>
            <Formik
                initialValues={{
                    citizen: '',
                    stir: '',
                    fsl: '',
                    birthDate: '',
                    gender: 'Male',
                    passportNumber: '',
                    passportDate: '',
                    identification: '',
                    passport_given_by: 'Uz',
                    district: '1',
                    phone: '',
                }}
                onSubmit={(values) => {
                    validateRegister(values)
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="log_main row">
                            <div className="log_main_type log_main_type_2 col-lg-4 col-12">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_name',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'fsl'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.fsl}
                                    />
                                </div>
                            </div>

                            <div className="log_main_type log_main_type_2 col-lg-4 col-12">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_citizen',
                                            language
                                        )}
                                    </div>
                                    <select
                                        name={'citizen'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.citizen}
                                    >
                                        <option value="Uzb">Uzb</option>
                                        <option value="Yapon">Yapon</option>
                                    </select>
                                </div>
                            </div>

                            <div className="log_main_type col-lg-4 col-12">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_stir',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'stir'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.stir}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="log_main row">
                            <div className="log_main_type log_main_type_2 col-lg-4 col-12">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_birthDate',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="date"
                                        placeholder=""
                                        name={'birthDate'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.birthDate}
                                    />
                                </div>
                            </div>
                            <div className="log_main_type col-lg-4 col-12">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_gender',
                                            language
                                        )}
                                    </div>
                                    <select
                                        name={'gender'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.gender}
                                    >
                                        <option value="Male">
                                            {getReduxText('m_gender', language)}
                                        </option>
                                        <option value="Female">
                                            {getReduxText('f_gender', language)}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="log_main_type col-lg-4 col-12">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_inn',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'identification'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.identification}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="log_main row">
                            <div className="log_main_type log_main_type_2 col-lg-4 col-12">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_passport_number',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name={'passportNumber'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.passportNumber}
                                    />
                                </div>
                            </div>
                            <div className="log_main_type log_main_type_2 col-lg-4 col-12">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_passport_date',
                                            language
                                        )}
                                    </div>
                                    <input
                                        type="date"
                                        placeholder=""
                                        name={'passportDate'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.passportDate}
                                    />
                                </div>
                            </div>
                            <div className="log_main_type log_main_type_2 col-lg-4 col-12">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_region',
                                            language
                                        )}
                                    </div>
                                    <select
                                        name=""
                                        id=""
                                        onChange={(event) =>
                                            setRegion(event.target.value)
                                        }
                                        value={region?.name}
                                    >
                                        {regions?.length
                                            ? regions?.map((item, index) => (
                                                  <option
                                                      value={item.name}
                                                      key={index}
                                                  >
                                                      {item?.name}
                                                  </option>
                                              ))
                                            : ''}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="log_main row">
                            <div className="log_main_type log_main_type_2 col-lg-4 col-12">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_district',
                                            language
                                        )}
                                    </div>
                                    <select
                                        id=""
                                        name={'district'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.district}
                                    >
                                        {districtList?.length
                                            ? districtList?.map(
                                                  (item, index) => (
                                                      <option
                                                          value={item.id}
                                                          key={index}
                                                          id={item}
                                                      >
                                                          {item?.name}
                                                      </option>
                                                  )
                                              )
                                            : ''}
                                    </select>
                                </div>
                            </div>

                            <div className="log_main_type log_main_type_2 col-lg-4 col-12 d-flex flex-row">
                                <div className="inp_box">
                                    <div className="inp_name">
                                        {getReduxText(
                                            'main_register_phone',
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
                                    // onClick={() => validateRegister()}
                                    className="inp_btn active text-center"
                                >
                                    {getReduxText('send_sms', language)}
                                </button>
                            </div>
                            <div className="log_main_type log_main_type_2 col-lg-4 col-12 d-flex flex-row">
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
                                        onChange={(event) =>
                                            setCode(event.target.value)
                                        }
                                        value={code}
                                    />
                                </div>
                                <div
                                    onClick={() =>
                                        registerConfirm(values.phone)
                                    }
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
                                style={
                                    success ? { opacity: 1 } : { opacity: 0.5 }
                                }
                                className="log_confir"
                                onClick={() => {
                                    if (success) {
                                        createPhysicalUser(values)
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
