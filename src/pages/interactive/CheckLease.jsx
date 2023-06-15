import React from 'react'
import { getReduxText } from '../../locales'
import { useSelector } from 'react-redux'

export default function CheckLease() {
    const language = useSelector((state) => state.language)

    return (
        <>
            <div className="inter_tab_name">
                {getReduxText('services_check_rent', language)}
            </div>
            <div className="inter_tab_box">
                <form className="inter_tab_inp_box">
                    <div className="d-flex gap-4">
                        <input
                            placeholder={getReduxText('win_stir', language)}
                            type="text"
                            name=""
                            id=""
                        />
                        <input
                            placeholder={getReduxText('lot_number', language)}
                            type="text"
                            name=""
                            id=""
                        />
                    </div>
                    <div className={'row'}>
                        <div className={'col-3'} />

                        <button className={'col-6'}>
                            {getReduxText('check_text', language)}
                        </button>

                        <div className={'col-3'} />
                    </div>
                </form>
                <div className="inter_tab_info">
                    {getReduxText('check_document_description', language)}
                </div>
            </div>
        </>
    )
}
