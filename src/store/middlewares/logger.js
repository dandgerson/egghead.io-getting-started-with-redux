export const logger = store => next => action => {
  if (!console.group) return next

  console.group(action.type)
  console.log('%c prev state', 'color: grey', store.getState())
  console.log('%c action', 'color: blue', action)
  const returnValue = next(action)
  console.log('%c next state', 'color: green', store.getState())
  console.groupEnd(action.type)

  return returnValue
}

