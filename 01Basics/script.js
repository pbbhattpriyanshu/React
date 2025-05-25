var root = document.querySelector("#root") // Select the root element
var h2 = document.createElement('h2') // Create a new h2 element
var para = document.createElement('p') // Create a new p element

h2.innerHTML = "Hello from js" // Set the inner HTML of the h2 element
para.innerHTML = "This is a paragraph added by JavaScript." // Set the inner HTML of the p element
root.appendChild(h2) // Append the h2 element to the root
root.appendChild(para) // Append the p element to the root
