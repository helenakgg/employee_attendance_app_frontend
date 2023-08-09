import React from 'react'
import { useSelector } from 'react-redux'

function Welcome() {
    const { fullname } = useSelector(state => {
        return {
            fullname : state.auth?.fullname
        }})
    return (
    <div>
        <h1 className="title">Dashboard</h1>
        <h2 className="subtitle">
            Welcome Back <strong>{fullname}</strong>
        </h2>
    </div>
  )
}

export default Welcome