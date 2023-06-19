import React from 'react'
import MasterCard from '../../img/svgs/mastercard.svg'
import Visa from '../../img/svgs/visa.svg'
import PayPal from '../../img/svgs/paypal.svg'

const CabCard = () => {
    return (
        <>
            <div className="Cab1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cab_1">
                                <div className="cab_1_name">
                                    Hisob varaqni to‘ldirish
                                </div>
                                <div className="cab_card_box row">
                                    <div
                                        className={
                                            'col-lg-4 col-md-6 col-12 mt-2'
                                        }
                                    >
                                        <img
                                            src={MasterCard}
                                            alt=""
                                            className={'w-100 payment-image'}
                                        />
                                    </div>

                                    <div
                                        className={
                                            'col-lg-4 col-md-6 col-12 mt-2'
                                        }
                                    >
                                        <img
                                            src={Visa}
                                            alt=""
                                            className={'w-100 payment-image'}
                                        />
                                    </div>

                                    <div
                                        className={
                                            'col-lg-4 col-md-6 col-12 mt-2'
                                        }
                                    >
                                        <img
                                            src={PayPal}
                                            alt=""
                                            className={'w-100 payment-image'}
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

export default CabCard
