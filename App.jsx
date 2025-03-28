import React from 'react'
import Todo from './component/Todo'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap
import { ToastContainer } from 'react-toastify' // Toastify container
import 'react-toastify/dist/ReactToastify.css' // Toastify styles
import { TodoProvider } from './context/TodoContext' // Import Todo Context

function App() {
  return (
    <TodoProvider>
      <Todo />
      <ToastContainer />
    </TodoProvider>
  )
}

export default App
