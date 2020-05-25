import React, { useRef } from 'react'
import { connect } from 'react-redux'
import cl from 'classnames'

import {
  addTodo,
  toggleTodo,
} from 'store/reducers/todoApp'

import s from './TodoApp.module.scss'

import FilterLink from './FilterLink'

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

  return (
    <div>
      <div>
        <input ref={refs.input} type="text" placeholder='what to do' />
        <input type="button" value='Add Todo' onClick={handleAddTodo} />

      </div>

      <ul
        style={{
          listStyleType: 'circle',
          marginLeft: '40%',
        }}
      >
        {getVisibleTodos(todos, filter).map(todo => (
          <li
            key={todo.id}
            style={{
              width: '200px',
              textAlign: 'left',
              cursor: 'pointer',
            }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            <span className={cl({
              [s.completed]: todo.completed,
            })}>
              {todo.text}
            </span>
          </li>
        ))
        }
      </ul>
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
