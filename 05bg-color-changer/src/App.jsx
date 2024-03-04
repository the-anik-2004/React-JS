import { useState } from 'react'


function App() {
  const [color, setColor] = useState('#212121');

  function Button({btnText}){
    return(
      <button onClick={()=>setColor(btnText)} className='rounded-full m-1' style={{backgroundColor:btnText}}>{btnText.toUpperCase()}</button>
    )
  }

  return (
    <div className='w-screen h-screen duration-900'
    style={{backgroundColor: color}}
    >
      <div className='flex flex-wrap fixed justify-center
       inset-x-4 px-2  bottom-12 rounded-full border-2 border-black' style={{backgroundColor:"aliceblue",color:"#fff"}}>

        <Button btnText='red'/>
        <Button btnText='green'/>
        <Button btnText='blue'/>
        <Button btnText='olive'/>
        <Button btnText='yellow' className="text-black"/>
        <Button btnText='pink'/>
        <Button btnText='purple'/>
        <Button btnText='lavender' className="text-gray-900"/>
        <Button btnText='black'/>
        
       
      </div>
    </div>
  )
}




export default App
