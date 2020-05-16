import React from 'react'
import { connect } from 'react-redux'
// import classNames from 'classnames'

import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from 'store/reducers/counter'

// import s from './Counter.module.scss'

const Counter = ({
  count,
  incrementCounter,
  decrementCounter,
  resetCounter,
}) => {
  return (
    <div>
      <div>{count}</div>
      <input type='button' onClick={incrementCounter} value='+' />
      <input type='button' onClick={decrementCounter} value='-' />
      <input type='button' onClick={resetCounter} value='reset' />
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.counter,
})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  resetCounter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
