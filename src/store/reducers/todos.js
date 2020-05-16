// const expect = require('expect')
// const deepFreeze = require('deep-freeze')

const t = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
}

export const todo = (state, action) => {
  switch (action.type) {
    case t.ADD_TODO: {
      return {
        ...action.payload,
        completed: false,
      }
    }
    case t.TOGGLE_TODO: {
      const { payload } = action
      return state.id !== payload.id
        ? state
        : ({
            ...state,
            comleted: !state.completed,
          })
    }
    default:
      return state
  }
}

const INITIAL = []
export const todos = (state = INITIAL, action) => {
  switch (action.type) {
    case t.ADD_TODO: {
      return [
        ...state,
        todo(undefined, action)
      ]
    }
    case t.TOGGLE_TODO: {
      return state.map(t => todo(t, action))
    }
    default:
      return state
  }
}

export const addTodo = (payload) => ({
  type: t.ADD_TODO,
  payload,
})

export const toggleTodo = (payload) => ({
  type: t.TOGGLE_TODO,
  payload,
})


// const testAddTodo = () => {
//   const stateBefore = []
//   const action = {
//     type: t.ADD_TODO,
//     payload: {
//       id: 0,
//       text: 'Learn Redux',
//     }
//   }
//   const stateAfter = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: false,
//     },
//   ]

//   deepFreeze(stateBefore)
//   deepFreeze(action)

//   expect(todos(stateBefore, action))
//     .toEqual(stateAfter)
// }

// const testToggleTodo = () => {
//   const stateBefore = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: false,
//     },
//     {
//       id: 1,
//       text: 'Go shopping',
//       completed: false,
//     },
//   ]
//   const action = {
//     type: t.TOGGLE_TODO,
//     payload: {
//       id: 0,
//     }
//   }
//   const stateAfter = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: true,
//     },
//     {
//       id: 1,
//       text: 'Go shopping',
//       completed: false,
//     },
//   ]

//   deepFreeze(stateBefore)
//   deepFreeze(action)

//   expect(todos(stateBefore, action))
//     .toEqual(stateAfter)
// }

// testAddTodo()
// testToggleTodo()
// console.log('All tests are failed')
