import React from 'react'
import CabHead from '../../components/headers/CabHead'
import ChangeCabinetComponent from './ChangeCabinetComponent'
import { useLoad } from '../../hooks/request'
import {
    LEGAL_USER_DETAILS_RUD,
    PHYSICAL_USER_DETAILS_RUD,
} from '../../tools/urls'
import { isAuthenticated } from '../../tools/auth'

const Cabinet = () => {
    const role = localStorage.getItem('role')

    const { response } = useLoad({
        url:
            role === 'Jismoniy'
                ? PHYSICAL_USER_DETAILS_RUD
                : LEGAL_USER_DETAILS_RUD,
        headers: {
            Authorization: `Token ${isAuthenticated()}`,
        },
    })

    return (
        <>
            <div className="Cabinet">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 mb-2">
                            <CabHead response={response ?? {}} role={role} />
                        </div>
                        <div className="col-12 col-lg-9">
                            <ChangeCabinetComponent
                                role={role}
                                response={response ?? {}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cabinet
