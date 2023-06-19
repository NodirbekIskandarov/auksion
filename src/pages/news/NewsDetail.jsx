import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import PlayIcon from '../../img/PlayIcon.png'

export default function NewsDetail() {
    const { state } = useLocation()
    const [moviePlay, setMoviePlay] = useState(true)
    return (
        <div>
            <div className="news-detail-title text-center py-4">
                {state?.title}
            </div>

            {state?.video ? (
                <div className={'d-flex flex-row justify-content-center mt-3'}>
                    <ReactPlayer
                        playIcon={
                            <div className={'news-detail-video-container'}>
                                <img
                                    src={state?.image}
                                    alt=""
                                    className={'news-detail-video-image'}
                                />
                                <div
                                    className={
                                        'news-detail-play-icon-container'
                                    }
                                >
                                    <img
                                        src={PlayIcon}
                                        alt={'play-icon'}
                                        className={
                                            'news-detail-play-icon-container'
                                        }
                                    />
                                </div>
                            </div>
                        }
                        light={moviePlay}
                        controls={true}
                        playing={true}
                        url={state?.video}
                        height={400}
                        width={'50%'}
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
                        onPlay={() => setMoviePlay(false)}
                        onEnded={() => setMoviePlay(true)}
                    />
                </div>
            ) : (
                <div className={'d-flex flex-row justify-content-center mt-3'}>
                    <img
                        src={state?.image}
                        alt=""
                        className={'news-detail-image'}
                    />
                </div>
            )}

            <div className="news-detail-content py-4">{state?.content}</div>
        </div>
    )
}
