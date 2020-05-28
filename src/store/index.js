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

const persistedState = loadState()

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
})

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const listener = () => console.log('The store has updated', store.getState())

store.subscribe(throttle(() => {
  const { todos } = store.getState()

  saveState({
    todos,
  })
}, 1000))
store.subscribe(listener)
listener()

export default store
