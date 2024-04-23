import React, { useContext } from 'react'
import { todocontext} from './Context/TodoContext'
import { usercontext } from './Context/UserContext'



const App = () => {
 const [tasks, settasks] = useContext(todocontext)
 const [user, setuser] = useContext(usercontext)
 console.log(tasks,user)
  return (
    <div>
      tasks
    </div>
  )
}

export default App
