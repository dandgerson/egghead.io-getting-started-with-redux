import React from 'react'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  )
}

export default TodoApp
