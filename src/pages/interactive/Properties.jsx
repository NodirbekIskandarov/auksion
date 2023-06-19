import React from 'react'
import { useSelector } from 'react-redux'
import { getReduxText } from '../../locales'
import SearchIcon from '../../img/svgs/search-icon.svg'

export default function Properties() {
    const language = useSelector((state) => state.language)

    return (
        <>
            <div className="inter_tab_name">
                {getReduxText('services_properties', language)}
            </div>
            <div className="inter_tab_box">
                <form className="inter_tab_inp_box">
                    <div className="row">
                        <div className={'col-lg-6 mt-2'}>
                            <input
                                placeholder="G’olib STIR/JSHSHIRi"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>

                        <div className={'col-lg-6 mt-2'}>
                            <input
                                placeholder="Lot raqami"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                    </div>

                    <div className={'row px-3'}>
                        <div className={'col-lg-3 col-2'} />

                        <button className="col-lg-6 col-8 inter_btn_search mt-3">
                            <img src={SearchIcon} alt="" />
                            {getReduxText('nav_8', language)}
                        </button>

                        <div className={'col-lg-3 col-2'} />
                    </div>
                </form>
            </div>
        </>
    )
}
