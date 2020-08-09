export default (todos, filter) => {
  switch (filter) {
    case 'active': {
      return todos.filter(todo => !todo.completed)
    }
    case 'completed': {
      return todos.filter(todo => todo.completed)
    }
    default: {
      return todos
    }
  }
}
