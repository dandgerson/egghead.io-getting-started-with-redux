const t = {
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case t.SET_VISIBILITY_FILTER: {
      return action.filter
    }
    default:
      return state
  }
}

export const setVisibilityFilter = ({ filter }) => ({
  type: t.SET_VISIBILITY_FILTER,
  filter,
})
