import React, { createContext, useState } from 'react'

export const todocontext = createContext(null)
export const usercontext = createContext(null)

const TodoContext = (props) => {
    
    const [tasks, settasks] = useState([{title: "Task1", completed: true}])
    const [user, setuser] = useState([{title: "Task2", completed: false}])

  return (
    <todocontext.Provider value={[tasks, settasks] }>  
    <usercontext.Provider value={[user, setuser]}>
        {props.children}
        </usercontext.Provider>
    </todocontext.Provider>
  )
}

export default TodoContext
