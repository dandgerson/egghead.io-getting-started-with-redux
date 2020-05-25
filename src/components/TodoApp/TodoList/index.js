import React from 'react'

import Todo from 'components/TodoApp/Todo'
const TodoList = ({
  todos,
  filter,
  handleTodoClick,
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

  return (
    <ul
      style={{
        listStyleType: 'circle',
        marginLeft: '40%',
      }}
    >
      {getVisibleTodos(todos, filter).map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          handleClick={() => handleTodoClick(todo.id)}
        />
      ))
      }
    </ul>
  )
}

export default TodoList
