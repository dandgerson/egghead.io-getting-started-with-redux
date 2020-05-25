import React from 'react'

import Todo from 'components/TodoApp/Todo'

const TodoList = ({
  todos,
  handleTodoClick,
}) => {


  return (
    <ul
      style={{
        listStyleType: 'circle',
        marginLeft: '40%',
      }}
    >
      {todos.map(todo => (
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
