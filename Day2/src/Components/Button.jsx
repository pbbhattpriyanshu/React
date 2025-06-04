import React, {useState} from 'react'
// Event handling
const Button = () => {
    const [clicked, setClicked] = useState(false);
    function handleClick() {
        setClicked(true);
    }

    function Boom() {
        alert("Haa..........")
    }
    function InChange(e) {
        console.log("Value till now: ", e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        // i am writing my custom behaviour
        alert("Form is submitted")
    }

    // Define styles based on state
    const buttonStyle = clicked ? { backgroundColor: 'teal', fontSize: '2rem', color: 'white', padding: '1rem 2rem' }
    : {};
  return (
    <>
    <button onClick={handleClick} style={buttonStyle}>Click</button>
    {/*<p onMouseOver={Boom}>Boom! Surprise</p> */}
    {/* <form onSubmit={handleSubmit}>
        <input onChange={InChange} type="text" placeholder='Write Something...' />
        <button type='Submit'>Submit</button>
    </form> */}
    </>
  )
}

export default Button