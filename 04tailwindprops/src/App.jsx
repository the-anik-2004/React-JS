import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const customObj={
    name:'ROHAN PAL',
    id:28100122006
  }


  return (
    <>
    <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
    {/* <Card user="ANIK" myObj={{name:'ANIK PAL',id:28100122062}}/>
    <Card user="ROHAN" myObj={customObj}/> */}
    <Card user="ANIK" btnText="Smart BOY"/>
    <Card user="ROHAN" btnText="Chocolate Boy" />
    <Card/>

    </>
  )
}

export default App
