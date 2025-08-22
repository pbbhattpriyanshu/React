import { useState } from 'react';
import Home from './pages/Home'
import Favorite from './pages/Favorite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <Favorite/>
    </>
  )
}

export default App
