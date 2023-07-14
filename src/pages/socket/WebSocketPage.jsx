import React from 'react'

export default function WebSocketPage() {
    // const [value, setValue] = useState('1')
    // const [name, setName] = useState('1')
    // const [room, setRoom] = useState('1')
    // const client = new W3CWebSocket(
    //     'ws://95.130.227.129:8000/ws/chat/' + room + '/'
    // )
    // const buttonClicked = (e) => {
    //     client.send(
    //         JSON.stringify({
    //             command: 'new_message',
    //             from: 1,
    //             auction_id: 1,
    //             price: 1,
    //         })
    //     )
    //     setValue('')
    //     e.preventDefault()
    // }
    //
    // useEffect(() => {
    //     client.onopen = () => {
    //         console.log('WebSocket Client Connected')
    //
    //         client.send(
    //             JSON.stringify({
    //                 command: 'fetch_messages',
    //                 auction_id: 1,
    //             })
    //         )
    //
    //         client.send(
    //             JSON.stringify({
    //                 command: 'fetch_items',
    //                 auction_id: 1,
    //             })
    //         )
    //     }
    //
    //     client.onmessage = (message) => {
    //         const dataFromServer = JSON.parse(message.data)
    //         console.log('got reply! ', dataFromServer)
    //         // if (dataFromServer) {
    //         //     setMessages((messages) => [
    //         //         ...messages,
    //         //         {
    //         //             name: dataFromServer.name,
    //         //             message: dataFromServer.message,
    //         //         },
    //         //     ])
    //         // }
    //     }

    // }, [])

    const socket = new WebSocket('ws://192.168.1.157:8000/ws/subscribe')

    socket.addEventListener('message', function (event) {
        console.log('Update received:', JSON.parse(event.data))
    })

    // Subscribe to updates for the model instance with the ID of 1.
    socket.send(
        JSON.stringify({
            id: 1337,
            type: 'subscribe',
            model: 'appname.ModelName',
            action: 'retrieve',
            lookup_by: 1,
        })
    )

    // Subscribe to updates for every model in the queryset.
    socket.send(
        JSON.stringify({
            id: 1338,
            type: 'subscribe',
            model: 'appname.ModelName',
            action: 'list',
        })
    )

    // After 5 seconds, unsubscribe from updates for the single model instance with ID 1.
    setTimeout(5 * 1000, () =>
        socket.sent(
            JSON.stringify({
                type: 'unsubscribe',
                id: 1337,
            })
        )
    )
    return (
        <div>
            {/*<input value={name} onChange={(e) => setName(e.target.value)} />*/}
            {/*<input value={value} onChange={(e) => setValue(e.target.value)} />*/}
            {/*<button onClick={buttonClicked}>Send</button>*/}
        </div>
    )
}
