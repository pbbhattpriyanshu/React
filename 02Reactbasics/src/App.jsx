import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { CounterContext } from "./context/context";
function App() {
  //useState
  const [count, setCount] = useState(0); // Declaring state variable 'count' with initial value 0

  return (
    <>
      {" "}
      {/* Fragment to group elements without adding extra nodes */}
      <CounterContext.Provider value={{count, setCount}}>
        <h1>React Basics</h1>
        <p>Welcome to React Basics - useContext</p>
        <h5>
          Conponents: Passing count as props. <Navbar count={count} />{" "}
        </h5>
        <br /> <br />
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 10)}>Increment</button>
        <br /> <br />
        <button onClick={() => setCount(count - 10)}>Decrement</button>
      </CounterContext.Provider>
    </>
  );
}

export default App; // Exporting the App component so it can be used in other files
