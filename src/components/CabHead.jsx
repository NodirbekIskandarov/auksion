import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeMenu } from '../store/features/cabinetMenusSlice'

const CabHead = ({ role, response }) => {
    const dispatch = useDispatch()
    const cabinetMenuState = useSelector((state) => state.cabinetMenu)
    const changeCabinetState = (current) => {
        let active = Object.entries(cabinetMenuState).find(
            (item) => item[1] === true
        )[0]

        dispatch(
            activeMenu({
                ...cabinetMenuState,
                [active]: false,
                [current]: true,
            })
        )
    }

    return (
        <>
            <div className="CabHead">
                <div className="cab_head_box">
                    <div
                        className="cab_head_top pointer"
                        onClick={() => changeCabinetState('main')}
                    >
                        <img src="/img/user.png" alt="" />
                        <div className="cab_head_top_box">
                            <div className="cab_head_top_name">
                                {response?.name}
                            </div>
                            <div className="cab_head_top_h">
                                {role === 'Jismoniy' ? 'JSHSHIR:' : 'INN: '}
                                {response?.inn}
                            </div>
                            <div className="cab_head_top_p">Xaridor</div>
                        </div>
                    </div>
                    <div className="cab_head_main">
                        <img src="/img/icon_profile_1.png" alt="" />
                        <div className="cab_head_main_h">0.00 UZS</div>
                    </div>

                    <div
                        onClick={() => changeCabinetState('fillAccount')}
                        className="cab_head_main pointer"
                    >
                        <img src="/img/icon_profile_2.png" alt="" />
                        <div className="cab_head_main_h">
                            Hisobni to’ldirish
                        </div>
                    </div>

                    {/* <div className="cab_head_main">
                        <img src="/img/icon_profile_3.png" alt="" />
                        <div className="cab_head_main_h">Pulni qaytarish</div>
                    </div> */}

                    <div
                        onClick={() => changeCabinetState('messages')}
                        className="cab_head_main pointer"
                    >
                        <img src="/img/icon_profile_4.png" alt="" />
                        <div className="cab_head_main_h">Xabarlar</div>
                    </div>

                    <div
                        onClick={() => changeCabinetState('payments')}
                        className="cab_head_main pointer"
                    >
                        <img src="/img/icon_profile_5.png" alt="" />
                        <div className="cab_head_main_h">
                            To’lov amaliyotlari
                        </div>
                    </div>

                    <div
                        onClick={() => changeCabinetState('ownData')}
                        className="cab_head_main pointer"
                    >
                        <img src="/img/icon_profile_6.png" alt="" />
                        <div className="cab_head_main_h">
                            Mening ma’lumotlarim
                        </div>
                    </div>

                    <div
                        onClick={() => changeCabinetState('applications')}
                        className="cab_head_main pointer"
                    >
                        <img src="/img/icon_profile_7.png" alt="" />
                        <div className="cab_head_main_h">
                            Savdoda qatnashish arizalari
                        </div>
                    </div>

                    <div
                        onClick={() => changeCabinetState('wins')}
                        className="cab_head_main pointer"
                    >
                        <img src="/img/icon_profile_8.png" alt="" />
                        <div className="cab_head_main_h">Yutuqlar</div>
                    </div>

                    <div
                        onClick={() => changeCabinetState('choseLots')}
                        className="cab_head_main pointer"
                    >
                        <img src="/img/icon_profile_9.png" alt="" />
                        <div className="cab_head_main_h">Tanlangan lotlar</div>
                    </div>

                    <div
                        onClick={() => changeCabinetState('contracts')}
                        className="cab_head_main pointer"
                    >
                        <img src="/img/icon_profile_10.png" alt="" />
                        <div className="cab_head_main_h">
                            Oldi-sotdi/ijara shartnomalari
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CabHead
