import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={localStorage.setItem('jwt',{name: 'test user'})}>Create JWT</button>
        </div>
    )
}

export default Home
