import React, { useRef, useState } from 'react'
import { useTodo } from '../context/TodoContext'
import { useDrag, useDrop } from 'react-dnd'


const ItemType = 'TASK'

function TodoItem({ task, index }) {
  const { editTask, deleteTask, reorderTasks, tasks, searchQuery } = useTodo()
  const ref = useRef(null)

  const [ , drag] = useDrag({
    type: ItemType,

    item: { index },
    

  })
  // console.log(drag(4),'drag');
  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        // console.log(draggedItem.current,'current')
        // console.log(draggedItem.index, 'index')
        // console.log(index, 'index1');
        reorderTasks(draggedItem.index, index)
        draggedItem.index = index
      }
    },
  })
  
  // console.log(ref.current,'ref');
  drag(drop(ref))
  // console.log(drag(),'drag');
  // console.log(drop(),'drop')
  // console.log(ref,'ref')

  return (
    <li
      ref={ref}
      className='list-group-item d-flex justify-content-between align-items-center'
    >
      {task.name} {task.id}
      <div>
        <button
          className='btn btn-primary btn-sm me-2'
          onClick={() => editTask(task.id)}
        >
          Edit
        </button>
        <button
          className='btn btn-danger btn-sm'
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
