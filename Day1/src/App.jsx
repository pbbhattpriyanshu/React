import { useState, useEffect } from 'react'
import './App.css'
import StateLifting from './Components/StateLifting';
import Card from './Components/Card.jsx'
import Mahadev from './assets/Mahadev.jpeg'
import Bhrama from './assets/Bhrama.jpeg'
import Vishnu from './assets/Vishnu.jpeg'
// import Counter from './Components/Counter.jsx'
// import Button from './Components/Button.jsx'

function App() { 
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count+2);
  // }

  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwadega
  const [name, setName] = useState(" ");

  return (
    <>
    <div>
      <h1>State Lifting</h1>
      <StateLifting  name={name} setName={setName}/>
      <p>Value of name State in parent components: {name}</p>
    </div>
    {/* <Button handleClick={handleClick} text ="Click me">
      <h1>{count}</h1>
    </Button> */}
    <div className="container">
    <Card image = {Bhrama} name = "Bharama" course = "Generator" tool = "Book" />
    <Card image = {Vishnu} name = "Vishnu" course = "Operator" tool = "Sudershan Chkara" />
    <Card image = {Mahadev }name = "Mahadev" course = "Destroyer" tool = "Trishol" /> 
    </div>

    </>
  )
}

export default App
