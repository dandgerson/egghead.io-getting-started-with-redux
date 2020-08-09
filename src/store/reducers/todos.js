import sid from 'shortid'
import { combineReducers } from 'redux'

const t = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
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

const byId = (state = {}, action) => {
  switch (action.type) {
    case t.ADD_TODO:
    case t.TOGGLE_TODO:
      {
        return {
          ...state,
          [action.id]: todo(state[action.id], action)
        }
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case t.ADD_TODO: {
      return [
        ...state,
        action.id,
      ]
    }
    default:
      return state
  }
}

export const todos = combineReducers({
  byId,
  allIds,
})

// Action creators

export const addTodo = ({ text }) => ({
  type: t.ADD_TODO,
  id: sid.generate(),
  text,
})

export const toggleTodo = ({ id }) => ({
  type: t.TOGGLE_TODO,
  id,
})

// State selectors

export const getVisibleTodos = (state, filter) => {
  const { todos } = state
  const allTodos = todos.allIds.map(id => todos.byId[id])

  switch (filter) {
    case 'active': {
      return allTodos.filter(todo => !todo.completed)
    }
    case 'completed': {
      return allTodos.filter(todo => todo.completed)
    }
    case 'all':
    default: {
      return allTodos
    }
  }
}
