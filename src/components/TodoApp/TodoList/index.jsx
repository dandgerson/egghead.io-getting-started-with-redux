import React from 'react'
import { connect } from 'react-redux'


import { toggleTodo, getVisibleTodos } from 'store/reducers/todos'

import Todo from './Todo'

const TodoList = ({
  todos,
  toggleTodo,
}) => (
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
          handleClick={() => toggleTodo({ id: todo.id })}
        />
      ))
      }
    </ul>
  )

const mapStateToProps = (state, { filter }) => ({
  todos: getVisibleTodos(state, filter),
})

const mapDispatchToProps = {
  toggleTodo,
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
