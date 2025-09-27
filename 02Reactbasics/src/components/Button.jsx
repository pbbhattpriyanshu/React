import React, {useContext} from 'react'
import { CounterContext } from '../context/context'
import Component1 from './Component1'

const Button = () => {
    const value = useContext(CounterContext)
  return (
    <div>
        <button onClick={() => value.setCount((count => count + 10))} ><span><Component1/></span>I am a button</button>
    </div>
  )
}

export default Button