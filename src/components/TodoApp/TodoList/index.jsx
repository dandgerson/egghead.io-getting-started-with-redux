import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { toggleTodo, getVisibleTodos } from 'store/reducers/todos'

import { fetchTodos } from 'api'

import Todo from './Todo'

const TodoList = ({
  toggleTodo,
}) => {
  const [todos, setTodos] = useState([])
  const { filter } = useParams()

  useEffect(() => {
    (async () => {
      const todos = await fetchTodos(filter)
      setTodos(todos)
    })()
  }, [filter])

  console.log({ todos })

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
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
