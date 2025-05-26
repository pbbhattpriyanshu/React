import React from 'react'
// Props are used to pass data from parent to child components
// In this case, we are creating a Card component that takes title and description as props
const Card = (props) => {
    console.log(props)
  return (
    <div className='mr-4 bg-white p-6 inline-block text-black rounded-lg shadow-md m-4'>
        <img className='ml-4 h-40 w-40 rounded-full mb-3' src={props.photo} alt="" />
        <h2 className='text-2xl font-semibold mb-4'>{props.user}</h2>
        <h3 className='text-xl'>{props.city}, {props.age}</h3>
        <h3 className='text-xl text-blue-400'>{props.profession}, {props.salary}</h3>
        <button className='mt-5 bg-emerald-700 text-white py-2 px-4 rounded font-medium'>Add Friend</button>
    </div>
  )
}

export default Card