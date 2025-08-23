import React from 'react'

const User = ({data}) => {
  return (
    <div className='p-9 m-10 w-80 border border-red-500 rounded-xl'>
        <h4>Name: <span className='text-green-600'>{data.name}</span></h4>
        <h4>Age: <span className='text-green-600'>{data.age}</span></h4>
        <h4>Email: <span className='text-green-600'>{data.email}</span></h4>
    </div>
  )
}

export default User