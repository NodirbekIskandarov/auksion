import React, { useEffect, useState } from 'react'

export default function WebSocketPage() {
    const [messages, setMessages] = useState([])
    const [auctionState, setAuctionState] = useState({})

    useEffect(() => {
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            setAuctionState(data.message)
        }
    }, [])

    const handleBid = (amount) => {
        // Send the bid to the backend over the websocket connection
        socket.send(
            JSON.stringify({
                message: {
                    type: 'bid',
                    amount: amount,
                },
            })
        )
    }

    const socket = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/')

    socket.onopen = () => {
        console.log('WebSocket connection opened')
    }

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        console.log('WebSocket message received:', data)
        // Update the UI with the new auction state
    }

    socket.onclose = () => {
        console.log('WebSocket connection closed')
    }

    return (
        <div>
            {/* Render the auction UI using the `auctionState` */}
            <p style={{ color: 'white' }}>
                Current bid: {auctionState.current_bid ?? 10}
            </p>
            <button onClick={() => handleBid(auctionState.current_bid + 10)}>
                Bid +10
            </button>
        </div>
    )
}
