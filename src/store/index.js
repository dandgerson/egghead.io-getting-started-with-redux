import {
  createStore,
  combineReducers,
} from 'redux'

import {
  counter,
  todoApp,
} from './reducers'

// const unsubsribeListener = (listener) => listener()

const store = createStore(
  combineReducers({
    counter,
    todoApp,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const listener = () => console.log('The store has updated', store.getState())


store.subscribe(listener)


export default store
