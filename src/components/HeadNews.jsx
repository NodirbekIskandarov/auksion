import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper'
import { Link, useNavigate } from 'react-router-dom'
import { getText } from '../locales'

const HeadNews = () => {
    const navigate = useNavigate()

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
                                                {getText('more_text')}
                                            </div>
                                            <div className="h_news_p">
                                                {getText(
                                                    'more_text_description'
                                                )}
                                            </div>
                                        </div>
                                        <Link className="h_news_btn_link" to="">
                                            <button
                                                onClick={() => {
                                                    navigate('/registration')
                                                    window.scrollTo(0, 0)
                                                }}
                                                className="h_news_btn"
                                            >
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
