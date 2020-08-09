import { useState, useEffect } from 'react'

import { fetchTodos } from 'api'

const useFetch = (filter) => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const todos = await fetchTodos(filter)
      setData(todos)
    })()
  }, [filter])

  return [data]
}

export default useFetch
