import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <div className='p-10'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fav' element={<Favourites/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
