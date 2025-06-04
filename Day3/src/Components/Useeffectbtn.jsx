import React, { useEffect, useState } from 'react'

const Useeffectbtn = () => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    //first --> side-effect function
    //second --> clean-up function
    //third --> coma seprated dependicies list

    //Variation -1 
    //run on every render
    // useEffect (() => {
    //     alert("I will run on each render")
    // })
    
    //Variation - 2 
    //that runs on only first render
    // useEffect(() => {
    //     alert("I will run only 1st render")
    // }, [])
    
    //Variation - 3 
    //run every time when count is updatd
    // useEffect(() => {
    //     alert("I will run every time when count is updated")
    // }, [count])

    //Variation - 4 
    //multiple dependencies
    useEffect(() => {
        alert("I will run every time when count/total is updated")
    }, [count,total] )

    function handleClick() {
        setCount(count + 1)
    }

    function handleClickTotal() {
        setTotal(total+1)
    }
  return (
    <>
    <button onClick={handleClick}>Update Count</button>
    <h3>The Value of count is {count}</h3>
    <br />
    <button onClick={handleClickTotal}>Update Total</button>
    <h3>The Value of total is {total}</h3>
    </>
  )
}

export default Useeffectbtn