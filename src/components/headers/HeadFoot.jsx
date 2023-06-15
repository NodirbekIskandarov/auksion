import React from 'react'
import { getReduxText } from '../../locales'
import { useSelector } from 'react-redux'

const HeadFoot = () => {
    const language = useSelector((state) => state.language)
    return (
        <>
            <div className="HeadFoot">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <img
                                src="/img/h_foot.png"
                                alt=""
                                className="h_foot_img"
                            />
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center">
                            <div className="h_foot_name">ARTAUKSION.COM</div>
                            <div className="h_foot_p">
                                {getReduxText('head_foot_title', language)}
                            </div>
                            <div className="h_foot_p">
                                {getReduxText(
                                    'head_foot_description',
                                    language
                                )}
                            </div>
                            <div className="h_foot_box">
                                <a href="/" className="h_foot_btn">
                                    <img src="/img/google_play.png" alt="" />
                                </a>
                                <a href="/" className="h_foot_btn">
                                    <img src="/img/app_store.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadFoot
