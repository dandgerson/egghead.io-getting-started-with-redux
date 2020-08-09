import sid from 'shortid'
import { combineReducers } from 'redux'

const t = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  RECIEVE_TODOS: 'RECIEVE_TODOS',
}

const todo = (state, action) => {
  switch (action.type) {
    case t.ADD_TODO: {
      return {
        id: action.id,
        text: action.text,
        isCompleted: false,
      }
    }
    case t.TOGGLE_TODO: {
      return state.id !== action.id
        ? state
        : ({
          ...state,
          isCompleted: !state.isCompleted,
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
    case t.RECIEVE_TODOS:
      return {
        ...state,
        ...(action.todos.reduce((acc, current) => ({
          ...acc,
          [current.id]: current,
        }), {})),
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

export const recieveTodos = ({ todos }) => ({
  type: t.RECIEVE_TODOS,
  todos,
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
