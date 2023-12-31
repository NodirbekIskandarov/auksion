import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import { usePatchRequest } from '../../hooks/request'
import { PHYSICAL_USER_DETAILS_RUD } from '../../tools/urls'
import { isAuthenticated } from '../../tools/auth'
import Alert from '../alerts/AlertError'
import { setToggleValue } from '../../store/features/toggleSlice'
import { getReduxText } from '../../locales'

export default function ChangeUserDetailModal({
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
        url: PHYSICAL_USER_DETAILS_RUD,
        headers: {
            Authorization: `Token ${isAuthenticated()}`,
        },
    })

    const validateUserDetails = (values) => {
        if (
            values.citizen &&
            values.stir?.length === 9 &&
            values.name &&
            values.birthDate &&
            values.sex &&
            values.passportNumber?.length === 9 &&
            values.passportDate &&
            values.identification?.length === 14 &&
            values.district &&
            values.passportBy
        ) {
            updatePhysicalUser(values).then((response) => console.log(response))
        } else if (values.stir?.length !== 9) {
            setError(true)
            setErrorText(getReduxText('inn_error_text', language))
        } else if (values.passportNumber?.length !== 9) {
            setError(true)
            setErrorText(getReduxText('passport_error_text', language))
        } else if (values.identification?.length !== 14) {
            setError(true)
            setErrorText(getReduxText('identification_error_text', language))
        } else if (values.phone?.length < 12) {
            setError(true)
            setErrorText(getReduxText('phone_error_text', language))
        } else {
            setError(true)
            setErrorText(getReduxText('other_validate_error', language))
        }
    }

    const updatePhysicalUser = async (values) => {
        const { response } = await updateUserDetailRequest.request({
            data: {
                citizen: values.citizen,
                inn: values.stir,
                fsl: values.name,
                date_birth: values.birthDate,
                gender: values.sex === 'Erkak' ? 'Male' : 'Female',
                passport_num: values.passportNumber,
                passport_date: values.passportDate,
                jshshir: values.identification,
                passport_given_by: values.passportBy,
                district: values.district,
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
                type: 'Jismoniy shaxs',
                citizen: user?.citizen,
                birthDate: user?.dateBirth,
                sex: user?.gender,
                stir: user?.inn,
                name: user?.fsl,
                passportNumber: user?.passportNum,
                passportDate: user?.passportDate,
                identification: user?.jshshir,
                passportBy: user?.passportGivenBy,
                district: '1',
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
                                            'main_cab_identity_type',
                                            language
                                        )}
                                        :
                                    </label>
                                    <select
                                        className={'change-user-detail-select'}
                                        placeholder={'Tanlang'}
                                        name={'type'}
                                        onChange={handleChange}
                                        value={values.type}
                                        onBlur={handleBlur}
                                    >
                                        <option>
                                            {getReduxText(
                                                'physical_user',
                                                language
                                            )}
                                        </option>
                                    </select>
                                </div>

                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        {getReduxText(
                                            'main_cab_citizen',
                                            language
                                        )}
                                        :
                                    </label>
                                    <select
                                        className={'change-user-detail-select'}
                                        placeholder={'Tanlang'}
                                        name={'citizen'}
                                        onChange={handleChange}
                                        value={values.citizen}
                                        onBlur={handleBlur}
                                        defaultValue={values.citizen}
                                    >
                                        <option>Uz</option>
                                        <option>{values.citizen}</option>
                                    </select>
                                </div>

                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        {getReduxText(
                                            'main_cab_birthDate',
                                            language
                                        )}
                                        :
                                    </label>
                                    <input
                                        type={'date'}
                                        className={'change-user-detail-input'}
                                        placeholder={'29.03.2023'}
                                        name={'birthDate'}
                                        onChange={handleChange}
                                        value={values.birthDate}
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
                                            'main_cab_gender',
                                            language
                                        )}
                                        :
                                    </label>
                                    <select
                                        className={'change-user-detail-select'}
                                        placeholder={'Tanlang'}
                                        name={'sex'}
                                        onChange={handleChange}
                                        value={values.sex}
                                        onBlur={handleBlur}
                                        defaultValue={values.sex}
                                    >
                                        <option>
                                            {values.sex !== 'Female'
                                                ? 'Ayol'
                                                : 'Erkak'}
                                        </option>
                                        <option>
                                            {values.sex === 'Female'
                                                ? 'Ayol'
                                                : 'Erkak'}
                                        </option>
                                    </select>
                                </div>

                                <div
                                    className={
                                        'd-flex flex-column col-12 col-lg-6 col-md-6 mt-2'
                                    }
                                >
                                    <label className={'filter-label'}>
                                        {getReduxText(
                                            'main_cab_stir',
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
                                        name={'stir'}
                                        onChange={handleChange}
                                        value={values.stir}
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
                                            'main_cab_name',
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
                                            'main_cab_passport_number',
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
                                        name={'passportNumber'}
                                        onChange={handleChange}
                                        value={values.passportNumber}
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
                                            'main_cab_passport_date',
                                            language
                                        )}
                                        :
                                    </label>
                                    <input
                                        type={'date'}
                                        className={'change-user-detail-input'}
                                        placeholder={'29.03.2023'}
                                        name={'passportDate'}
                                        onChange={handleChange}
                                        value={values.passportDate}
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
                                            'physical_cab_identification',
                                            language
                                        )}
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={getReduxText(
                                            'enter_placeholder',
                                            language
                                        )}
                                        name={'identification'}
                                        onChange={handleChange}
                                        value={values.identification}
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
                                            'physical_cab_passport_by',
                                            language
                                        )}
                                    </label>
                                    <input
                                        className={'change-user-detail-input'}
                                        placeholder={getReduxText(
                                            'enter_placeholder',
                                            language
                                        )}
                                        name={'passportBy'}
                                        onChange={handleChange}
                                        value={values.passportBy}
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
                                    className="change-user-detail-close-button"
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
