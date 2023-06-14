import React from 'react'

import { getText } from '../locales'
import { useLoad } from '../hooks/request'
import { GET_CONTACT } from '../tools/urls'
import { useSelector } from 'react-redux'

const Contact = () => {
    const language = useSelector((state) => state.language)
    const { response } = useLoad({ url: GET_CONTACT.replace('en', language) }, [
        language,
    ])
    return (
        <>
            <div className="Contact">
                {response?.length
                    ? response?.map((item, index) => (
                          <div className="container" key={index}>
                              <div className="row">
                                  <div className="col-12">
                                      <div className="con_name">
                                          {getText('con_1')}
                                      </div>
                                  </div>
                                  <div className="col-3">
                                      <div className="con_box">
                                          <img
                                              src="/img/icon_con_1.png"
                                              alt=""
                                          />
                                          <div className="con_h">
                                              {' '}
                                              {getText('con_2')}
                                          </div>
                                          <div className="con_p">
                                              {item?.phone}
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-3">
                                      <div className="con_box">
                                          <img
                                              src="/img/icon_con_2.png"
                                              alt=""
                                          />
                                          <div className="con_h">
                                              {' '}
                                              {getText('con_3')}
                                          </div>
                                          <div className="con_p">
                                              {item?.time}
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-3">
                                      <div className="con_box">
                                          <img
                                              src="/img/icon_con_3.png"
                                              alt=""
                                          />
                                          <div className="con_h">
                                              {getText('address')}
                                          </div>
                                          <div className="con_p">
                                              {item?.address}
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-3">
                                      <div className="con_box">
                                          <img
                                              src="/img/icon_con_4.png"
                                              alt=""
                                          />
                                          <div className="con_h">
                                              {getText('con_4')}
                                          </div>
                                          <div className="con_p">
                                              {item?.email}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))
                    : ''}
                <div className="con_map">
                    <iframe
                        className="maps_map"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1eb33b947e107fe6476fbe1fa9b00882b4fce3a34cb98cd445a5aa6f583bbe5d&amp;source=constructor"
                        width="500"
                        height="400"
                        frameborder="0"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact
