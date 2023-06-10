import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getText } from '../locales'
import { useLoad } from '../hooks/request'
import { GET_CONTENT_NEWS } from '../tools/urls'
import ReactPlayer from 'react-player'
import PlayIcon from '../img/PlayIcon.png'

const HeadMessage = () => {
    const [moviePlay, setMoviePlay] = useState(true)
    const location = useLocation()
    const { response } = useLoad({ url: GET_CONTENT_NEWS })
    return (
        <>
            <div className="HeadMessage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="h_mes_name">{getText('nav_4')}</div>
                        </div>
                        {response?.length
                            ? response?.map((item, index) => (
                                  <div className="col-4 mb-4" key={index}>
                                      <div className="h_mes_box">
                                          {item?.video ? (
                                              <div className={'news-video'}>
                                                  <ReactPlayer
                                                      playIcon={
                                                          <div
                                                              className={
                                                                  'video-container'
                                                              }
                                                          >
                                                              <img
                                                                  src={
                                                                      item?.image
                                                                  }
                                                                  alt=""
                                                              />
                                                              <div
                                                                  className={
                                                                      'play-icon-container'
                                                                  }
                                                              >
                                                                  <img
                                                                      src={
                                                                          PlayIcon
                                                                      }
                                                                      alt={
                                                                          'play-icon'
                                                                      }
                                                                  />
                                                              </div>
                                                          </div>
                                                      }
                                                      light={moviePlay}
                                                      controls={true}
                                                      playing={true}
                                                      url={item?.video}
                                                      height={280}
                                                      width={'100%'}
                                                      config={{
                                                          youtube: {
                                                              playerVars: {
                                                                  showinfo: 1,
                                                              },
                                                          },
                                                          facebook: {
                                                              appId: '12345',
                                                          },
                                                      }}
                                                      onPlay={() =>
                                                          setMoviePlay(false)
                                                      }
                                                      onEnded={() =>
                                                          setMoviePlay(true)
                                                      }
                                                  />
                                              </div>
                                          ) : (
                                              <img src={item?.image} alt="" />
                                          )}
                                          <div className="h_mes_info">
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
                                          <div className="h_mes_text">
                                              {item?.title}
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : ''}
                        <div
                            className={`col-12 d-flex justify-content-center ${
                                location.pathname === '/news' ? 'd-none' : ''
                            }`}
                        >
                            <Link to="" className="h_mes_btn">
                                {getText('more_2')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadMessage
