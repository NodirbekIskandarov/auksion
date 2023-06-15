import React from 'react'
import { useSelector } from 'react-redux'
import { getReduxText } from '../../locales'

export default function DefineDishonest() {
    const language = useSelector((state) => state.language)
    return (
        <>
            <div className="inter_tab_name">
                {getReduxText('services_define_evil', language)}
            </div>
            <div className="inter_tab_box">
                <form className="inter_tab_inp_box">
                    <div className="d-flex gap-4">
                        <input
                            placeholder="STIR yoki JSHSHIR"
                            type="text"
                            name=""
                            id=""
                        />
                        <button className="inter_btn_search">
                            <img src="/img/icon_search.png" alt="" />
                            {getReduxText('nav_8', language)}
                        </button>
                    </div>
                    <div className="inter_tab_inp_ex">
                        Namuna: 123 456 789 yoki 123 456 789 101 12
                    </div>
                </form>
            </div>
        </>
    )
}
