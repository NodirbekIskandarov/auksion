import React, { useEffect } from 'react'

export default function AlertSuccess({
    setSuccess,
    successText,
    setSuccessText,
}) {
    useEffect(() => {
        setTimeout(() => {
            setSuccessText('')
            setSuccess(false)
        }, 2000)
    }, [successText, setSuccess, setSuccessText])

    return (
        <div
            style={{ position: 'absolute' }}
            className="alert alert-primary"
            role="alert"
        >
            {successText}
        </div>
    )
}
