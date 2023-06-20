import React from 'react'

const CabMainLegal = ({ user }) => {
    const phone = localStorage.getItem('phone')
    return (
        <>
            <div className="Cab1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cab_1">
                                <div className="cab_1_name">
                                    Umumiy ma’lumotlar
                                </div>
                                <div className="cab_1_box row">
                                    <div className="cab_1_box_name col-lg-3 col-md-12 col-12">
                                        <div className="cab_1_box_name_h px-3">
                                            Shaxs turi:
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            Yuridik shaxs
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name col-lg-3 col-md-12 col-12">
                                        <div className="cab_1_box_name_h px-3">
                                            INN:
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.inn}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name col-lg-3 col-md-12 col-12">
                                        <div className="cab_1_box_name_h px-3">
                                            Tashkilot nomi:
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.name}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name_2 col-lg-3 col-md-12 col-12">
                                        <div className="cab_1_box_name_h px-3">
                                            Tashkilot rahbari:
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.director}
                                        </div>
                                    </div>
                                </div>
                                <div className="cab_1_box row">
                                    <div className="cab_1_box_name_2">
                                        <div className="cab_1_box_name_h px-3">
                                            Tashkilot ro'yxatdan o'tgan sana:
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.registeredDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cab_1">
                                <div className="cab_1_name">Manzil</div>
                                <div className="cab_1_box row">
                                    <div className="cab_1_box_name_2 col-12">
                                        <div className="cab_1_box_name_h px-3">
                                            Manzil:
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.address}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cab_1">
                                <div className="cab_1_name">
                                    Bank ma’lumotlari
                                </div>
                                <div className="cab_1_box row">
                                    <div className="cab_1_box_name col-lg-4 col-md-12 col-12">
                                        <div className="cab_1_box_name_h px-3">
                                            Bank filiali:
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.bank}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name col-lg-4 col-md-12 col-12">
                                        <div className="cab_1_box_name_h px-3">
                                            Bank hisob raqami:
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.account}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name col-lg-4 col-md-12 col-12">
                                        <div className="cab_1_box_name_h px-3">
                                            MFO:
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {user?.mfo}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cab_1">
                                <div className="cab_1_name">
                                    Aloqa ma’lumotlari
                                </div>
                                <div className="cab_1_box row">
                                    <div className="cab_1_box_name_2 col-12">
                                        <div className="cab_1_box_name_h px-3">
                                            Telefon:
                                        </div>
                                        <div className="cab_1_box_name_p px-3">
                                            {phone ?? ''}
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

export default CabMainLegal
