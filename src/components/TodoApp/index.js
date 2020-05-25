import React from 'react'
import { connect } from 'react-redux'

import {
  addTodo,
  toggleTodo,
} from 'store/reducers/todoApp'

import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

let nextTodoId = 0
const TodoApp = ({
  todos,
  filter,
  addTodo,
  toggleTodo,
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

      <Footer />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
