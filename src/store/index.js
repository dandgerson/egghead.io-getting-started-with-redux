import {
  createStore,
  combineReducers,
} from 'redux'

import {
  counter,
  todoApp,
} from './reducers'

// const unsubsribeListener = (listener) => listener()

const store = createStore(combineReducers({
  counter,
  todoApp,
}))

const listener = () => console.log('The store has updated', store.getState())


store.subscribe(listener)


export default store
