import React, { useState } from 'react'
import { getReduxText } from '../../locales'
import { useSelector } from 'react-redux'
import EditIcon from '../../img/svgs/edit.svg'
import ChangeUserDetailModal from '../../components/modals/ChangeUserDetailModal'

const Cab1 = ({ user }) => {
    const phone = localStorage.getItem('phone')
    const language = useSelector((state) => state.language)
    const [modal, setModal] = useState(false)
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')

    return (
        <>
            <div className="Cab1">
                <div className={'container'}>
                    <div className="row">
                        <div className="col-12">
                            {modal ? (
                                <ChangeUserDetailModal
                                    user={user}
                                    setError={setError}
                                    setErrorText={setErrorText}
                                    error={error}
                                    errorText={errorText}
                                    setModal={setModal}
                                />
                            ) : (
                                ''
                            )}
                            <div className="cab_1">
                                <div className="cab_1_name">
                                    {getReduxText(
                                        'main_cab_generalInfo',
                                        language
                                    )}
                                </div>
                                <div className="cab_1_box row">
                                    <div className="cab_1_box_name col-lg-3 col-md-12 col-12 d-flex justify-content-center">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_identity_type',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            Jismoniy shaxs
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name col-lg-3">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_citizen',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.citizen}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name col-lg-3 px-3">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_stir',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.inn}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name_2 col-lg-3">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_name',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.fsl}
                                        </div>
                                    </div>
                                </div>

                                <div className="cab_1_box row">
                                    <div className="cab_1_box_name col-lg-3 col-md-12 col-12 d-flex justify-content-centere">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_birthDate',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.dateBirth}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name col-lg-3 col-md-12 col-12 d-flex justify-content-centere">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_gender',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.gender}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name col-lg-3 col-md-12 col-12 d-flex justify-content-center">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_passport_number',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.passportNum}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name_2 col-lg-3 col-md-12 col-12 d-flex justify-content-center">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_passport_date',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.passportDate}
                                        </div>
                                    </div>
                                </div>

                                <div className="cab_1_box row d-flex justify-content-end px-3">
                                    <div className="cab_1_box_name_2 col-lg-2 pointer">
                                        <div
                                            className={
                                                'user-detail-change-button'
                                            }
                                            onClick={() => setModal(true)}
                                        >
                                            Tahrirlash
                                            <img
                                                src={EditIcon}
                                                alt={'edit-icon'}
                                                className={'ms-2'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cab_1">
                                <div className="cab_1_name">
                                    {getReduxText('main_cab_address', language)}
                                </div>
                                <div className="cab_1_box row">
                                    <div className="cab_1_box_name col-lg-4 col-md-4 col-12 d-flex justify-content-center">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_region',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p active px-3">
                                            {getReduxText(
                                                'main_cab_unfilled',
                                                language
                                            )}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name col-lg-4 col-md-4 col-12 d-flex justify-content-center">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_district',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p active px-3">
                                            {getReduxText(
                                                'main_cab_unfilled',
                                                language
                                            )}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name_2 col-lg-4 col-md-4 col-12 d-flex justify-content-center">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_address',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p active px-3">
                                            {getReduxText(
                                                'main_cab_unfilled',
                                                language
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="cab_1_box row d-flex justify-content-end px-3">
                                    <div className="cab_1_box_name_2 col-lg-2 pointer">
                                        <div
                                            className={
                                                'user-detail-change-button'
                                            }
                                            onClick={() => setModal(true)}
                                        >
                                            Tahrirlash
                                            <img
                                                src={EditIcon}
                                                alt={'edit-icon'}
                                                className={'ms-2'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cab_1">
                                <div className="cab_1_name">
                                    {getReduxText(
                                        'main_cab_contact_information',
                                        language
                                    )}
                                    :
                                </div>
                                <div className="cab_1_box row">
                                    <div className="cab_1_box_name col-lg-4 col-md-4 col-12 d-flex justify-content-center">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_phone',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {phone ?? ''}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name col-lg-4 col-md-4 col-12 d-flex justify-content-center">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_email',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p active px-3">
                                            {getReduxText(
                                                'main_cab_unfilled',
                                                language
                                            )}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name_2 col-lg-4 col-md-4 col-12 d-flex justify-content-center">
                                        <div className="cab_1_box_name_h px-3">
                                            {getReduxText(
                                                'main_cab_additional_phone',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p active px-3">
                                            {getReduxText(
                                                'main_cab_unfilled',
                                                language
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="cab_1_box row d-flex justify-content-end px-3">
                                    <div className="cab_1_box_name_2 col-lg-2 pointer">
                                        <div
                                            className={
                                                'user-detail-change-button'
                                            }
                                            onClick={() => setModal(true)}
                                        >
                                            Tahrirlash
                                            <img
                                                src={EditIcon}
                                                alt={'edit-icon'}
                                                className={'ms-2'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cab1
