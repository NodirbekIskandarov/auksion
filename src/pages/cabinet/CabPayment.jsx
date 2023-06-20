import React from 'react'

const CabPayment = () => {
    return (
        <>
            <div className="CabMessage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cab_mes_1">
                                <div className="cab_mes_1_name">
                                    Mening to`lovlarim
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cab_mes_search_box">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="cab_mes_inp_box col-lg-4 d-flex justify-content-center">
                                <input
                                    placeholder="29.03.2023 dan"
                                    type="date"
                                    name=""
                                    id=""
                                />
                                {/* <img src="/img/icon_cal.png" alt="" /> */}
                            </div>
                            <div className="cab_mes_inp_box col-lg-4 d-flex justify-content-center">
                                <input
                                    placeholder="31.03.2023 gacha"
                                    type="date"
                                    name=""
                                    id=""
                                />
                                {/* <img src="/img/icon_cal.png" alt="" /> */}
                            </div>
                            <div className="cab_mes_btn col-lg-4">
                                <img src="/img/icon_search_2.png" alt="" />
                                Izlash
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cab_mes_box ">
                    <div className="container">
                        <div className="row gap-0 justify-content-between">
                            <div className="col-lg-2 col-md-6 col-12 d-flex flex-column divider">
                                <div className="cab_mes_name ">
                                    Kvitansiya №
                                </div>

                                <div className="cab_mes_box_h ">1000963</div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-12 d-flex flex-column divider">
                                <div className="cab_mes_name">To’lov vaqti</div>
                                <div className="cab_mes_box_h">
                                    30.03.2023 14:21:40
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 d-flex flex-column divider">
                                <div className="cab_mes_name">Summa</div>
                                <div className="cab_mes_box_h">
                                    8 900 600 UZS
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-12 d-flex flex-column divider">
                                <div className="cab_mes_name">Holati</div>
                                <div className="cab_mes_box_g active">
                                    Bekor qilingan
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-12 d-flex flex-column divider">
                                <div className="cab_mes_name">Izoh</div>
                                <div className="cab_mes_box_h">Qaytarish</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CabPayment
