import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    UncontrolledAccordion,
} from 'reactstrap'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/scrollbar'

import { FreeMode, Navigation, Scrollbar, Thumbs } from 'swiper'
import { Link, useNavigate } from 'react-router-dom'
import { getText } from '../locales'
import { useDispatch, useSelector } from 'react-redux'
import { useLoad } from '../hooks/request'
import { GET_PROPERTY_DETAIL, GET_PROPERTY_LIST } from '../tools/urls'
import { convertDate, convertTime } from '../tools/helpers/convertDate'
import numberWithSpaces from '../tools/helpers/numberWithSpaces'
import checkDeadlineDetail from '../tools/helpers/checkDeadlineDetail'
import useDownloader from 'react-use-downloader'
import checkDeadline from '../tools/helpers/checkDeadline'
import { addProperty } from '../store/features/propertyDetailSlice'

const Card = () => {
    const width = document.getElementById('root').clientWidth
    const language = useSelector((state) => state.language)
    const token = localStorage.getItem('token')
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const property = useSelector((state) => state.propertyDetail)
    const { response } = useLoad(
        {
            url: GET_PROPERTY_DETAIL.replace('id', property?.id).replace(
                'en',
                language
            ),
        },
        [property?.id, language]
    )

    const { response: propertiesList } = useLoad(
        { url: GET_PROPERTY_LIST.replace('en', language) },
        [language]
    )

    const { download } = useDownloader()
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const getTime = () => {
        // const time = Date.parse(deadline) - Date.now()
        setDays(
            Math.floor(
                checkDeadlineDetail(response?.deadline) / (1000 * 60 * 60 * 24)
            )
        )
        setHours(
            Math.floor(
                (checkDeadlineDetail(response?.deadline) / (1000 * 60 * 60)) %
                    24
            )
        )
        setMinutes(
            Math.floor(
                (checkDeadlineDetail(response?.deadline) / 1000 / 60) % 60
            )
        )
        setSeconds(
            Math.floor((checkDeadlineDetail(response?.deadline) / 1000) % 60)
        )
    }

    const applyProperty = () => {
        if (token) {
            navigate('/auction')
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (response?.deadline) {
                getTime(checkDeadlineDetail(response?.deadline))
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [response?.deadline])

    return (
        <>
            <div className="Card">
                <div className="card_head_name">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center">
                                <Link to="/" className="card_h_box">
                                    <img src="/img/left.png" alt="" />
                                    {getText('back_1')} /
                                </Link>
                                <div className="card_h_prod">
                                    {response?.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-5 ">
                            <Swiper
                                loop={true}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{
                                    swiper:
                                        thumbsSwiper && !thumbsSwiper.destroyed
                                            ? thumbsSwiper
                                            : null,
                                }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                {response?.propertyImages?.length
                                    ? response?.propertyImages?.map(
                                          (itemImage, indexImage) => (
                                              <div>
                                                  <SwiperSlide>
                                                      <div
                                                          className="swip_img_box"
                                                          key={
                                                              indexImage + 10000
                                                          }
                                                      >
                                                          <img
                                                              src={
                                                                  itemImage?.image
                                                              }
                                                              alt=""
                                                              className="swiper_img_1"
                                                          />
                                                      </div>
                                                  </SwiperSlide>
                                              </div>
                                          )
                                      )
                                    : ''}
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                {response?.propertyImages?.length
                                    ? response?.propertyImages?.map(
                                          (itemImage, indexImage) => (
                                              <SwiperSlide>
                                                  <div
                                                      className="swip_img_box"
                                                      key={indexImage + 1000}
                                                  >
                                                      <img
                                                          src={itemImage?.image}
                                                          alt=""
                                                          className="swip_img_1"
                                                      />
                                                  </div>
                                              </SwiperSlide>
                                          )
                                      )
                                    : ''}
                            </Swiper>
                        </div>

                        <div className="col-lg-7 d-flex flex-column">
                            <div className="">
                                <div className="card_info_top">
                                    <div className="card_info_name">
                                        {response?.name}
                                    </div>
                                    <div className="card_info_right">
                                        <div className="card_info_right_box">
                                            <img src="/img/view.png" alt="" />
                                            {response?.views}
                                        </div>
                                        <div className="card_info_right_box_2">
                                            № {response?.sortNumber}
                                        </div>
                                    </div>
                                </div>
                                <div className="card_info_main_box">
                                    <div className="card_info_main">
                                        <img src="/img/card_1.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">
                                                {getText('card_info_text_h_1')}:
                                            </div>
                                            <div className="card_info_main_text_p">
                                                {convertDate(
                                                    response?.deadline
                                                )}{' '}
                                                {convertTime(
                                                    response?.deadline
                                                )}{' '}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_2.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">
                                                {getText(
                                                    'card_info_text_h_2_1'
                                                )}
                                                :
                                            </div>
                                            <div className="card_info_main_text_p">
                                                {convertDate(
                                                    response?.startDate
                                                )}{' '}
                                                {convertTime(
                                                    response?.startDate
                                                )}{' '}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_3.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">
                                                {getText('card_info_text_h_2')}:
                                            </div>
                                            <div className="card_info_main_text_p">
                                                {numberWithSpaces(
                                                    response?.startPrice
                                                )}{' '}
                                                UZS
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_4.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">
                                                {getText('card_info_text_h_3')}
                                                (10%):
                                            </div>
                                            <div className="card_info_main_text_p">
                                                {numberWithSpaces(
                                                    response?.backPrice
                                                )}{' '}
                                                UZS
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_5.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">
                                                {getText('card_info_text_h_4')}:
                                            </div>
                                            <div className="card_info_main_text_p">
                                                {response?.tradeType}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_6.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">
                                                {getText('card_info_text_h_5')}:
                                            </div>
                                            <div className="card_info_main_text_p">
                                                {response?.tradeStyle}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_7.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">
                                                {getText('card_info_text_h_6')}
                                                (10%):
                                            </div>
                                            <div className="card_info_main_text_p">
                                                {numberWithSpaces(
                                                    response?.getFirstStepPrice
                                                )}{' '}
                                                UZS
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_info_main">
                                        <img src="/img/card_8.png" alt="" />
                                        <div className="card_info_main_text">
                                            <div className="card_info_main_text_h">
                                                {getText('address')}:
                                            </div>
                                            <div className="card_info_main_text_p">
                                                {response?.address}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_info_end">
                                    {getText('card_info_end')}:
                                </div>
                                <div className="card_info_end_box">
                                    <div className="card_info_end_num">
                                        <div className="card_info_end_num_h">
                                            {days ?? ''}
                                        </div>
                                        <div className="card_info_end_num_p">
                                            {getText('day_1')}
                                        </div>
                                    </div>
                                    <div className="card_info_end_num">
                                        <div className="card_info_end_num_h">
                                            {hours ?? ''}
                                        </div>
                                        <div className="card_info_end_num_p">
                                            {getText('day_2')}
                                        </div>
                                    </div>
                                    <div className="card_info_end_num">
                                        <div className="card_info_end_num_h">
                                            {minutes ?? ''}
                                        </div>
                                        <div className="card_info_end_num_p">
                                            {getText('day_3')}
                                        </div>
                                    </div>
                                    <div className="card_info_end_num">
                                        <div className="card_info_end_num_h">
                                            {seconds ?? ''}
                                        </div>
                                        <div className="card_info_end_num_p">
                                            {getText('day_4')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card_info_btn mt-5">
                                <div className="card_info_btn_top">
                                    <button
                                        onClick={applyProperty}
                                        className="card_info_btn_h"
                                    >
                                        {getText('card_info_btn_h_1')}
                                    </button>
                                    {token ? (
                                        <div className="card_info_btn_h_box">
                                            <img
                                                src="/img/prod_save_1.png"
                                                alt=""
                                                className={'card-info-btn-img'}
                                            />
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <Link to="" className="card_info_btn_soc">
                                    {getText('card_info_btn_h_2')}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <UncontrolledAccordion
                                defaultOpen={['1', '2', '3']}
                                stayOpen
                            >
                                <AccordionItem>
                                    <AccordionHeader targetId="1">
                                        <div className="acor_name">
                                            Mulk ma’lumotlari
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <div className="acor_p">
                                            {
                                                response?.propertyDetails
                                                    ?.description
                                            }
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="2">
                                        <div className="acor_name">
                                            Lot ma’lumotlari
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="acor_p_2">
                                                Mol-mulk turi
                                            </div>
                                            <div className="acor_h_2">
                                                {
                                                    response?.propertyDetails?.find(
                                                        (item) =>
                                                            item.key === 'type'
                                                    )?.value
                                                }
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="acor_p_2">
                                                Lot holati
                                            </div>
                                            <div className="acor_h_2">
                                                {
                                                    response?.propertyDetails?.find(
                                                        (item) =>
                                                            item.key ===
                                                            'status'
                                                    )?.value
                                                }
                                            </div>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="3">
                                        <div className="acor_name">
                                            Lot hujjatlari
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <div className="d-flex align-items-center">
                                            {response?.propertyFiles?.length
                                                ? response?.propertyFiles?.map(
                                                      (item, index) => (
                                                          <div
                                                              onClick={() =>
                                                                  download(
                                                                      item.file,
                                                                      item.file.slice(
                                                                          item.file.lastIndexOf(
                                                                              '/'
                                                                          ) + 1
                                                                      )
                                                                  )
                                                              }
                                                              className="acor_box pointer"
                                                              key={index + 100}
                                                          >
                                                              <img
                                                                  src="/img/icon_pdf.png"
                                                                  alt=""
                                                              />
                                                              {item.file.slice(
                                                                  item.file.lastIndexOf(
                                                                      '/'
                                                                  ) + 1,
                                                                  item.file.lastIndexOf(
                                                                      '/'
                                                                  ) + 15
                                                              )}
                                                          </div>
                                                      )
                                                  )
                                                : ''}
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                loop={true}
                                slidesPerView={
                                    width > 540 && width < 768
                                        ? 3
                                        : width < 540
                                        ? 1
                                        : 4
                                }
                                spaceBetween={24}
                                scrollbar={{
                                    hide: true,
                                }}
                                navigation={true}
                                modules={[Navigation, Scrollbar, FreeMode]}
                                className={'row'}
                            >
                                {propertiesList?.length
                                    ? propertiesList?.map((item, index) => (
                                          <SwiperSlide className={'col-4'}>
                                              <div key={index}>
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
                                                                  item
                                                                      ?.propertyImages[0]
                                                                      .image
                                                              }
                                                              alt=""
                                                          />
                                                      </div>
                                                      <div className="prod_box_main">
                                                          <div className="prod_box_main_top">
                                                              <div className="prod_box_main_top_num">
                                                                  №{' '}
                                                                  {
                                                                      item?.sortNumber
                                                                  }
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
                                                              {getText(
                                                                  'prod_box_main_h_1'
                                                              )}
                                                          </div>
                                                          <div className="prod_box_main_p">
                                                              {numberWithSpaces(
                                                                  item?.startPrice
                                                              )}{' '}
                                                              UZS
                                                          </div>
                                                          <div className="prod_box_main_h">
                                                              {getText(
                                                                  'prod_box_main_h_2'
                                                              )}
                                                          </div>
                                                          <div className="prod_box_main_p">
                                                              {numberWithSpaces(
                                                                  item?.backPrice
                                                              )}{' '}
                                                              UZS
                                                          </div>
                                                          <div className="prod_box_main_h">
                                                              {getText(
                                                                  'prod_box_main_h_3'
                                                              )}
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
                                                                      addProperty(
                                                                          {
                                                                              item,
                                                                              id: item?.id,
                                                                          }
                                                                      )
                                                                  )
                                                                  navigate(
                                                                      '/card'
                                                                  )
                                                                  window.scrollTo(
                                                                      0,
                                                                      0
                                                                  )
                                                              }}
                                                              className="prod_box_main_btn"
                                                          >
                                                              {getText('more')}
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </SwiperSlide>
                                      ))
                                    : ''}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
