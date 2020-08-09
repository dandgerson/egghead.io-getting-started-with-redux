import { compose } from 'redux'

export default (options = {}) => window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.(options) || compose
