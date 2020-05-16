const t = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

const INITIAL = 0
export const counter = (state = INITIAL, action) => {
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
    default:
      return state
  }
}

export const incrementCounter = () => ({ type: t.INCREMENT })
export const decrementCounter = () => ({ type: t.DECREMENT })
export const resetCounter = () => ({ type: t.RESET })
