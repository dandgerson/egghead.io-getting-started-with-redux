import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import logger from 'redux-logger'

import {
  todos,
} from './reducers'

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

const rootReducer = combineReducers({
  todos,
})

const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.({}) || compose
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
)

export default createStore(
  rootReducer,
  enhancer,
)
