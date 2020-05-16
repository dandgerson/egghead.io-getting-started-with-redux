const expect = require('expect')
const deepFreeze = require('deep-freeze')

const t = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
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
    case t.TOGGLE_TODO: {
      const { id } = action.payload
      return state.map(todo => todo.id === id ? ({
        ...todo,
        completed: !todo.completed,
      }) : todo)
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

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false,
    },
  ]
  const action = {
    type: t.TOGGLE_TODO,
    payload: {
      id: 0,
    }
  }
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: true,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false,
    },
  ]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(todos(stateBefore, action))
    .toEqual(stateAfter)
}

// testAddTodo()
testToggleTodo()
console.log('All tests are failed')
