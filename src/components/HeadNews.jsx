import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const HeadNews = () => {
    return (
        <>
            <div className="HeadNews">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                style={{ height: '100%', opacity: 1 }}
                            >
                                <SwiperSlide>
                                    <div className="h_news_box">
                                        <div className="h_news_text">
                                            <div className="h_news_h">
                                                Platformada qanday roʼyxatdan
                                                o`tiladi?
                                            </div>
                                            <div className="h_news_p">
                                                “E-auksion” ESMdan roʼyxatdan
                                                oʼtish uchun, platformaning bosh
                                                sahifasidan “Roʼyxatdan oʼtish”
                                                tugmasini bosish orqali
                                                roʼyxatdan oʼtiladi.
                                            </div>
                                        </div>
                                        <Link className="h_news_btn_link" to="">
                                            <button className="h_news_btn">
                                                {getText('more')}
                                            </button>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="h_news_count_name">
                                {getText('h_news_count_name_1')}
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h_news_count_box">
                                <div className="h_news_count_h">546</div>
                                <div className="h_news_count_p">
                                    {getText('h_news_count_name_2')}
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h_news_count_box">
                                <div className="h_news_count_h">546</div>
                                <div className="h_news_count_p">
                                    {getText('h_news_count_name_3')}
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h_news_count_box">
                                <div className="h_news_count_h">546</div>
                                <div className="h_news_count_p">
                                    {getText('h_news_count_name_4')}
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="h_news_count_box">
                                <div className="h_news_count_h">546</div>
                                <div className="h_news_count_p">
                                    {getText('h_news_count_name_5')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadNews
