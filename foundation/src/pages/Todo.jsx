import React, { useState } from 'react'

const Todo = () => {

  const [ count, setCount ] = useState(0);
  const [ fruit, setFruit ] = useState("Apple");
  const [ display, setDisplay ] = useState(true);
 
  const fruitsBacket = [
    "mango", "graphes", "anar", "oranges", "banana", "watermelon", "papaya"
  ]

  const changeHandler = () => {
    setFruit(fruitsBacket.map(fruit => fruit + " 🍎"));
  }

  const switchButtonOf = () => {
    setDisplay(false)
  }
  const switchButtonOn = () => {
    setDisplay(true)
  }


  return (
    <>
    <div className='flex justify-center items-center mt-9 gap-5'>
      <h1 className='text-white'>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} className='bg-green-500 p-2'>Add</button>
      <button onClick={() => setCount(count - 1)} className='bg-red-500 p-2'>Sub</button>

      <h1 className='text-white'>Fruit: {fruit}</h1>
      <button onClick={changeHandler} className='bg-yellow-500 p-2'>Change</button>

      { display?<h1>💡</h1>:null}
      <button onClick={switchButtonOf} className='bg-red-600 p-2 text-white'>Switch off</button>
      <button onClick={switchButtonOn} className='bg-green-600 p-2 text-white'>Switch on</button>

       { count==0?<div className='h-10 w-10 p-7 bg-green-500 flex justify-center items-center text-center'>Green</div>
       :count==1?<div className='h-10 w-10 p-7 bg-yellow-500 flex justify-center items-center text-center'>Yellow</div>
       :count==2?<div className='h-10 w-10 p-7 bg-red-500 flex justify-center items-center text-center'>Red</div>
       :null}
    </div>
    
   
    </>
  )
}

export default Todo