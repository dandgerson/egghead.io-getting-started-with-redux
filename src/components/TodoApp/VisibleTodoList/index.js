import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo } from 'store/reducers/todoApp'

import TodoList from './TodoList'
const VisibleTodoList = ({
  todos,
  currentFilter,
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

  const handleToggleTodo = (id) => {
    toggleTodo({ id })
  }

  return (
    <TodoList
      todos={getVisibleTodos(
        todos,
        currentFilter,
      )}
      filter={currentFilter}
      handleTodoClick={handleToggleTodo}
    />
  )
}

const mapDispatchToProps = {
  toggleTodo,
}

const mapStateToProps = (state) => ({
  todos: state.todoApp.todos,
  currentFilter: state.todoApp.visibilityFilter,
})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
