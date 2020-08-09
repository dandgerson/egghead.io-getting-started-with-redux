import React, { useRef } from 'react'
import { connect } from 'react-redux'

import { addTodo } from 'store/reducers/todos'

const AddTodo = ({
  dispatch,
}) => {
  const refs = {
    input: useRef(),
  }

  const handleAddTodo = () => {
    const inputEl = refs.input.current
    if (inputEl.value === '') return

    dispatch(addTodo({
      text: inputEl.value,
    }))

    inputEl.value = ''
  }

  return (
    <div>
      <input ref={refs.input} type="text" placeholder='what to do' />
      <input type="button" value='Add Todo' onClick={handleAddTodo} />
    </div>
  )
}

export default connect()(AddTodo)
