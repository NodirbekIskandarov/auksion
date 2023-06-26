import React from 'react'
import Header from '../components/headers/Header'
import HeadAuction from '../components/headers/HeadAuction'
import HeadNews from '../components/headers/HeadNews'
import HeadMessage from '../components/headers/HeadMessage'
import HeadFoot from '../components/headers/HeadFoot'

const Home = () => {
    return (
        <>
            <Header />
            <HeadAuction />
            <HeadNews />
            <HeadMessage />
            <HeadFoot />
        </>
    )
}

export default Home
