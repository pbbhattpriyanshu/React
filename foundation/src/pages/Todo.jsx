import React, { useState } from "react";

const Todo = () => {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("Apple");
  const [display, setDisplay] = useState(true);
  const [val, setVal] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fruitsBacket = [
    "mango",
    "grapes",
    "anar",
    "oranges",
    "banana",
    "watermelon",
    "papaya",
  ];

  const changeHandler = () => {
    setFruit(fruitsBacket.map((fruit) => fruit + " 🍎"));
  };

  const switchButtonOff = () => setDisplay(false);
  const switchButtonOn = () => setDisplay(true);

  const clearAll = () => setVal("");

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-8 text-white space-y-10">
      {/* Main Heading */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-wide">Interactive Playground</h1>
        <p className="text-gray-400">
          A mini React + Tailwind demo with counters, fruit basket, switches, and input handling.
        </p>
      </header>

      {/* Counter Section */}
      <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Counter</h2>
        <p className="text-lg mb-4">
          Count: <span className="font-mono">{count}</span>
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
          >
            ➕ Add
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            ➖ Subtract
          </button>
        </div>

        {/* Color Indicator */}
        <h2 className="text-2xl font-bold mb-2 mt-7">Traffic Light</h2>
        <div className="mt-6  flex items-center justify-center ">
          {count === 0 && (
            <div className="h-12 w-12 bg-green-500 flex items-center justify-center rounded-lg">
              Green
            </div>
          )}
          {count === 1 && (
            <div className="h-12 w-12 bg-yellow-500 flex items-center justify-center rounded-lg">
              Yellow
            </div>
          )}
          {count === 2 && (
            <div className="h-12 w-12 bg-red-500 flex items-center justify-center rounded-lg">
              Red
            </div>
          )}
        </div>
      </section>

      {/* Fruit Section */}
      <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Fruit Basket</h2>
        <p className="text-lg mb-4">
          Fruit: <span className="font-mono">{fruit}</span>
        </p>
        <button
          onClick={changeHandler}
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-black font-semibold"
        >
          🍎 Change Fruit
        </button>
      </section>

      {/* Switch Section */}
      <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Light Switch</h2>
        {display && <h3 className="text-4xl mb-4">💡</h3>}
        <div className="flex justify-center gap-3">
          <button
            onClick={switchButtonOff}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Switch Off
          </button>
          <button
            onClick={switchButtonOn}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
          >
            Switch On
          </button>
        </div>
      </section>

      {/* Input Section */}
      <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Input Playground</h2>
        <p className="mb-2">Current Value:</p>
        <h3 className="text-yellow-300 font-mono mb-4">{val}</h3>
        <div className="flex gap-3 justify-center">
          <input
            onChange={(e) => setVal(e.target.value)}
            value={val}
            type="text"
            placeholder="Write something..."
            className="p-3 rounded-lg outline-none text-black flex-1"
          />
          <button
            onClick={clearAll}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Clear
          </button>
        </div>
      </section>
      {/* Form Controller */}
      <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Form Controller</h2>
        <p className="mb-2">Name: <span className="text-yellow-300 font-mono mb-4">{name}</span></p>
        <p className="mb-2">Email: <span className="text-yellow-300 font-mono mb-4">{email}</span></p>
        <p className="mb-2">Password: <span className="text-yellow-300 font-mono mb-4">{password}</span></p>
        
        <form action="" method="get">
          <input value={name} onChange={(event) => setName(event.target.value)} className="p-3 rounded-lg outline-none text-black flex-1 m-5 w-72" type="text" placeholder="Enter your name"/>
          <br />
          <input value={email} onChange={(event) => setEmail(event.target.value)} className="p-3 rounded-lg outline-none text-black flex-1 m-5 w-72" type="text" placeholder="Enter your email"/>
          <br />
          <input value={password} onChange={(event) => setPassword(event.target.value)} className="p-3 rounded-lg outline-none text-black flex-1 m-5 w-72" type="password" placeholder="Enter Password" />
          <br />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg mt-5">Submit</button>
          <button onClick={() => {setName(''); setEmail(''); setPassword('')}} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg mt-5 ml-5">Clear All</button>
        </form>
      </section>
    </div>
  );
};

export default Todo;
