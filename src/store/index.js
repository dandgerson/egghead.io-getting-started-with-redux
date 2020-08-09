import {
  createStore,
  combineReducers,
} from 'redux'

import {
  todos,
} from './reducers'

const rootReducer = combineReducers({
  todos,
})


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch

  if (!console.group) return rawDispatch

  return (action) => {
    console.group(action.type)
    console.log('%c prev state', 'color: grey', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)

    return returnValue
  }
}

if (process.env.NODE_ENV !== 'production') {
  store.dispatch = addLoggingToDispatch(store)
}

export default store
