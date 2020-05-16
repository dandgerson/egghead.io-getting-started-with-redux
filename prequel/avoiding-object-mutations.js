const expect = require('expect')
const deepFreeze = require('deep-freeze')

const toggleTodo = (todo) => {

  // return Object.assign({}, todo, { complete: !todo.complete})
  return {
    ...todo,
    complete: !todo.complete,
  }
}

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    complete: false,
  }
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    complete: true,
  }

  expect(toggleTodo(deepFreeze(todoBefore)))
    .toEqual(todoAfter)
}

testToggleTodo()
console.log('All tests are failed')
