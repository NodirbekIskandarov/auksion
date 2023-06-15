import React from 'react'
import Header from '../components/headers/Header'
import HeadAuct from '../components/headers/HeadAuct'
import HeadNews from '../components/headers/HeadNews'
import HeadMessage from '../components/headers/HeadMessage'
import HeadFoot from '../components/headers/HeadFoot'

const Home = () => {
    return (
        <>
            <Header />
            <HeadAuct />
            <HeadNews />
            <HeadMessage />
            <HeadFoot />
        </>
    )
}

export default Home
