import React, { useRef } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
} from 'store/reducers/todoApp'

import s from './TodoApp.module.scss'

let nextTodoId = 0
const TodoApp = ({
  todos,
  filters,
  addTodo,
  toggleTodo,
  setVisibilityFilter,
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
        <input ref={refs.input} type="text" placeholder='input todo' />
        <button onClick={handleAddTodo}>
          Add Todo
      </button>
      </div>

      {todos.map(todo => (
        <ul
          key={todo.id}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            listStyleType: 'circle',
            marginLeft: '40%',
          }}
        >
          <li
            style={{
              width: '200px',
              textAlign: 'left',
              // display: 'flex',
              // justifyContent: 'flex-start',
              cursor: 'pointer',
              // margin: '4px auto',
            }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            <span className={classNames({
              [s.completed]: todo.completed,
            })}>{todo.text}</span>
          </li>
        </ul>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todoApp.todos,
  filters: state.todoApp.visibilityFilter,
})

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
