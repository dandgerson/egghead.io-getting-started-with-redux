import React from 'react'
import { connect } from 'react-redux'


import { toggleTodo } from 'store/reducers/todos'
import getVisibleTodos from './getVisibleTodos'

import Todo from './Todo'

const TodoList = ({
  todos,
  toggleTodo,
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
          handleClick={() => toggleTodo({ id: todo.id })}
        />
      ))
      }
    </ul>
  )
}

const mapDispatchToProps = {
  toggleTodo,
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  currentFilter: state.visibilityFilter,
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
