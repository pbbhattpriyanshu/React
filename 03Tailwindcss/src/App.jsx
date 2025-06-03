import { useEffect, useState } from 'react'
import Lec01 from './Class/Lec01.jsx'
import Lec02 from './Class/Lec02.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'  
import Card from './Components/Card.jsx'
import Ex from './Components/Ex.jsx'
// import axios from 'axios' -->  it is commonly used to fetch data from APIs
import axios from 'axios'


function App() {

//   const users =  [
//   {
//     "name": "Aarav Mehta",
//     "city": "Mumbai",
//     "age": 28,
//     "profession": "Software Engineer",
//     "salary": 90000,
//     "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
//   },
//   {
//     "name": "Priya Sharma",
//     "city": "Delhi",
//     "age": 25,
//     "profession": "Graphic Designer",
//     "salary": 60000,
//     "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
//   },
//   {
//     "name": "Rohan Das",
//     "city": "Bangalore",
//     "age": 32,
//     "profession": "Data Analyst",
//     "salary": 85000,
//     "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
//   },
//   {
//     "name": "Sneha Patel",
//     "city": "Ahmedabad",
//     "age": 30,
//     "profession": "HR Manager",
//     "salary": 75000,
//     "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
//   },
//   {
//     "name": "Karan Verma",
//     "city": "Pune",
//     "age": 27,
//     "profession": "Marketing Executive",
//     "salary": 68000,
//     "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
//   }
// ]
const [data, setData] = useState([])

const getData = async () => {
  const response = await axios.get('https://picsum.photos/v2/list')
  setData(response.data)
}

useEffect(() => {
  // This will run once when the component mounts
  getData()
}
, [])
  return (
    <>
    {/*Above data props logic by maping */}
    {/* <div className='p-10'>
      {users.map(function(elem,idx){
        return <Card key={idx} user={elem.name} city={elem.city} age={elem.age} profession={elem.profession} salary={elem.salary} photo={elem.profilePhoto}/>
      })}
    </div> */}
    {/* <Ex name='Piyush' /> */}

    <button onClick={getData} className='bg-teal-700 text-white font-semibold text-xl px-6 py-3 rounded m-2 p-10 active:scale-90'>Get Data</button>
    <div className='bg-grey-800 p-5'>
      {data.map(function(elem, idx) {
        return <div key={idx} className='bg-white text-black flex item-center justify-center w-full px-7 py-6 rounded mb-2' >
          <img className='h-40' src={elem.download_url} alt="" />
          <h1 className='text-xl font-semibold text-black ml-4'>{elem.author}</h1>
        </div>
      })}
    </div>
    < Footer />
    </>
  )
}

export default App
