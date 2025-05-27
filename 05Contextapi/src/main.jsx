import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import UserContext from './Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserContext>
        <App />
  </UserContext>

=======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
>>>>>>> b43f1413a076b43726299277e2dbba0d7d5adacb
)
