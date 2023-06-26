import React, { useEffect, useState } from 'react'
import SendIcon from '../../img/svgs/Send-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import checkDeadline from '../../tools/helpers/checkDeadline'
import { getText } from '../../locales'
import numberWithSpaces from '../../tools/helpers/numberWithSpaces'
import { addProperty } from '../../store/features/propertyDetailSlice'
import { useNavigate } from 'react-router-dom'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import { socketDomain } from '../../tools/request'

export default function Auction() {
    const [value, setValue] = useState('')
    const [room, setRoom] = useState('1')
    const [messages, setMessages] = useState([])
    const userId = localStorage.getItem('userId')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const property = useSelector((state) => state.propertyDetail)
    const client = new W3CWebSocket(`ws://${socketDomain}/ws/chat/${room}/`)

    // console.log(messages)
    const buttonClicked = (e) => {
        client.send(
            JSON.stringify({
                command: 'new_message',
                from: 1,
                auction_id: 1,
                price: value,
            })
        )
        setValue('')
        e.preventDefault()
    }

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected')

            client.send(
                JSON.stringify({
                    command: 'fetch_messages',
                    auction_id: 1,
                })
            )

            client.send(
                JSON.stringify({
                    command: 'fetch_items',
                    auction_id: 1,
                })
            )
        }

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data)
            console.log('got reply! ', dataFromServer, new Date().getSeconds())
            if (dataFromServer?.messages) {
                setMessages(dataFromServer.messages)
            }

            if (dataFromServer?.message) {
                setMessages((messages) => [...messages, dataFromServer.message])
            }
        }
    }, [])

    console.log(messages, 'messages', typeof userId)

    return (
        <>
            <div className="CabMessage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cab_mes_1">
                                <div className="cab_mes_1_name">Auksion</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cab_mes_box_2">
                    <div className="container">
                        <div className="row d-flex flex-row justify-content-center">
                            <div className="col-lg-3 col-md-6 col-8 h_prod_top">
                                <div
                                    className="prod_box"
                                    style={{
                                        transform: 'scale(0.7)',
                                    }}
                                >
                                    <div className="prod_box_img">
                                        <div className="prod_box_view">
                                            <img src="/img/view.png" alt="" />
                                            <div className="prod_box_num">
                                                {property?.item?.views}
                                            </div>
                                        </div>
                                        {property?.item?.propertyImages
                                            ?.length ? (
                                            <img
                                                src={
                                                    property?.item
                                                        ?.propertyImages[0]
                                                        .image
                                                }
                                                alt=""
                                            />
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className="prod_box_main">
                                        <div className="prod_box_main_top">
                                            <div className="prod_box_main_top_num">
                                                № {property?.item?.sortNumber}
                                            </div>
                                            <div className="prod_box_main_top_clock">
                                                <img
                                                    src="/img/clock.png"
                                                    alt=""
                                                />
                                                <div className="prod_box_main_top_clock_h">
                                                    {checkDeadline(
                                                        property?.item?.deadline
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="prod_box_main_name">
                                            {property?.item?.name}
                                        </div>
                                        <div className="prod_box_main_h">
                                            {getText('prod_box_main_h_1')}
                                        </div>
                                        <div className="prod_box_main_p">
                                            {numberWithSpaces(
                                                property?.item?.startPrice
                                            )}{' '}
                                            UZS
                                        </div>
                                        <div className="prod_box_main_h">
                                            {getText('prod_box_main_h_2')}
                                        </div>
                                        <div className="prod_box_main_p">
                                            {numberWithSpaces(
                                                property?.item?.backPrice
                                            )}{' '}
                                            UZS
                                        </div>
                                        <div className="prod_box_main_h">
                                            {getText('prod_box_main_h_3')}
                                        </div>
                                        <div className="prod_box_main_p">
                                            {property?.item?.address}
                                        </div>
                                        <div className="prod_box_main_sale">
                                            {numberWithSpaces(
                                                property?.item?.startPrice
                                            )}{' '}
                                            UZS
                                        </div>
                                        <div
                                            onClick={() => {
                                                dispatch(
                                                    addProperty({
                                                        property,
                                                        id: property?.item?.id,
                                                    })
                                                )
                                                navigate('/card')
                                                window.scrollTo(0, 0)
                                            }}
                                            className="prod_box_main_btn"
                                        >
                                            {getText('more')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-12 d-flex flex-column justify-content-between pb-5">
                                <div className="cab_game_time">
                                    <div className="cab_game_h">
                                        Joriy auksion
                                    </div>
                                    <div className="cab_game_time_box">
                                        <img src="/img/card_2.png" alt="" />
                                        12:03:36:05
                                    </div>
                                </div>

                                <div>
                                    <div
                                        className={'auction-messages-container'}
                                    >
                                        {messages?.length
                                            ? messages?.map((item, index) => (
                                                  <div
                                                      key={index}
                                                      className={
                                                          item?.id ===
                                                          Number(userId)
                                                              ? 'cab_game_num'
                                                              : 'cab_game_num_2 ms-auto me-2'
                                                      }
                                                  >
                                                      <div className="cab_game_num_top">
                                                          <div className="cab_game_num_h">
                                                              ID:{' '}
                                                          </div>
                                                          <div className="cab_game_num_p">
                                                              {item?.sender}
                                                          </div>
                                                      </div>
                                                      <div className="cab_game_num_bottom">
                                                          <div
                                                              className="cab_game_num_p_2"
                                                              style={{
                                                                  fontSize:
                                                                      'x-large',
                                                              }}
                                                          >
                                                              {item?.price}$
                                                          </div>

                                                          <div className="cab_game_num_p_2">
                                                              {item?.timestamp}
                                                          </div>
                                                          <img
                                                              src="/img/icon_get.png"
                                                              alt=""
                                                          />
                                                      </div>
                                                  </div>
                                              ))
                                            : ''}

                                        <div id={'element'} />

                                        <div className="cab_game_win active">
                                            Tabriklaymiz ! Siz lotni yutib
                                            oldingiz 🎉
                                        </div>
                                    </div>

                                    <div className={'auction-input-container'}>
                                        <input
                                            className={'auction-input mt-4'}
                                            value={value}
                                            onChange={(event) =>
                                                setValue(event.target.value)
                                            }
                                            onKeyPress={(event) => {
                                                if (event.key === 'Enter') {
                                                    buttonClicked(event)
                                                }
                                            }}
                                        />

                                        <img
                                            src={SendIcon}
                                            alt={'send-icon'}
                                            className={'auction-send-icon'}
                                            onClick={buttonClicked}
                                        />
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
