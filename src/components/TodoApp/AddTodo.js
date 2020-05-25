import React, { useRef } from 'react'

const AddTodo = ({
  handleClick,
}) => {
  const refs = {
    input: useRef(),
  }

  return (
    <div>
      <input ref={refs.input} type="text" placeholder='what to do' />
      <input type="button" value='Add Todo' onClick={() => {
        const inputEl = refs.input.current
        handleClick(inputEl.value)
        inputEl.value = ''
      }} />
    </div>
  )
}

export default AddTodo
