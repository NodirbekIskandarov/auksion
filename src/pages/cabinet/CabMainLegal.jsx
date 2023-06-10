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
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Shaxs turi:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            Yuridik shaxs
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            INN:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.inn}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Tashkilot nomi:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.name}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name_2">
                                        <div className="cab_1_box_name_h">
                                            Tashkilot rahbari:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.director}
                                        </div>
                                    </div>
                                </div>
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Tashkilot ro'yxatdan o'tgan sana:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.registeredDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cab_1">
                                <div className="cab_1_name">Manzil</div>
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Manzil:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.address}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cab_1">
                                <div className="cab_1_name">
                                    Bank ma’lumotlari
                                </div>
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Bank filiali:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.bank}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Bank hisob raqami:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.account}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            MFO:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.mfo}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cab_1">
                                <div className="cab_1_name">
                                    Aloqa ma’lumotlari
                                </div>
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Telefon:
                                        </div>
                                        <div className="cab_1_box_name_p">
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
