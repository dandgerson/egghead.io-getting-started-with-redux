import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from 'store/reducers/todoApp'

import Link from './Link'

const FilterLink = ({
  filter,
  currentFilter,
  setVisibilityFilter,
  children,
}) => {
  const handleSetVisibilityFilter = (e) => {
    e.preventDefault()
    setVisibilityFilter({ filter })
  }

  return (
    <Link
      active={filter === currentFilter}
      handleClick={handleSetVisibilityFilter}
    >
      {children}
    </Link>
  )
}

const mapStateToProps = (state) => ({
  currentFilter: state.todoApp.visibilityFilter,
})

const mapDispatchToProps = {
  setVisibilityFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)
