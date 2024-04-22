import React, { useContext, useState } from 'react'
import { todocontext, usercontext } from './Context/TodoContext'

const App = () => {
  const [tasks, settasks] = useContext(todocontext)
  const [user, setuser] = useContext(usercontext)
  console.log(tasks,user)
  return (
    <div></div>
  )
}

export default App
