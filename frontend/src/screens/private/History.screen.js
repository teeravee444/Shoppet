import React from 'react'

const History = () => {
    return (
        <div>
            <h1>History Page</h1>
            {/* <p>data: {`${localStorage.getItem('jwt')}`}</p> */}
            <button onClick={localStorage.setItem('jwt', {user: 'fake user'})}>Remove JWT</button>
            <button onClick={localStorage.removeItem('jwt')}>Remove JWT</button>
        </div>
    )
}

export default History