import React, { useState } from "react";

const Todo = () => {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("Apple");
  const [display, setDisplay] = useState(true);
  const [val, setVal] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skill, setSkill] = useState([]);
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("");
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

  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkill([...skill, event.target.value]);
    } else {
      setSkill([...skill.filter((item) => item != event.target.value)]);
    }
  };

  const switchButtonOff = () => setDisplay(false);
  const switchButtonOn = () => setDisplay(true);

  const clearAll = () => setVal("");

  return (
    <div className=" bg-gray-900">
      {" "}
      {/* Main Heading */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-wide text-yellow-500">
          Interactive Playground
        </h1>
        <p className="text-gray-400">
          A mini React + Tailwind demo with counters, fruit basket, switches,
          and input handling.
        </p>
      </header>
      <div className="min-h-screen bg-gray-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 text-white">
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
          <p className="mb-2">
            Name: <span className="text-yellow-300 font-mono mb-4">{name}</span>
          </p>
          <p className="mb-2">
            Email:{" "}
            <span className="text-yellow-300 font-mono mb-4">{email}</span>
          </p>
          <p className="mb-2">
            Password:{" "}
            <span className="text-yellow-300 font-mono mb-4">{password}</span>
          </p>

          <form action="" method="get">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="p-3 rounded-lg outline-none text-black flex-1 m-5 w-72"
              type="text"
              placeholder="Enter your name"
            />
            <br />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="p-3 rounded-lg outline-none text-black flex-1 m-5 w-72"
              type="text"
              placeholder="Enter your email"
            />
            <br />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="p-3 rounded-lg outline-none text-black flex-1 m-5 w-72"
              type="password"
              placeholder="Enter Password"
            />
            <br />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg mt-5">
              Submit
            </button>
            <button
              onClick={() => {
                setName("");
                setEmail("");
                setPassword("");
              }}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg mt-5 ml-5"
            >
              Clear All
            </button>
          </form>
        </section>
        {/* Check box */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-center">CheckBoxes</h2>
          <h3 className="text-lg font-light mb-6 text-center text-gray-300">
            Select your Skills
          </h3>

          <div className="space-y-4">
            {/* Java */}
            <label
              htmlFor="java"
              className="flex items-center bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600 transition"
            >
              <input
                onChange={handleSkills}
                type="checkbox"
                id="java"
                value="java"
                className="form-checkbox h-5 w-5 text-yellow-400 rounded focus:ring-yellow-400"
              />
              <span className="ml-3 text-yellow-400 font-medium">Java</span>
            </label>

            {/* JavaScript */}
            <label
              htmlFor="javaScript"
              className="flex items-center bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600 transition"
            >
              <input
                onChange={handleSkills}
                type="checkbox"
                id="javaScript"
                value="javaScript"
                className="form-checkbox h-5 w-5 text-yellow-400 rounded focus:ring-yellow-400"
              />
              <span className="ml-3 text-yellow-400 font-medium">
                JavaScript
              </span>
            </label>

            {/* Python */}
            <label
              htmlFor="python"
              className="flex items-center bg-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-600 transition"
            >
              <input
                onChange={handleSkills}
                type="checkbox"
                id="python"
                value="python"
                className="form-checkbox h-5 w-5 text-yellow-400 rounded focus:ring-yellow-400"
              />
              <span className="ml-3 text-yellow-400 font-medium">Python</span>
            </label>
          </div>
          <p className="mb-2 mt-4">{skill.toString()}</p>
        </section>
        {/* Handle Radio and Dropdown */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Handle Radio and Dropdown
          </h2>

          {/* Gender Selection */}
          <h3 className="text-lg font-light mb-2 text-center text-gray-300">
            Select Gender
          </h3>
          <div className="flex justify-center items-center gap-6 mt-3">
            {/* Male */}
            <label
              htmlFor="male"
              className="flex items-center gap-2 cursor-pointer text-gray-200 hover:text-yellow-300 transition"
            >
              <input
                onChange={(event) => setGender(event.target.value)}
                value="male"
                type="radio"
                name="gender"
                id="male"
                className="accent-yellow-400 w-4 h-4"
              />
              Male
            </label>

            {/* Female */}
            <label
              htmlFor="female"
              className="flex items-center gap-2 cursor-pointer text-gray-200 hover:text-yellow-300 transition"
            >
              <input
                onChange={(event) => setGender(event.target.value)}
                value="female"
                type="radio"
                name="gender"
                id="female"
                className="accent-yellow-400 w-4 h-4"
              />
              Female
            </label>

            {/* Other */}
            <label
              htmlFor="other"
              className="flex items-center gap-2 cursor-pointer text-gray-200 hover:text-yellow-300 transition"
            >
              <input
                onChange={(event) => setGender(event.target.value)}
                value="other"
                type="radio"
                name="gender"
                id="other"
                className="accent-yellow-400 w-4 h-4"
              />
              Other
            </label>
          </div>

          {/* Selected Gender */}
          <p className="mt-4 text-white font-semibold">
            Selected Gender:{" "}
            <span className="text-yellow-300 font-mono">{gender}</span>
          </p>

          {/* City Selection */}
          <h3 className="text-lg font-light mb-2 mt-6 text-center text-gray-300">
            Select City
          </h3>
          <select
            className="bg-slate-700 text-white p-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
            onChange={(event) => setCity(event.target.value)}
            defaultValue="delhi"
          >
            <option value="noida">Noida</option>
            <option value="delhi">Delhi</option>
            <option value="delhi NCR">Delhi NCR</option>
            <option value="gurugram">Gurugram</option>
            <option value="gautam budh nagar">Gautam Budh Nagar</option>
          </select>

          {/* Selected City */}
          <p className="mt-4 text-white font-semibold">
            Selected City:{" "}
            <span className="text-yellow-300 font-mono">{city}</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Todo;
