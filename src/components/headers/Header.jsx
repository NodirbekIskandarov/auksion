import React, { useEffect, useState } from 'react'
import Stories from 'react-insta-stories'
import { useLoad } from '../../hooks/request'
import { GET_CATALOG_DETAIL_STORY, GET_MAIN_CATALOG } from '../../tools/urls'
import { useSelector } from 'react-redux'
import CloseIcon from '../../img/svgs/close-icon.svg'

const Header = () => {
    const [show, setShow] = useState(false)
    const [id, setId] = useState(0)
    const [storiesArray, setStoriesArray] = useState([])
    const language = useSelector((state) => state.language)
    const width = document.getElementById('root').clientWidth

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
                <div className="scrolling-wrapper">
                    {response?.length
                        ? response.map((item, index) => (
                              <div
                                  className="pointer"
                                  key={index}
                                  onClick={() => {
                                      setId(item?.id)
                                      setShow(true)
                                  }}
                              >
                                  <div className="head_box d-flex flex-column align-items-center">
                                      <img
                                          src={item?.image}
                                          alt={item?.name}
                                          className={'story-image'}
                                      />
                                      <div className="head_h">{item?.name}</div>
                                  </div>
                              </div>
                          ))
                        : ''}

                    {show && storiesArray.length ? (
                        <div
                            className={'stories-container'}
                            style={{ display: 'flex' }}
                        >
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
                                defaultInterval={300500}
                                width={
                                    width < 620 ? 480 : width < 550 ? 300 : 515
                                }
                                height={'100vh'}
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
        </>
    )
}

export default Header
