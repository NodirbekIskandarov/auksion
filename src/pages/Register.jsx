import React, { useState } from 'react'
import Alert from '../components/alerts/AlertError'
import PhysicalPersonRegister from '../components/register/PhysicalPersonRegister'
import LegalEntityRegister from '../components/register/LegalEntityRegister'

const Register = () => {
    const [userType, setUserType] = useState(false)
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [success, setSuccess] = useState(false)

    return (
        <>
            <div className="Login">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="log_box">
                                <div className="log_name">
                                    Ro‘yxatdan o‘tish
                                </div>
                                <div className="log_box_type">
                                    <div
                                        onClick={() => setUserType(!userType)}
                                        className={
                                            userType
                                                ? 'log_box_type_in pointer'
                                                : 'log_box_type_in active pointer'
                                        }
                                    >
                                        Jismoniy shaxs
                                    </div>
                                    <div
                                        onClick={() => setUserType(!userType)}
                                        className={
                                            !userType
                                                ? 'log_box_type_in pointer'
                                                : 'log_box_type_in active pointer'
                                        }
                                    >
                                        Yuridik shaxs
                                    </div>
                                    {error ? (
                                        <Alert
                                            errorText={errorText}
                                            setError={setError}
                                            setErrorText={setErrorText}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </div>

                                {!userType ? (
                                    <PhysicalPersonRegister
                                        setError={setError}
                                        setErrorText={setErrorText}
                                        setSuccess={setSuccess}
                                        success={success}
                                    />
                                ) : (
                                    <LegalEntityRegister
                                        setError={setError}
                                        setErrorText={setErrorText}
                                        setSuccess={setSuccess}
                                        success={success}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
