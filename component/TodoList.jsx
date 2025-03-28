import React from 'react'
import TodoItem from './TodoItem'
import { useTodo } from '../context/TodoContext'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function TodoList() {
  const { tasks, searchQuery, currentPage, setCurrentPage } = useTodo()

  const todosPerPage = 3

  const filterSearch = tasks.filter((task) => {
    // console.log(task)
    return task.name.toLowerCase().includes(searchQuery.toLowerCase())
  })
  const totalPages = Math.ceil(filterSearch.length / todosPerPage)
  const startIndex = (currentPage - 1) * todosPerPage
  const selectedTodos = filterSearch.slice(
    startIndex,
    startIndex + todosPerPage
  )
  return (
    <DndProvider backend={HTML5Backend}>
      <ul className='list-group mt-3'>
        {tasks.length === 0 && (
          <li className='list-group-item text-center'>No tasks available</li>
        )}
        {filterSearch.map((task, index) => (
          <TodoItem key={task.id} task={task} index={index} />
        ))}
      </ul>

      <hr />
      {totalPages > 1 && (
        <>
          <button
            className='btn d-flex justify-content-center'
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage===1}
          >
            previous
          </button>

          <span>
            page {currentPage} of {totalPages}{' '}
          </span>

          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage===totalPages}>next</button>
        </>
      )}
    </DndProvider>
  )
}

export default TodoList
