import React from 'react'
import cl from 'classnames'

import s from './Todo.module.scss'

const Todo = ({
  completed,
  text,
  handleClick,
}) => {
  return (
    <li
      style={{
        width: '200px',
        textAlign: 'left',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <span className={cl({
        [s.completed]: completed,
      })}>
        {text}
      </span>
    </li>
  )
}

export default Todo
