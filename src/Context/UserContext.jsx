import React, { createContext, useState } from 'react'
export const usercontext = createContext(null)
const UserContext = (props) => {
    const [user, setuser] = useState([{user: "ritesh", age: 22}])
  return (
    <usercontext.Provider value={[user, setuser]}>
      {props.children}
    </usercontext.Provider>
  )
}

export default UserContext
