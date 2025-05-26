# ⚛️ ReactJS Starter Guide

Welcome to the world of **React.js** – a powerful JavaScript library for building modern user interfaces! This guide covers:

- 🔹 What is React?
- 🧠 Why use React?
- 🧱 Real DOM vs Virtual DOM
- 💻 React + Vite Setup
- 🎨 Adding TailwindCSS

---

## ⚛️ What is React?


**React** is a JavaScript library developed by **Facebook** for building fast and interactive user interfaces.

- 💡 Component-based
- ⚡ Fast rendering using Virtual DOM
- 🔁 Reusable UI components

---

## 🧠 Why Use React?

- 📦 Modular: Reusable components
- ⚡ Fast: Efficient updates with Virtual DOM
- 🌐 SPA: Enables Single Page Applications
- 🔄 Reactive: Real-time data binding with hooks

---

## 🔍 Real DOM vs Virtual DOM

| Feature        | Real DOM                              | Virtual DOM                        |
|----------------|----------------------------------------|------------------------------------|
| Update Speed   | Slower (direct manipulation)           | Faster (diffing algorithm)         |
| Performance    | More memory & CPU intensive            | Optimized rendering                |
| Rendering      | Renders whole tree                     | Only updates changed components    |

---

## 🚀 Create a React App using Vite

```bash
# Step 1: Create project
npm create vite@latest my-app -- --template react

# Step 2: Go to project folder
cd my-app

# Step 3: Install dependencies
npm install

# Step 4: Start development server
npm run dev

---
## 🚀 Installing Tailwindcss
```bash

# Install TailwindCSS & its dependencies
npm install -D tailwindcss@3 postcss autoprefixer

# Initialize Tailwind config
npx tailwindcss init -p
---
## ✍️ Then update tailwind.config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
---

🧾 Add Tailwind to src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
