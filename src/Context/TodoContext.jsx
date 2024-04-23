import React, { createContext, useState } from 'react'

export const todocontext = createContext(null)

const TodoContext = (props) => {

    const [tasks, settasks] = useState([{title: "Task1", done: true}])
  return (
    <todocontext.Provider value={[tasks, settasks] }>
            {props.children}
    </todocontext.Provider>
  )
}
export default TodoContext