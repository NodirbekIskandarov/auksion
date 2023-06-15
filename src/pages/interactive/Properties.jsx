import React from 'react'
import { useSelector } from 'react-redux'
import { getReduxText } from '../../locales'

export default function Properties() {
    const language = useSelector((state) => state.language)

    return (
        <>
            <div className="inter_tab_name">
                {getReduxText('services_properties', language)}
            </div>
            <div className="inter_tab_box">
                <form className="inter_tab_inp_box">
                    <div className="d-flex gap-4">
                        <input
                            placeholder="G’olib STIR/JSHSHIRi"
                            type="text"
                            name=""
                            id=""
                        />
                        <input
                            placeholder="Lot raqami"
                            type="text"
                            name=""
                            id=""
                        />
                    </div>

                    <div className={'row'}>
                        <div className={'col-3'} />

                        <button className="col-6 inter_btn_search mt-3">
                            <img src="/img/icon_search.png" alt="" />
                            {getReduxText('nav_8', language)}
                        </button>

                        <div className={'col-3'} />
                    </div>
                </form>
            </div>
        </>
    )
}
