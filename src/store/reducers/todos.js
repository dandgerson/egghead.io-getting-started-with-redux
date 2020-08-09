import sid from 'shortid'

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

export const todos = (state = [], action) => {
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
  switch (filter) {
    case 'active': {
      return todos.filter(todo => !todo.completed)
    }
    case 'completed': {
      return todos.filter(todo => todo.completed)
    }
    case 'all':
    default: {
      return todos
    }
  }
}
