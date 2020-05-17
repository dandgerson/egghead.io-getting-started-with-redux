import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from 'store/reducers/todoApp'

const FilterLink = ({
  filter,
  currentFilter,
  setVisibilityFilter,
  children,
}) => {
  if (filter === currentFilter) return <span>{children}</span>

  const handleSetVisibilityFilter = (e) => {
    e.preventDefault()
    setVisibilityFilter({ filter })
  }

  return (
    <a
      href="#"
      onClick={handleSetVisibilityFilter}
    >
      {children}
    </a>
  )
}

// const mapStateToProps = (state) => ({
//   filter: state.filter,
// })

const mapDispatchToProps = {
  setVisibilityFilter,
}

export default connect(null, mapDispatchToProps)(FilterLink)
