import {
  createStore,
  combineReducers,
} from 'redux'

import {
  todos,
} from './reducers'

import { logger } from './middlewares'

const wrapDispatchWithMiddlewares = (store, middlewares) => middlewares
  .slice()
  .reverse()
  .forEach(middleware => store.dispatch = middleware(store)(store.dispatch))

const middlewares = []

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

const rootReducer = combineReducers({
  todos,
})
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

wrapDispatchWithMiddlewares(store, middlewares)

export default store
