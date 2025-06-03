import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <>
    <h1>Counter by hooks - useState</h1>
    <div className="counter-container">
        <p className='para'>You have clicked {count} times</p>
        <button className='btn' onClick={() => {setCount(count + 5)}}>Click me</button>
        <button className='btn two' onClick={() => {setCount(count-6)}}>Click me</button>
    </div>
    </>
  )
}

export default Counter