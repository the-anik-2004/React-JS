import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
    const [length,setLenght]=useState(8);
    const [numPermission,setNumPermission]=useState(false);
    const [charPermission,setCharPermission]=useState(false);
    const [password, setPassword] = useState("")

//useRef hook
const passwordRef=useRef(null);

const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numPermission) str += "0123456789";
  if(charPermission) str += "!@#$%^&*(){}~?/|[]'";

  for(let i=1;i<=length;i++){
    let index=Math.floor(Math.random()*str.length +1);
    pass+=str.charAt(index) ;   
  }

  setPassword(pass);}
  ,[length,numPermission,charPermission,setPassword]);


const copyPassword=useCallback(()=>{
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,length)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>passwordGenerator(),[length,numPermission,charPermission,passwordGenerator])
  return (
    <>
     <div className='w-full  max-w-md mx-auto py-2 my-8 shadow-md rounded-lg bg-gray-900 text-orange-500'>
      <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
                type="text"
                value={password}
                placeholder='Password'
                className='outline-none w-full py-1 px-3 mx-2  mt-5 rounded-lg'
                readOnly
                ref={passwordRef}/>
        <button className='outline bg-blue-700  shrink-0  px-3 py-1 mx-2 mt-5 text-white rounded-lg'
        onClick={copyPassword}
        >COPY</button>
        </div> 

        <div className='flex gap-x-4'>
        <div className='flex text-sm gap-x-0.5'>
          <input type="range" 
            min={8}  
           max={50}
         
           value={length}
           className='mx-2 cursor-pointer'
           onChange={(e)=>setLenght(e.target.value)}
          />
          <label >Length: {length} </label>
        </div>
        <div className='flex item-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charPermission}
            id="charInput"
            onChange={()=>{
              setCharPermission(prev=>!prev)
            }}
            />
            <label htmlFor="charInput">Characters</label>
        </div>

        <div className='flex item-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numPermission}
            id="numInput"
            onChange={()=>{
              setNumPermission(prev=>!prev)
            }}
            />
            <label htmlFor="numInput">Numbers</label>
        </div>

        </div>
        

     </div>
    </>
  )
  
}

export default App
