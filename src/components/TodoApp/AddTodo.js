import React, { useRef } from 'react'
import { connect } from 'react-redux'

import { addTodo } from 'store/reducers/todoApp'

let nextTodoId = 0
const AddTodo = ({
  addTodo,
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

  return (
    <div>
      <input ref={refs.input} type="text" placeholder='what to do' />
      <input type="button" value='Add Todo' onClick={handleAddTodo} />
    </div>
  )
}

const mapDispatchToProps = {
  addTodo,
}

export default connect(null, mapDispatchToProps)(AddTodo)
