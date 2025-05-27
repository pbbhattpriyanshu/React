import React from 'react'
import { Link } from 'react-router-dom'
// link --> <Link> </Link> istead of <a> </a> tag
// to navigate between pages without reloading the page
function Navbar() {
  return (
    <>
    <nav className='flex items-center justify-between py-4 px-10 bg-slate-800 text-white'>
        <h2 className='text-2xl font-bold'>iCream <input className='rounded-md p-0 text-black text-lg' type="text" /></h2>
        <div className='flex gap-8 items-center'>
          <Link to='/'>
            <h4 className='hover:text-emerald-500 text-lg'>Home</h4>
          </Link>
          <Link to='/about'>
            <h4 className='hover:text-emerald-500 text-lg'>About</h4>
          </Link>
          <Link to='/product'>
            <h4 className='hover:text-emerald-500 text-lg'>Product</h4>
          </Link>
          <Link to='/contact'>
            <h4 className='hover:text-emerald-500 text-lg'>Contact</h4>
          </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar