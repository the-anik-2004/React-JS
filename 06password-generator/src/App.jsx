import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [lenght,setLenght]=useState(8);
const [numPermission,setNumPermission]=useState(false);
const [charPermission,setCharPermission]=useState(false);
const [password,setPassword]=useState("");

const passwordGenerator=useCallback(()=>{
  let pswd="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numPermission) str+="0123456789";
  // else if(charPermission)
  if(charPermission) str+=`!@#$%^&*(){}~?/|[]"'`
  for(let i=1;i<=array.length();i++){
    let index=Math.floor(Math.random()*str.length +1);
    pswd+=str.charAt(index) ;   
  }
  setPassword(pswd);
},[lenght,numPermission,charPermission,setPassword]);

  return (
    <>
     <div className='w-full max-w-md mx-auto py-2 my-8 shadow-md rounded-lg bg-gray-900 text-orange-500'>
      <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
                type="text"
                min={8}
                max={50} 
                value={password}
                placeholder='Password'
                className='outline-none w-full py-1 px-3 mx-2  mt-5 rounded-lg'
                readOnly/>
        <button className='outlinr bg-blue-700  shrink-0  px-3 py-1 mx-2 mt-5 text-white rounded-lg'>COPY</button>
        </div>
      
     </div>
    </>
  )
}

export default App
