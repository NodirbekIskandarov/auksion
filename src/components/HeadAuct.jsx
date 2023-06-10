import React from 'react'
import { getText } from '../locales'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { useLoad } from '../hooks/request'
import { GET_PROPERTY_LIST } from '../tools/urls'
import numberWithSpaces from '../tools/helpers/numberWithSpaces'
import checkDeadline from '../tools/helpers/checkDeadline'
import { useDispatch } from 'react-redux'
import { addProperty } from '../store/features/propertyDetailSlice'
import { useNavigate } from 'react-router-dom'

const HeadAuct = () => {
    const { response } = useLoad({ url: GET_PROPERTY_LIST })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
            <div className="HeadAuct">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <div className="head_auct_name">
                                {getText('head_auct_name_1')}
                            </div>
                            <div className="head_auct_cat">
                                <div className="head_auct_cat_box">
                                    <div className="head_auct_cat_name ">
                                        {getText('head_auct_name_2')}
                                    </div>
                                    <div className="head_auct_cat_name active">
                                        {getText('head_auct_name_3')}
                                    </div>
                                    <div className="head_auct_cat_name">
                                        {getText('head_auct_name_4')}
                                    </div>
                                    <div className="head_auct_cat_name">
                                        {getText('head_auct_name_5')}
                                    </div>
                                </div>
                                <div className="head_auct_cat_line"></div>
                                <button className="head_auct_cat_btn">
                                    {getText('head_auct_name_6')}
                                    <img src="/img/icon_right.png" alt="" />
                                </button>
                            </div>
                        </div>

                        {response?.length
                            ? response?.map((item, index) => (
                                  <div className="col-3 h_prod_top" key={index}>
                                      <div className="prod_box">
                                          <div className="prod_box_img">
                                              <div className="prod_box_view">
                                                  <img
                                                      src="/img/view.png"
                                                      alt=""
                                                  />
                                                  <div className="prod_box_num">
                                                      {item?.views}
                                                  </div>
                                              </div>
                                              <img
                                                  src={
                                                      item?.propertyImages[0]
                                                          .image
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                          <div className="prod_box_main">
                                              <div className="prod_box_main_top">
                                                  <div className="prod_box_main_top_num">
                                                      № {item?.sortNumber}
                                                  </div>
                                                  <div className="prod_box_main_top_clock">
                                                      <img
                                                          src="/img/clock.png"
                                                          alt=""
                                                      />
                                                      <div className="prod_box_main_top_clock_h">
                                                          {checkDeadline(
                                                              item?.deadline
                                                          )}
                                                      </div>
                                                  </div>
                                              </div>

                                              <div className="prod_box_main_name">
                                                  {item?.name}
                                              </div>
                                              <div className="prod_box_main_h">
                                                  {getText('prod_box_main_h_1')}
                                              </div>
                                              <div className="prod_box_main_p">
                                                  {numberWithSpaces(
                                                      item?.startPrice
                                                  )}{' '}
                                                  UZS
                                              </div>
                                              <div className="prod_box_main_h">
                                                  {getText('prod_box_main_h_2')}
                                              </div>
                                              <div className="prod_box_main_p">
                                                  {numberWithSpaces(
                                                      item?.backPrice
                                                  )}{' '}
                                                  UZS
                                              </div>
                                              <div className="prod_box_main_h">
                                                  {getText('prod_box_main_h_3')}
                                              </div>
                                              <div className="prod_box_main_p">
                                                  {item?.address}
                                              </div>
                                              <div className="prod_box_main_sale">
                                                  {numberWithSpaces(
                                                      item?.startPrice
                                                  )}{' '}
                                                  UZS
                                              </div>
                                              <div
                                                  onClick={() => {
                                                      dispatch(
                                                          addProperty({
                                                              item,
                                                              id: item?.id,
                                                          })
                                                      )
                                                      navigate('/card')
                                                  }}
                                                  className="prod_box_main_btn"
                                              >
                                                  {getText('more')}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadAuct
