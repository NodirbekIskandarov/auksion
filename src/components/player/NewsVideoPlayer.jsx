import React from 'react'
import ReactPlayer from 'react-player'

export default function NewsVideoPlayer({
    item,
    playIcon,
    moviePlay,
    setMoviePlay,
}) {
    return (
        <div className={'news-video'}>
            <ReactPlayer
                playIcon={
                    <div className={'video-container'}>
                        <img src={item?.image} alt="" />
                        <div className={'play-icon-container'}>
                            <img src={playIcon} alt={'play-icon'} />
                        </div>
                    </div>
                }
                light={moviePlay}
                controls={true}
                playing={true}
                url={item?.video}
                height={'auto'}
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
                onPlay={() => setMoviePlay(false)}
                onEnded={() => setMoviePlay(true)}
            />
        </div>
    )
}
