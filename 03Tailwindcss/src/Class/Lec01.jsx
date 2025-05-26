import { useState } from 'react'
import React from 'react'
// form Handling
// <></> is a shorthand for React.Fragment
// It allows you to group multiple elements without adding extra nodes to the DOM
export const Lec01 = () => {


  const submitHandler = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault(); // prevent page reload
    console.log("Form submitted");
  }

  return (
    <>
    <h1>Form Handling</h1>
    <form onSubmit={(e) => {
      submitHandler(e)  // Call the submit handler function
    }}>
      <input className='px-4 py-3 m-5 text-xl rounded' type="text" placeholder="Enter your name" />
      <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-600 rounded' type="submit">Submit</button>
    </form>
    </>
  )
}
export default Lec01
