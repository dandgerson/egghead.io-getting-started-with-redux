export { todos } from './todos'
export { visibilityFilter } from './visibilityFilter'

// Implementation of combineReducers
//
// const combineReducers = (reducers) => {
//   return (state = {}, action) => Object.keys(reducers)
//     .reduce((acc, current) => ({
//       ...acc,
//       [current]: reducers[current](state[current], action),
//     }), {})
// }

// Reducer composition with objects
//
// export const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action,
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   }
// }
