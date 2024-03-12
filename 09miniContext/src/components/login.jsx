import React,{useContext,useState} from 'react'
import UserContext from '../contexts/UserContext'

function Login() {
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const [msg,setMsg]=useState('')
const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username && password){
            setUser({username,password});
            setMsg('');
        }
        
        else{
        setMsg("Enter all the input fileds")
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="
            text"
            value={username} placeholder='UserName' 
            onChange={(e)=>setUsername(e.target.value)}/>
            <input type="
            text" value={password} placeholder='password'
            onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleSubmit}>SUBMIT</button>
            {msg}
        </div>
    )
}

export default Login
