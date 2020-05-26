import { combineReducers } from 'redux'

const t = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

const todo = (state, action) => {
  switch (action.type) {
    case t.ADD_TODO: {
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    }
    case t.TOGGLE_TODO: {
      return state.id !== action.id
        ? state
        : ({
          ...state,
          completed: !state.completed,
        })
    }
    default:
      return state
  }
}

// Reducer composition with arrays

const todos = (state = [], action) => {
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

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case t.SET_VISIBILITY_FILTER: {
      return action.filter
    }
    default:
      return state
  }
}

// Implementation of combineReducers
//
// const combineReducers = (reducers) => {
//   return (state = {}, action) => Object.keys(reducers)
//     .reduce((acc, current) => ({
//       ...acc,
//       [current]: reducers[current](state[current], action),
//     }), {})
// }

export const todoApp = combineReducers({
  todos,
  visibilityFilter,
})

// Reducer composition with objects
//
// export const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action,
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   }
// }


// Action creators

let nextId = 0
export const addTodo = ({ text }) => ({
  type: t.ADD_TODO,
  id: nextId++,
  text,
})

export const toggleTodo = ({ id }) => ({
  type: t.TOGGLE_TODO,
  id,
})

export const setVisibilityFilter = ({ filter }) => ({
  type: t.SET_VISIBILITY_FILTER,
  filter,
})
