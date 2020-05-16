const t = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SHOW_ALL: 'SHOW_ALL',
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
          comleted: !state.completed,
        })
    }
    default:
      return state
  }
}

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

const visibilityFilter = (state = t.SHOW_ALL, action) => {
  switch (action.type) {
    case t.SET_VISIBILITY_FILTER: {
      return action.filter
    }
    default:
      return state
  }
}

export const todoApp = (state = {}, action) => {
  return {
    todos: todos(
      state.todos,
      action,
    ),
    visibilityFilter: visibilityFilter(
      state.visibilityFilter,
      action
    )
  }
}

export const addTodo = ({ id, text }) => ({
  type: t.ADD_TODO,
  id,
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
