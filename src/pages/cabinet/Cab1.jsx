import React from 'react'

const Cab1 = ({ user }) => {
    const phone = localStorage.getItem('phone')
    console.log(user)
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
                                            Jismoniy shaxs
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Fuqoroligi:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.citizen}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            STIR:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.inn}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name_2">
                                        <div className="cab_1_box_name_h">
                                            Ishtirokchi nomi:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.fsl}
                                        </div>
                                    </div>
                                </div>
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Tug‘ilgan sana:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.dateBirth}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Jinsi:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.gender}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Pasport seriyasi va raqami:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.passportNum}
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name_2">
                                        <div className="cab_1_box_name_h">
                                            Pasport berilgan sana:
                                        </div>
                                        <div className="cab_1_box_name_p">
                                            {user?.passportDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cab_1">
                                <div className="cab_1_name">Manzil</div>
                                <div className="cab_1_box">
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Hudud/viloyat nomi:
                                        </div>
                                        <div className="cab_1_box_name_p active">
                                            Kiritilmagan
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Tuman nomi:
                                        </div>
                                        <div className="cab_1_box_name_p active">
                                            Kiritilmagan
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Manzil :
                                        </div>
                                        <div className="cab_1_box_name_p active">
                                            Kiritilmagan
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
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            E-mail:
                                        </div>
                                        <div className="cab_1_box_name_p active">
                                            Kiritilmagan
                                        </div>
                                    </div>
                                    <div className="cab_1_box_name">
                                        <div className="cab_1_box_name_h">
                                            Qo‘shimcha telefonlar:
                                        </div>
                                        <div className="cab_1_box_name_p active">
                                            Kiritilmagan
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
