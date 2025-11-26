import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full w-60 rounded-4xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <RightCardContent/>
    </div>
  )
}

export default RightCard