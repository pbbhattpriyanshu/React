import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-600 bg-black p-4 text-center">Hello world!</h1>
    </>
  )
}

export default App
// This is a simple React component that uses Tailwind CSS for styling.
// installing tailwindcss by following command
// npm install -D tailwindcss@3 postcss autoprefixer
// npx tailwindcss init -p
// tailwind.config.js
// module.exports = {
//   content: ["./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// src/index.css 
// @tailwind base;
// @tailwind components;
// @tailwind utilities;