import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
  return (
    <div className='container mt-4'>
      <h2 className='mb-3 text-center'>Todo List</h2>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default Todo
