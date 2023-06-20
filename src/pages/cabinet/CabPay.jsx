import React from 'react'

const CabPay = () => {
    return (
        <>
            <div className="CabMessage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cab_mes_1">
                                <div className="cab_mes_1_name">
                                    Hisob varaqalar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cab_mes_search_box">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="cab_mes_inp_box_2 col-lg-3 col-md-12 col-12 d-flex justify-content-center">
                                <img src="/img/icon_refresh.png" alt="" />
                                <div className="cab_mes_inp_box_h">
                                    Yangilash
                                </div>
                            </div>
                            <div className="cab_mes_inp_box col-lg-3 col-md-12 col-12 d-flex justify-content-center">
                                <input
                                    placeholder="29.03.2023 dan"
                                    type="date"
                                    name=""
                                    id=""
                                />
                                {/* <img src="/img/icon_cal.png" alt="" /> */}
                            </div>
                            <div className="cab_mes_inp_box col-lg-3 col-md-12 col-12 d-flex justify-content-center">
                                <input
                                    placeholder="31.03.2023 gacha"
                                    type="text"
                                    name=""
                                    id=""
                                />
                                {/* <img src="/img/icon_cal.png" alt="" /> */}
                            </div>
                            <div className="cab_mes_btn col-lg-3 col-md-12 col-12">
                                <img src="/img/icon_search_2.png" alt="" />
                                Izlash
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cab_mes_box">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className={'col-lg-4 col-md-6 col-12'}>
                                <div className="cab_mes_name ms-5">Mavzu</div>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="cab_mes_icon_mes"
                                        src="/img/icon_mes_1.png"
                                        alt=""
                                    />
                                    <div className="cab_mes_box_h ms-4">
                                        Ro`yxatdan o`tish muvaffaqiyatli
                                        yakunlandi
                                    </div>
                                </div>
                            </div>

                            <div className={'col-lg-4 col-md-6 col-12'}>
                                <div className="cab_mes_name ms-5">Matn</div>
                                <div className="d-flex align-items-center">
                                    <div className="cab_mes_box_h ms-5">
                                        Muvaffaqiyatli ro`yxatdan o`tganingiz
                                        bilan tabriklaymiz!
                                    </div>
                                </div>
                            </div>

                            <div className={'col-lg-4 col-md-6 col-12'}>
                                <div className="cab_mes_name ms-5">
                                    Yuborilgan vaqt
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="cab_mes_box_h ms-5">
                                        30.03.2023 14:21:40
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

export default CabPay
