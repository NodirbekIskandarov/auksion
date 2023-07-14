import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import { usePatchRequest } from '../../hooks/request'
import { LEGAL_USER_DETAILS_RUD } from '../../tools/urls'
import { isAuthenticated } from '../../tools/auth'
import Alert from '../alerts/AlertError'
import { setToggleValue } from '../../store/features/toggleSlice'
import { getReduxText } from '../../locales'

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
            updatePhysicalUser(values).then((r) => console.log(r))
        } else if (values.inn?.length !== 9) {
            setError(true)
            setErrorText(getReduxText('inn_error_text', language))
        } else if (values.mfo?.length !== 9) {
            setError(true)
            setErrorText(getReduxText('mfo_error_text', language))
        } else if (values.account?.length !== 20) {
            setError(true)
            setErrorText(getReduxText('account_error_text', language))
        } else {
            setError(true)
            setErrorText(getReduxText('other_validate_error', language))
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
            setErrorText(getReduxText('save_error', language))
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
                                        {getReduxText(
                                            'legal_cab_inn',
                                            language
                                        )}
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={getReduxText(
                                            'enter_placeholder',
                                            language
                                        )}
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
                                        {getReduxText(
                                            'legal_cab_organization',
                                            language
                                        )}
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={getReduxText(
                                            'enter_placeholder',
                                            language
                                        )}
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
                                        {getReduxText(
                                            'legal_cab_director',
                                            language
                                        )}
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={getReduxText(
                                            'enter_placeholder',
                                            language
                                        )}
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
                                        {getReduxText(
                                            'legal_cab_registered_date',
                                            language
                                        )}
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
                                        {getReduxText(
                                            'legal_cab_address',
                                            language
                                        )}
                                        :
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={getReduxText(
                                            'enter_placeholder',
                                            language
                                        )}
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
                                        {getReduxText(
                                            'legal_cab_mfo',
                                            language
                                        )}
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={getReduxText(
                                            'enter_placeholder',
                                            language
                                        )}
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
                                        {getReduxText(
                                            'legal_cab_bank',
                                            language
                                        )}
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={getReduxText(
                                            'enter_placeholder',
                                            language
                                        )}
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
                                        {getReduxText(
                                            'legal_cab_account',
                                            language
                                        )}
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={getReduxText(
                                            'enter_placeholder',
                                            language
                                        )}
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
                                    {getReduxText('save_button', language)}
                                </button>

                                <div
                                    onClick={() => setModal(false)}
                                    className="change-user-detail-close-button pointer"
                                >
                                    {getReduxText('close_button', language)}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )
}
