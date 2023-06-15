import React, { useEffect, useState } from 'react'
import Stories from 'react-insta-stories'
import { useLoad } from '../../hooks/request'
import { GET_CATALOG_DETAIL_STORY, GET_MAIN_CATALOG } from '../../tools/urls'
import { useSelector } from 'react-redux'
import CloseIcon from '../../img/close-icon.svg'

const Header = () => {
    const [show, setShow] = useState(false)
    const [id, setId] = useState(0)
    const [storiesArray, setStoriesArray] = useState([])
    const language = useSelector((state) => state.language)
    const { response } = useLoad(
        {
            url: GET_MAIN_CATALOG.replace('en', language),
        },
        [language]
    )

    const { response: stories } = useLoad(
        {
            url: GET_CATALOG_DETAIL_STORY.concat(id.toString()).replace(
                'en',
                language
            ),
        },
        [id, language]
    )

    const filterStories = () => {
        let newArray = []
        stories?.forEach((item) => {
            newArray.push({ url: item.video })
        })
        console.log(newArray, stories.length)
        setStoriesArray(newArray)
    }

    useEffect(() => {
        if (stories?.length && id) {
            filterStories()
        }
    }, [id, stories])

    return (
        <>
            <div className="Header">
                <div className="container">
                    <div className="row justify-content-center">
                        {response?.length
                            ? response.map((item, index) => (
                                  <div
                                      className="col-2 pointer"
                                      key={index}
                                      onClick={() => {
                                          setId(item?.id)
                                          setShow(true)
                                      }}
                                  >
                                      <div className="head_box">
                                          <img
                                              src={item?.image}
                                              alt={item?.name}
                                          />
                                          <div className="head_h">
                                              {item?.name}
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : ''}

                        {show && storiesArray.length ? (
                            <div className={'stories-container'}>
                                <div
                                    onClick={() => {
                                        setShow(false)
                                        setStoriesArray([])
                                        setId(0)
                                    }}
                                    className={
                                        'stories-close-icon-container pointer'
                                    }
                                >
                                    <img src={CloseIcon} alt={'close'} />
                                </div>
                                <Stories
                                    stories={storiesArray}
                                    defaultInterval={3500}
                                    width={515}
                                    height={768}
                                    onAllStoriesEnd={() => {
                                        setShow(false)
                                        setStoriesArray([])
                                        setId(0)
                                    }}
                                />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
