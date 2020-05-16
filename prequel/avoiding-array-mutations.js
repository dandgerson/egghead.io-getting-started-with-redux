const expect = require('expect')
const deepFreeze = require('deep-freeze')

const addCounter = (list) => {
  return [...list, 0]
}

const testAddCounter = () => {
  const listBefore = []
  const listAfter = [0]

  deepFreeze(listBefore)

  expect(addCounter(listBefore)).toEqual(listAfter)
}


const removeCounter = (list, i) => {
  return [
    ...list.slice(0, i),
    ...list.slice(i + 1),
  ]
}

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 20]



  expect(removeCounter(deepFreeze([...listBefore]), 1))
    .toEqual(listAfter)

    expect(removeCounter(deepFreeze([...listBefore]), 2))
    .toEqual([0, 10])
}

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1),
  ]
}
const testIncrementCounter = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 11, 20]

  expect(incrementCounter(deepFreeze(listBefore), 1))
    .toEqual(listAfter)
}

// testAddCounter()
// testRemoveCounter()
testIncrementCounter()
console.log('All tests are failed')
