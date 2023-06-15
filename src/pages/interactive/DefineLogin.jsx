import React from 'react'
import { useSelector } from 'react-redux'
import { getReduxText } from '../../locales'

export default function DefineLogin() {
    const language = useSelector((state) => state.language)
    return (
        <>
            <div className="inter_tab_name">
                {getReduxText('services_define_login', language)}
            </div>
            <div className="inter_tab_box">
                <div className="inter_tab_info_2 mb-4">
                    {getReduxText('login_define_description', language)}
                </div>

                <form className="inter_tab_inp_box">
                    <div className="d-flex gap-4">
                        <input
                            placeholder={getReduxText(
                                'stir_placeholder',
                                language
                            )}
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
                        {getReduxText('login_define_example', language)}
                    </div>
                </form>
            </div>
        </>
    )
}
