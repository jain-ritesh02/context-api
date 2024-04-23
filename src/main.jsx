import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoContext from './Context/TodoContext.jsx'
import UserContext from './Context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TodoContext>
        <UserContext>
            <App />
        </UserContext>
    </TodoContext>
)
