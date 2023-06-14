import React from 'react'
import { getReduxText } from '../../locales'
import { useSelector } from 'react-redux'

const Cab1 = ({ user }) => {
    const phone = localStorage.getItem('phone')
    const language = useSelector((state) => state.language)

    return (
        <>
            <div className="Cab1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cab_1">
                                <div className="cab_1_name">
                                    {getReduxText(
                                        'main_cab_generalInfo',
                                        language
                                    )}
                                </div>
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_identity_type',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            Jismoniy shaxs
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_citizen',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.citizen}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_stir',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.inn}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name_2">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_name',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.fsl}
                                        </div>
                                    </div>
                                </div>
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_birthDate',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.dateBirth}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_gender',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.gender}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_passport_number',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.passportNum}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name_2">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_passport_date',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.passportDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cab_1">
                                <div className="cab_1_name">
                                    {getReduxText('main_cab_address', language)}
                                </div>
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_region',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p active">
                                            {getReduxText(
                                                'main_cab_unfilled',
                                                language
                                            )}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_district',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p active">
                                            {getReduxText(
                                                'main_cab_unfilled',
                                                language
                                            )}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_address',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p active">
                                            {getReduxText(
                                                'main_cab_unfilled',
                                                language
                                            )}
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
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_phone',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {phone ?? ''}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_email',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p active">
                                            {getReduxText(
                                                'main_cab_unfilled',
                                                language
                                            )}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            {getReduxText(
                                                'main_cab_additional_phone',
                                                language
                                            )}
                                            :
                                        </div>
                                        <div className="cab_1_box_name_p active">
                                            {getReduxText(
                                                'main_cab_unfilled',
                                                language
                                            )}
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
