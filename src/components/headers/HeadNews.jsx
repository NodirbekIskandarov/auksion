import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper'
import { Link, useNavigate } from 'react-router-dom'
import { getReduxText } from '../../locales'
import { useSelector } from 'react-redux'

const HeadNews = () => {
    const navigate = useNavigate()
    const language = useSelector((state) => state.language)

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
                                    <div className="h_news_box row">
                                        <div className="h_news_text col-lg-9 col-md-6 col-12">
                                            <div className="h_news_h">
                                                {getReduxText(
                                                    'more_text',
                                                    language
                                                )}
                                            </div>
                                            <div className="h_news_p">
                                                {getReduxText(
                                                    'more_text_description',
                                                    language
                                                )}
                                            </div>
                                        </div>
                                        <Link
                                            className="h_news_btn_link col-lg-3 col-md-6 col-12 d-flex justify-content-center"
                                            to=""
                                        >
                                            <button
                                                onClick={() => {
                                                    navigate('/registration')
                                                    window.scrollTo(0, 0)
                                                }}
                                                className="h_news_btn"
                                            >
                                                {getReduxText('more', language)}
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
                                {getReduxText('h_news_count_name_1', language)}
                            </div>
                        </div>

                        <div
                            className={
                                'row w-100 d-flex flex-row justify-content-center'
                            }
                        >
                            <div className="col">
                                <div className="h_news_count_box">
                                    <div className="h_news_count_h">546</div>
                                    <div className="h_news_count_p">
                                        {getReduxText(
                                            'h_news_count_name_2',
                                            language
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="h_news_count_box">
                                    <div className="h_news_count_h">546</div>
                                    <div className="h_news_count_p">
                                        {getReduxText(
                                            'h_news_count_name_3',
                                            language
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="h_news_count_box">
                                    <div className="h_news_count_h">546</div>
                                    <div className="h_news_count_p">
                                        {getReduxText(
                                            'h_news_count_name_4',
                                            language
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="h_news_count_box">
                                    <div className="h_news_count_h">546</div>
                                    <div className="h_news_count_p">
                                        {getReduxText(
                                            'h_news_count_name_5',
                                            language
                                        )}
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

export default HeadNews
