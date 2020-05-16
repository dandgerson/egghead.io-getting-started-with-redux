import { createStore } from 'redux'

import { counter } from './reducers'

// const unsubsribeListener = (listener) => listener()

const store = createStore(counter)

const listener = () => console.log('The store has updated', store.getState())


store.subscribe(listener)


export default store
