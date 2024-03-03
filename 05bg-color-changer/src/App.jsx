import { useState } from 'react'


function App() {
  const [color, setColor] = useState('#212121');

  return (
    <div className='w-screen h-screen duration-900'
    style={{backgroundColor: color}}
    >
      <div className='flex flex-wrap fixed justify-center
       inset-x-4 px-2  bottom-12 rounded-full border-2 border-black' style={{backgroundColor:"aliceblue",color:"#fff"}}>
        <Button props="red"/>
        <button onClick={()=>{setColor('green')}} className='m-1 rounded-full flex flex-wrap bg-green-500 ' >GREEN</button>
        <button onClick={()=>{setColor('blue')}} className='m-1 rounded-full flex flex-wrap bg-blue-500 ' >BLUE</button>
        <button onClick={()=>{setColor('yellow')}} className='m-1 rounded-full flex flex-wrap bg-yellow-500 ' >YELLOW</button>
        <button onClick={()=>{setColor('gray')}} className='m-1 rounded-full flex flex-wrap bg-gray-500 ' >GRAY</button>
        <button onClick={()=>{setColor('pink')}} className='m-1 rounded-full flex flex-wrap bg-pink-500 ' >PINK</button>
        <button onClick={()=>{setColor('violet')}} className='m-1 rounded-full flex flex-wrap bg-violet-500 ' >VIOLET</button>
        <button onClick={()=>{setColor('white')}} className='m-1 rounded-full flex flex-wrap bg-white text-black border-2 border-black' >WHITE</button>
        <button onClick={()=>{setColor('black')}} className='m-1 rounded-full flex flex-wrap bg-black-500 ' >BLACK</button>
        <button onClick={()=>{setColor('orange')}} className='m-1 rounded-full flex flex-wrap bg-orange-500 ' >ORANGE</button>
        <button onClick={()=>{setColor('cyan')}} className='m-1 rounded-full flex flex-wrap bg-cyan-500 ' >CYAN</button>
      </div>
    </div>
  )
}

function Button(props='color'){
  return(
    <button onClick={()=>setColor(color)} className='m-1 rounded-full flex flex-wrap ' style={{backgroundColor:color}} >{color.toUpperCase()}</button>
  )
}


export default App
