const { createStore } = require('redux')
// const { createStore } = require('./createStore')
const expect = require('expect')
const t = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

const INITIAL = 0
const counter = (state = INITIAL, action) => {
  switch (action.type) {
    case t.INCREMENT: {
      return state + 1
    }
    case t.DECREMENT: {
      return state - 1
    }
    case t.RESET: {
      return INITIAL
    }
    default: return state
  }
}

expect(counter(0, { type: t.INCREMENT })).toEqual(1)
expect(counter(1, { type: t.INCREMENT })).toEqual(2)
expect(counter(2, { type: t.DECREMENT })).toEqual(1)
expect(counter(2, { type: 'SOME_TYPE' })).toEqual(2)
expect(counter(undefined, {})).toEqual(INITIAL)

console.log('Tests are failed!')

const store = createStore(counter)
console.log('The store was initialized', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('The store has changed', store.getState())
})

store.dispatch({ type: t.INCREMENT })
store.dispatch({ type: t.INCREMENT })
store.dispatch({ type: t.INCREMENT })
store.dispatch({ type: t.DECREMENT })
store.dispatch({ type: t.RESET })

unsubscribe()
console.log('unsubscribed')

store.dispatch({ type: t.INCREMENT })
store.dispatch({ type: t.INCREMENT })
store.dispatch({ type: t.DECREMENT })

console.log('ended store', store.getState())
