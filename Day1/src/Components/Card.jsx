import React from 'react'
import './Card.css'
import Mahadev from '../assets/Mahadev.jpeg'
const Card = (props) => {
    console.log(props.course)
  return (
    <>
    {/* <div className="Id-Card">
      <img src={props.image} alt="pic" />
      <h1>{props.name}</h1>
      <h2>Course : {props.course}</h2>
      <h3>Tools : {props.tool}</h3>
      <p>Hi, I am {props.name}. I am {props.course} of this world. My tool is {props.tool}.</p>
    </div> */}
    {/* {props.children} */}
    </>
  )
}

export default Card