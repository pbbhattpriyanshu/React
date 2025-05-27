import React from 'react'

const UserContext = ({children}) => {
    // This component is a placeholder for user context functionality
    const user = {
        name: "John Doe",
        email: "john.doe@example.com"
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default UserContext