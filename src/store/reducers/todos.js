const expect = require('expect')
const deepFreeze = require('deep-freeze')

const t = {
  ADD_TODO: 'ADD_TODO',
}

const INITIAL = []
// export const todos = (state = INITIAL, action) => {}
const todos = (state = INITIAL, action) => {
  switch (action.type) {
    case t.ADD_TODO: {
      return [...state, {
        completed: false,
        ...action.payload,
      }]
    }
    default:
      return state
  }
}

const addTodo = (payload) => ({
  type: t.ADD_TODO,
  payload,
})


const testAddTodo = () => {
  const stateBefore = []
  const action = {
    type: t.ADD_TODO,
    payload: {
      id: 0,
      text: 'Learn Redux',
    }
  }
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
  ]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(todos(stateBefore, action))
    .toEqual(stateAfter)
}

testAddTodo()
console.log('All tests are failed')