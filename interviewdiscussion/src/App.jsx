import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  console.log('App rendered', Math.random())
  // const [value, setValue] = useState(1)
  const [value, setValue] = useState({
    value: 0,
  })


  // const [multipliedValue, setMultipliedValue] = useState(1)
  // let multipliedValue = value * 5

  // const multiplybyfive = () => {
  //   // setMultipliedValue(value * 5)
  //   setValue(value + 1)
  // }

  const clickMe = () => {
    // console.log("clicked");
    setValue({
      value: 1,
    })
  }

  return (
    <>
      <h1>Main value: {value.value} </h1>
      <button 
      // onClick={multiplybyfive}
      onClick={clickMe}
      >Click to multiply by 5</button>
      
      {/* <h2>Multiplied value: {multipliedValue} </h2> */}
    </>
  )
}

export default App
