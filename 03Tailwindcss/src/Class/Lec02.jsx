import React from 'react'
import { useState } from 'react'
// Two way binding
function Lec02() {
    // Function to handle form submission
    const submitHandler = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault(); // prevent page reload
        console.log("Form submitted with name:", user);
    }
  const [user, setUser] = useState("Piyush");
  return (
    <>
    <h1>Two way binding</h1>
    <form onSubmit={(e) => {
      submitHandler(e)  // Call the submit handler function
    }}>
      <input value={user} onChange={(e) => {
        setUser(e.target.value);
      }} className='px-4 py-3 m-5 text-xl rounded' type="text" placeholder="Enter your name" />
      <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-600 rounded' type="submit">Submit</button>
    </form>
    </>
  )
}

export default Lec02