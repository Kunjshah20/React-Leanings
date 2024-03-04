import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // counter = counter + 1
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) // O/P = 1,2,3,4, .... because useState sends the UI changes in batches
    if(counter < 20){ // hypothetial situation
      // setCounter( (prevCounter) => prevCounter + 1) // for understanding : setCounter uses callback fxn   setCounter(prevState => prevState + 1)
      setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1); // O/P : 4, 8, 12, 16, ....
      console.log("value added");
    }else{
      console.log("Can't add value greater than 20");
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
      console.log("Value removed");
    } else{
      setCounter(0);
      console.log("Counter is 0. Can't remove values");
    }
  }

  const reset = () => {
    if(counter > 0){
      setCounter(0);
      console.log("reset clicked");
    }
  }

  return (
    <>
      <h1>Kunj</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter} </button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <br />
      <button onClick={reset}>Reset Counter {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
