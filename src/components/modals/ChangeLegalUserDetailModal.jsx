import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import { usePatchRequest } from '../../hooks/request'
import { LEGAL_USER_DETAILS_RUD } from '../../tools/urls'
import { isAuthenticated } from '../../tools/auth'
import Alert from '../alerts/AlertError'
import { setToggleValue } from '../../store/features/toggleSlice'

export default function ChangeLegalUserDetailModal({
    user,
    setError,
    setErrorText,
    setModal,
    errorText,
    error,
}) {
    const [initialValues, setInitialValues] = useState({})
    const language = useSelector((state) => state.language)
    const toggleValue = useSelector((state) => state.toggleValue)
    const dispatch = useDispatch()
    const updateUserDetailRequest = usePatchRequest({
        url: LEGAL_USER_DETAILS_RUD,
        headers: {
            Authorization: `Token ${isAuthenticated()}`,
        },
    })

    const validateUserDetails = (values) => {
        if (
            values.inn?.length === 9 &&
            values.name &&
            values.director &&
            values.registeredDate &&
            values.address &&
            values.mfo?.length === 9 &&
            values.bank &&
            values.account?.length === 20
        ) {
            updatePhysicalUser(values)
        } else if (values.inn?.length !== 9) {
            setError(true)
            setErrorText(
                "INN ma'lumotlari xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else if (values.mfo?.length !== 9) {
            setError(true)
            setErrorText(
                "Passport seriyasi xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else if (values.account?.length !== 20) {
            setError(true)
            setErrorText(
                "JSHSHIR xato kiritildi. Iltimos qaytadan urinib ko'ring"
            )
        } else {
            setError(true)
            setErrorText("Barcha ma'lumotlarni to'liq kiritish talab etiladi")
        }
    }

    const updatePhysicalUser = async (values) => {
        const { response } = await updateUserDetailRequest.request({
            data: {
                name: values.name,
                inn: values.inn,
                director: values.director,
                registered_date: values.registeredDate,
                address: values.address,
                mfo: values.mfo,
                bank: values.bank,
                account: values.account,
            },
        })

        if (response) {
            dispatch(setToggleValue(!toggleValue))
            setModal(false)
        } else {
            setError(true)
            setErrorText(
                "Yangi ma'lumotlarni saqolashda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring"
            )
        }
    }

    useEffect(() => {
        if (user) {
            setInitialValues({
                name: user?.name,
                inn: user?.inn,
                director: user?.director,
                registeredDate: user?.registeredDate,
                address: user?.address,
                mfo: user?.mfo,
                bank: user?.bank,
                account: user?.account,
            })
        }
    }, [user])
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={(values) => validateUserDetails(values)}
        >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className={'change-user-detail-modal-main'}>
                        <div
                            className={
                                'change-user-detail-modal-container pt-4 px-4'
                            }
                        >
                            {error ? (
                                <Alert
                                    errorText={errorText}
                                    setError={setError}
                                    setErrorText={setErrorText}
                                />
                            ) : (
                                ''
                            )}
                            <div className={'row pt-4'}>
                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        INN:
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={'Kiriting'}
                                        name={'inn'}
                                        onChange={handleChange}
                                        value={values.inn}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        Tashkilot nomi:
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={'Kiriting'}
                                        name={'name'}
                                        onChange={handleChange}
                                        value={values.name}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        Tashkilot rahbari:
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={'Kiriting'}
                                        name={'director'}
                                        onChange={handleChange}
                                        value={values.director}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        Tashkilot ro'yxatdan o'tgan sana:
                                    </label>
                                    <input
                                        type={'date'}
                                        className={'change-user-detail-input'}
                                        placeholder={'29.03.2023'}
                                        name={'registeredDate'}
                                        onChange={handleChange}
                                        value={values.registeredDate}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        Manzil:
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={'Kiriting'}
                                        name={'address'}
                                        onChange={handleChange}
                                        value={values.address}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        MFO:
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={'Kiriting'}
                                        name={'mfo'}
                                        onChange={handleChange}
                                        value={values.mfo}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        Bank filiali:
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={'Kiriting'}
                                        name={'bank'}
                                        onChange={handleChange}
                                        value={values.bank}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        Bank hisob raqami:
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={'Kiriting'}
                                        name={'account'}
                                        onChange={handleChange}
                                        value={values.account}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            <div
                                className={
                                    'd-flex flex-row align-items-center justify-content-end pe-2 pb-3'
                                }
                            >
                                <button
                                    className="change-user-detail-button"
                                    type={'submit'}
                                >
                                    Saqlash
                                </button>

                                <div
                                    onClick={() => setModal(false)}
                                    className="change-user-detail-close-button"
                                >
                                    Yopish
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )
}
