import React, { useState } from 'react'; // Importing React and useState hook from 'react'
// This file is part of a React application
function App() {

  // Hooks -> useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback
  // const [user, setUser] = useState("Piyush") // Using useState hook to manage the 'user' state, initialized with "Piyush"

  // let changeUser = () => {
  //   setUser("John walker") // This line updates the state to "John walker"
  // }

  // const abc = () => {
  //   console.log("Now you also the part of react") // This function logs "Now you also the part of react" to the console
  // }

  

  const [count, setCount] = useState(0); // Declaring state variable 'count' with initial value 0

  return (
    <> {/* Fragment to group elements without adding extra nodes */}
      <h1>React Basics</h1>
      <p>Welcome to React Basics</p>
      {/* <h2>{user}</h2> */}
      {/* <button onClick={changeUser}>Change User</button> */}
      {/* <button onClick={abc}>Click Me</button> */}
      {/* This button will change the user state when clicked */}
      <br /> <br />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 10)}>Increment</button>
      <br /> <br />
      <button onClick={() => setCount(count - 10)}>Decrement</button>
    </>
  )
}

export default App // Exporting the App component so it can be used in other files
