import React from 'react'
import { useSelector } from 'react-redux'
import Cab1 from './Cab1'
import CabCard from './CabCard'
import CabMessage from './CabMessage'
import CabPay from './CabPay'
import CabGame from './CabGame'
import CabWin from './CabWin'
import CabPick from './CabPick'
import CabContract from './CabContract'
import CabPayment from './CabPayment'
import CabMainLegal from './CabMainLegal'

export default function ChangeCabinetComponent({ role, response }) {
    const cabinetMenuState = useSelector((state) => state.cabinetMenu)

    if (cabinetMenuState.main) {
        return role === 'Jismoniy' ? (
            <Cab1 user={response} />
        ) : (
            <CabMainLegal user={response} />
        )
    } else if (cabinetMenuState.fillAccount) {
        return <CabCard />
    } else if (cabinetMenuState.messages) {
        return <CabMessage />
    } else if (cabinetMenuState.payments) {
        return <CabPay />
    } else if (cabinetMenuState.applications) {
        return <CabGame />
    } else if (cabinetMenuState.ownData) {
        return <CabPayment />
    } else if (cabinetMenuState.wins) {
        return <CabWin />
    } else if (cabinetMenuState.choseLots) {
        return <CabPick />
    } else if (cabinetMenuState.contracts) {
        return <CabContract />
    }
}
