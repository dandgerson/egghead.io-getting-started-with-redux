import React from 'react'
import { useParams } from 'react-router-dom'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const TodoApp = () => {
  const { filter } = useParams()
  return (
    <div>
      <AddTodo />
      <TodoList filter={filter} />
      <Footer />
    </div>
  )
}

export default TodoApp
