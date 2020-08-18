import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { toggleTodo, getVisibleTodos, recieveTodos } from 'store/reducers/todos'

import useFetch from 'hooks/useFetch'

import Todo from './Todo'

const TodoList = ({
  toggleTodo,
  recieveTodos,
}) => {
  const { filter } = useParams()
  const [todos] = useFetch(filter || 'all')

  useEffect(() => {
    recieveTodos({ todos })
  }, [todos, recieveTodos])

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

const mapStateToProps = (state, { filter }) => ({
  todos: getVisibleTodos(state, filter),
})

const mapDispatchToProps = {
  toggleTodo,
  recieveTodos,
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
