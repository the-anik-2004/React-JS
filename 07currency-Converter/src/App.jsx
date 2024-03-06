import { useState,useEffect } from 'react';
import { InputBox } from './components/index';
// import {useCurrencyInfo} from './hooks/useCurrency';
// import {useCurrencyInfo} from './hooks/useCurrency'

const useCurrencyInfo=(currency)=>{
  const [data,setData]=useState({});
  useEffect(()=>{
      fetch( `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((response)=>response.json())
      .then(res=>setData(res[currency]))
      .catch("Api is not working")

  },[currency])

  return data;
}


function App() {
  const BackgroundImage="https://images.unsplash.com/photo-1591033594798-33227a05780d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D"
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0);

  const currencyInfo=useCurrencyInfo(from);
  const options= Object.keys(currencyInfo);


  const swapBtn=()=>{
    setFrom(to)
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

return (
  <div
  className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
  style={{
      backgroundImage: `url('${BackgroundImage}')`
  }}
>
  <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
              onSubmit={(e) => {
                  e.preventDefault();
                  convert()
              }}
          >
              <div className="w-full mb-1">
                  <InputBox
                 
                      label="From"
                      amount={amount}
                      currencyOptions={options}
                      onCurrencyChange={
                        (currency)=>setFrom(currency)
                      }
                      selectCurrency={from}
                      onAmountChange={
                        (amount)=>setAmount(amount)
                      }
                    //   amountDisable
                  />
              </div>
              <div className="relative w-full h-0.5">
                  <button
                      type="button"
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                      onClick={swapBtn}
                  >
                      SWAP
                  </button>
              </div>
              <div className="w-full mt-1 mb-4">
                  <InputBox
                      label="To"
                      amount={convertedAmount}
                      currencyOptions={options}
                      onCurrencyChange={
                        (currency)=>setTo(currency)
                      }
                      selectCurrency={to}
                      amountDisable
                  />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >
                   Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
          </form>
      </div>
  </div>
</div>
    );
}

export default App
