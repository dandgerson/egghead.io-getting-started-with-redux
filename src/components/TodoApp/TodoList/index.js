import React from 'react'
import { connect } from 'react-redux'


import { toggleTodo } from 'store/reducers/todos'
import getVisibleTodos from './getVisibleTodos'

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

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
})

const mapDispatchToProps = {
  toggleTodo,
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
