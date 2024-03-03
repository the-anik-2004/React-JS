import { useState } from 'react'
import './App.css'

function App() {
  let [count,callBack]=useState(10);
  const increment=()=>{
    callBack(inLimit(count+1));
    // callBack(inLimit(count+1));
    // callBack(inLimit(count+1));
    // callBack(inLimit(count+1));
    //above mentioned statemenst does not increament by 4 as all the tasks send in batches 

    //Increment by 4
    // callBack(prevCount=>inLimit(prevCount+1));
    // callBack(prevCount=>inLimit(prevCount+1));
    // callBack(prevCount=>inLimit(prevCount+1));
    // callBack(prevCount=>inLimit(prevCount+1));
    
  }
  const decrement=()=>{
    callBack(inLimit(count-1));
  }

  const inLimit=(count)=>{
    if(count>=20){
      count=20;
    }else if(count<=0){
      count=0;
    }
    return count;
  }

  return (
   <>
    <h1>REACT : Counter[0-20]</h1>
    <h2>Click the below button to change value of counter[{count}/20]</h2>
      <h4>Counter:{count}</h4>
    <div id="btn">
    <button onClick={increment}>⬆️</button>
    <button onClick={decrement}>⬇️</button>
    </div>
   </>
  );
}

export default App
