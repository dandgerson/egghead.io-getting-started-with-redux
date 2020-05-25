import React, { useRef } from 'react'
import { connect } from 'react-redux'
// import cl from 'classnames'

import {
  addTodo,
  toggleTodo,
} from 'store/reducers/todoApp'

// import s from './TodoApp.module.scss'

import FilterLink from './FilterLink'
import TodoList from './TodoList'

let nextTodoId = 0
const TodoApp = ({
  todos,
  filter,
  addTodo,
  toggleTodo,
}) => {
  const refs = {
    input: useRef(),
  }

  const handleAddTodo = () => {
    const inputEl = refs.input.current
    addTodo({
      id: nextTodoId++,
      text: inputEl.value,
    })
    inputEl.value = ''
  }

  const handleToggleTodo = (id) => {
    toggleTodo({ id })
  }

  return (
    <div>
      <div>
        <input ref={refs.input} type="text" placeholder='what to do' />
        <input type="button" value='Add Todo' onClick={handleAddTodo} />

      </div>

      <TodoList
        todos={todos}
        filter={filter}
        handleTodoClick={handleToggleTodo}
      />
      <p>
        Show:
            {' '}
        <FilterLink
          filter='SHOW_ALL'
          currentFilter={filter}
        >
          All
            </FilterLink>
        {' '}
        <FilterLink
          filter='SHOW_ACTIVE'
          currentFilter={filter}
        >
          Active
            </FilterLink>
        {' '}
        <FilterLink
          filter='SHOW_COMPLETED'
          currentFilter={filter}
        >
          Completed
            </FilterLink>
      </p>

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
