import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='flex items-center justify-between py-5 px-10 bg-slate-800 text-white'>
        <h2 className='text-2xl font-bold'>iCream</h2>
        <div className='flex gap-8 items-center'>
            <h4 className='hover:text-emerald-500 text-xl'>About</h4>
            <h4 className='hover:text-emerald-500 text-xl'>Home</h4>
            <h4 className='hover:text-emerald-500 text-xl'>Services</h4>
            <h4 className='hover:text-emerald-500 text-xl'>Contact</h4>
        </div>
    </nav>
    </>
  )
}

export default Navbar