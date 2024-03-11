import { useState,useContext } from "react"
import React from 'react'
import UserContext from "../context/UserContext"

function Login() {
    const[username,setUserName]=useState('');
    const[first,setFirst]=useState(second)
    const[password,setPassword]=useState(second)
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e)=>setUserName(e.target.value)} placeholder="Username" />
            <input type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
            <button onClick={handleSubmit}>submit</button>
        </div>
        
    )
}

export default Login
