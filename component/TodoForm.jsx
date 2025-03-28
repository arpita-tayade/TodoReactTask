import React from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
  const {
    task,
    setTask,
    isEditing,
    addTask,
    updateTask,
    searchQuery,
    setSearchQuery,
  } = useTodo()

  return (
    <div className='d-flex'>
      <input
        type='text'
        className='form-control me-2'
        placeholder='search '
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <hr />
      <input
        type='text'
        className='form-control me-2'
        placeholder='Enter task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {isEditing ? (
        <button className='btn btn-warning' onClick={updateTask}>
          Update
        </button>
      ) : (
        <button className='btn btn-success' onClick={addTask}>
          Add Task
        </button>
      )}
    </div>
  )
}

export default TodoForm
