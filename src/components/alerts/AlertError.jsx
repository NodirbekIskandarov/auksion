import React, { useEffect } from 'react'

export default function AlertError({ setError, errorText, setErrorText }) {
    useEffect(() => {
        setTimeout(() => {
            setErrorText('')
            setError(false)
        }, 2000)
    }, [errorText, setError, setErrorText])

    return (
        <div
            style={{ position: 'absolute' }}
            className="alert alert-success"
            role="alert"
        >
            {errorText}
        </div>
    )
}
