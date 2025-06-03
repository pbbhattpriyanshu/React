import React from 'react'

const StateLifting = (props) => {
  return (
    <>
    <div>
        <input type="text" onChange={(e) => props.setName(e.target.value)} />
        <p>Value of name State in child components: {props.name}</p>
    </div>
    </>
  )
}

export default StateLifting