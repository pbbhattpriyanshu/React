import React from 'react'
import Ex2 from './Ex2.jsx'

const Ex= (props) => {
  return (
    <>
    <h1>I am Example 1 {props.name}</h1>
    <Ex2 user={props.name}/>
    </>
  )
}

export default Ex