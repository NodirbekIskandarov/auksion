import React from 'react'
import { getReduxText } from '../../locales'
import { useSelector } from 'react-redux'
import GooglePlayIcon from '../../img/svgs/google-play.svg'
import AppStoreIcon from '../../img/svgs/app_store.svg'

const HeadFoot = () => {
    const language = useSelector((state) => state.language)
    return (
        <>
            <div className="HeadFoot">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row w-100 d-flex flex-row justify-content-between align-items-center">
                        <div className="col-4 header-foot-image">
                            <img
                                src="/img/h_foot.png"
                                alt=""
                                className="h_foot_img"
                            />
                        </div>
                        <div className={'col-lg-8 col-md-8 col-12'}>
                            <div className="col-12 col-lg-12 col-md-12 d-flex flex-column justify-content-center">
                                <div className="h_foot_name">
                                    ARTAUKSION.COM
                                </div>
                                <div className="h_foot_p">
                                    {getReduxText('head_foot_title', language)}
                                </div>
                                <div className="h_foot_p">
                                    {getReduxText(
                                        'head_foot_description',
                                        language
                                    )}
                                </div>

                                <div className="h_foot_box row w-100">
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <a href="/" className="h_foot_btn">
                                            <img src={GooglePlayIcon} alt="" />
                                        </a>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <a href="/" className="h_foot_btn">
                                            <img src={AppStoreIcon} alt="" />
                                        </a>
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

export default HeadFoot
