import { useState } from 'react'
import Lec01 from './Class/Lec01.jsx'
import Lec02 from './Class/Lec02.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'  
import Card from './Components/Card.jsx'


function App() {

  const users =  [
  {
    "name": "Aarav Mehta",
    "city": "Mumbai",
    "age": 28,
    "profession": "Software Engineer",
    "salary": 90000,
    "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    "name": "Priya Sharma",
    "city": "Delhi",
    "age": 25,
    "profession": "Graphic Designer",
    "salary": 60000,
    "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    "name": "Rohan Das",
    "city": "Bangalore",
    "age": 32,
    "profession": "Data Analyst",
    "salary": 85000,
    "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    "name": "Sneha Patel",
    "city": "Ahmedabad",
    "age": 30,
    "profession": "HR Manager",
    "salary": 75000,
    "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    "name": "Karan Verma",
    "city": "Pune",
    "age": 27,
    "profession": "Marketing Executive",
    "salary": 68000,
    "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
  }
]

  return (
    <>
    <div className='p-10'>
      {users.map(function(elem,idx){
        return <Card key={idx} user={elem.name} city={elem.city} age={elem.age} profession={elem.profession} salary={elem.salary} photo={elem.profilePhoto}/>
      })}
    </div>
    </>
  )
}

export default App
