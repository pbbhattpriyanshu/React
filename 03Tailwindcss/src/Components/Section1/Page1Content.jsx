import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-2 px-15 flex items-center gap-10 h-[83%]'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content