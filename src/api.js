import sid from 'shortid'

const data = {
  todos: [
    {
      id: sid.generate(),
      text: 'say hi',
      isCompleted: true,
    },
    {
      id: sid.generate(),
      text: 'say goodbye',
      isCompleted: false,
    },
    {
      id: sid.generate(),
      text: 'say yes',
      isCompleted: false,
    },
    {
      id: sid.generate(),
      text: 'say no',
      isCompleted: true,
    },
  ]
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = (filter) => delay(500)
  .then(() => {
    switch (filter) {
      case 'all': {
        return data.todos
      }
      case 'active': {
        return data.todos.filter(t => !t.isCompleted)
      }
      case 'completed': {
        return data.todos.filter(t => t.isCompleted)
      }
      default:
        throw new Error(`Unknow filter ${filter}`)
    }
  })
