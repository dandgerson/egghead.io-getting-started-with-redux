import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from 'store/reducers/todoApp'

const FilterLink = ({
  filter,
  currentFilter,
  setVisibilityFilter,
  children,
}) => {
  const handleSetFilter = (e) => {
    e.preventDefault()
    setVisibilityFilter({ filter })
  }

  return filter === currentFilter
    ? (<span>{children}</span>)
    : (
      <a
        href="#"
        onClick={handleSetFilter}
      >
        {children}
      </a>
    )
}

const mapDispatchToProps = {
  setVisibilityFilter,
}

export default connect(null, mapDispatchToProps)(FilterLink)
