import React from 'react'
import { connect } from 'react-redux'
// import cl from 'classnames'

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
} from 'store/reducers/todoApp'

// import s from './TodoApp.module.scss'

import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

let nextTodoId = 0
const TodoApp = ({
  todos,
  filter,
  addTodo,
  toggleTodo,
  setVisibilityFilter,
}) => {
  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL': {
        return todos
      }
      case 'SHOW_COMPLETED': {
        return todos.filter(todo => todo.completed)
      }
      default: {
        return todos.filter(todo => !todo.completed)
      }
    }
  }

  const handleAddTodo = (text) => {
    addTodo({
      id: nextTodoId++,
      text,
    })
  }

  const handleToggleTodo = (id) => {
    toggleTodo({ id })
  }

  const handleSetVisibilityFilter = (e, filter) => {
    e.preventDefault()
    setVisibilityFilter({ filter })
  }

  return (
    <div>
      <AddTodo handleClick={handleAddTodo} />

      <TodoList
        todos={getVisibleTodos(
          todos,
          filter,
        )}
        filter={filter}
        handleTodoClick={handleToggleTodo}
      />

      <Footer
        filter={filter}
        handleFilterClick={handleSetVisibilityFilter}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todoApp.todos,
  filter: state.todoApp.visibilityFilter,
})

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
