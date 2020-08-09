import {
  createStore,
  combineReducers,
} from 'redux'
import throttle from 'lodash/throttle'

import { loadState, saveState } from './localStorage'

import {
  todos,
  visibilityFilter,
} from './reducers'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
})

const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState,
  // enhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(throttle(() => {
  const { todos } = store.getState()

  saveState({
    todos,
  })
}, 1000))

export default store
