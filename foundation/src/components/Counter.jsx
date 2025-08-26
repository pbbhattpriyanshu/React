import React, { useEffect } from 'react'

const Counter = ({count}) => {
    const handleCounter = () => {
        console.log("HandleCounter is Called");
    }

    useEffect(() => {
        handleCounter();
    }, [])
 
  return (
    <>
    <div className='mb-3'>
        <h1 className='text-yellow-400'>Counter Value {count} </h1>
    </div>
    </>
  )
}

export default Counter