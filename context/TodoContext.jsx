import React, { createContext, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'

// Create Context
const TodoContext = createContext()

// Custom Hook to Use Context
export const useTodo = () => {
  return useContext(TodoContext)
}

// Todo Provider Component
export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage,setCurrentPage] = useState(1)

  // ✅ Add Task
  const addTask = () => {
    if (!task.trim()) {
      toast.error('Task cannot be empty!')
      return
    }

    const newTask = { id: uuidv4(), name: task }
    setTasks([...tasks, newTask])
    setTask('')
    toast.success('Task added successfully!')
  }

  // ✅ Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
    toast.error('Task deleted!')
  }

  // ✅ Edit Task (Prepare update)
  const editTask = (id) => {
    const foundTask = tasks.find((t) => t.id === id)
    setTask(foundTask.name)
    setIsEditing(true)
    setEditId(id)
  }

  // ✅ Update Task
  const updateTask = () => {
    if (!task.trim()) {
      toast.error('Task cannot be empty!')
      return
    }

    setTasks(tasks.map((t) => (t.id === editId ? { ...t, name: task } : t)))
    setTask('')
    setIsEditing(false)
    setEditId(null)
    toast.info('Task updated successfully!')
  }
   const reorderTasks = (dragIndex, hoverIndex) => {
     const updatedTasks = [...tasks]
     const [movedTask] = updatedTasks.splice(dragIndex, 1)
     updatedTasks.splice(hoverIndex, 0, movedTask)
     setTasks(updatedTasks)
   }


  return (
    <TodoContext.Provider
      value={{
        tasks,
        task,
        isEditing,
        setTask,
        addTask,
        deleteTask,
        editTask,
        updateTask,
        reorderTasks,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
