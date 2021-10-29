import React from 'react'
import { Redirect } from 'react-router'

const History = () => {
    return (
        <div>
            <h1>History Page</h1>
            <button onClick={localStorage.removeItem('jwt')}>Remove JWT</button>
        </div>
    )
}

export default History