import { useState } from 'react';
import './App.css'
// State Management - Hooks

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>02Counter Project</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
