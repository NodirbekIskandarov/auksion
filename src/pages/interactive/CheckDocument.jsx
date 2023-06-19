import React from 'react'
import { getReduxText } from '../../locales'
import { useSelector } from 'react-redux'

export default function CheckDocument() {
    const language = useSelector((state) => state.language)

    return (
        <>
            <div className="inter_tab_name">
                {getReduxText('services_check_document', language)}
            </div>
            <div className="inter_tab_box">
                <form className="inter_tab_inp_box">
                    <div className="row">
                        <div className={'col-12 col-lg-6 col-md-12 mt-2'}>
                            <input
                                placeholder={getReduxText('win_stir', language)}
                                type="text"
                                name=""
                                id=""
                            />
                        </div>

                        <div className={'col-12 col-lg-6 col-md-12 mt-2'}>
                            <input
                                placeholder={getReduxText(
                                    'lot_number',
                                    language
                                )}
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                    </div>

                    <div className={'row px-3 mt-3'}>
                        <div className={'col-2 col-lg-3'} />

                        <button className={'col-8 col-lg-6'}>
                            {getReduxText('check_text', language)}
                        </button>

                        <div className={'col-2 col-lg-3'} />
                    </div>
                </form>
                <div className="inter_tab_info">
                    {getReduxText('check_document_description', language)}
                </div>
            </div>
        </>
    )
}
