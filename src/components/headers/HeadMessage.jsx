import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getText } from '../../locales'
import { useLoad } from '../../hooks/request'
import { GET_CONTENT_NEWS } from '../../tools/urls'
import PlayIcon from '../../img/PlayIcon.png'
import { useSelector } from 'react-redux'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import NewsVideoPlayer from '../player/NewsVideoPlayer'

const HeadMessage = () => {
    const [moviePlay, setMoviePlay] = useState(true)
    const navigate = useNavigate()
    const width = document.getElementById('root').clientWidth
    const language = useSelector((state) => state.language)
    const { response } = useLoad(
        {
            url: GET_CONTENT_NEWS.replace('en', language),
        },
        [language]
    )

    return (
        <>
            <div className="HeadMessage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="h_mes_name">{getText('nav_4')}</div>
                        </div>

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={
                                width > 540 && width < 768
                                    ? 2
                                    : width < 540
                                    ? 1
                                    : 3
                            }
                            pagination={true}
                            modules={[Pagination]}
                            style={{ width: '100%' }}
                            className={'row'}
                        >
                            {response?.length
                                ? response?.map((item, index) => (
                                      <SwiperSlide
                                          className="col-4 pb-5 pointer d-flex"
                                          key={index}
                                      >
                                          <div className="h_mes_box">
                                              {item?.video ? (
                                                  <NewsVideoPlayer
                                                      item={item}
                                                      playIcon={PlayIcon}
                                                      moviePlay={moviePlay}
                                                      setMoviePlay={
                                                          setMoviePlay
                                                      }
                                                  />
                                              ) : (
                                                  <img
                                                      src={item?.image}
                                                      alt=""
                                                      style={{
                                                          maxHeight: '56%',
                                                      }}
                                                  />
                                              )}
                                              <div
                                                  onClick={() => {
                                                      navigate('/news-detail', {
                                                          state: item,
                                                      })
                                                  }}
                                                  className="h_mes_info"
                                              >
                                                  <div className="h_mes_view">
                                                      <img
                                                          src="/img/view.png"
                                                          alt=""
                                                      />
                                                      <div className="h_mes_view_h">
                                                          {item?.views}
                                                      </div>
                                                  </div>
                                                  <div className="h_mes_info_date">
                                                      {item?.createdAt}
                                                  </div>
                                              </div>
                                              <div
                                                  onClick={() => {
                                                      navigate('/news-detail', {
                                                          state: item,
                                                      })
                                                  }}
                                                  className="h_mes_text"
                                              >
                                                  {item?.title?.slice(0, 80)}
                                                  ...
                                              </div>
                                          </div>
                                      </SwiperSlide>
                                  ))
                                : ''}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadMessage
