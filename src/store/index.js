import {
  createStore,
  combineReducers,
} from 'redux'

import {
  counter,
  todos,
} from './reducers'

// const unsubsribeListener = (listener) => listener()

const store = createStore(combineReducers({
  counter,
  todos,
}))

const listener = () => console.log('The store has updated', store.getState())


store.subscribe(listener)


export default store
