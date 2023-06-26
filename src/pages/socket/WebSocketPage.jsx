import React, { useEffect, useState } from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket'

export default function WebSocketPage() {
    const [value, setValue] = useState('1')
    const [name, setName] = useState('1')
    const [room, setRoom] = useState('1')
    const client = new W3CWebSocket(
        'ws://95.130.227.129:8000/ws/chat/' + room + '/'
    )
    const buttonClicked = (e) => {
        client.send(
            JSON.stringify({
                command: 'new_message',
                from: 1,
                auction_id: 1,
                price: 1,
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
            console.log('got reply! ', dataFromServer)
            // if (dataFromServer) {
            //     setMessages((messages) => [
            //         ...messages,
            //         {
            //             name: dataFromServer.name,
            //             message: dataFromServer.message,
            //         },
            //     ])
            // }
        }
    }, [])

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={buttonClicked}>Send</button>
        </div>
    )
}
