import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from 'store/reducers/visibilityFilter'

const FilterLink = ({
  isActive,
  handleClick,
  children,
}) => (isActive
  ? <span>{children}</span>
  : (
    <a
      href="#"
      onClick={handleClick}
    >
      {children}
    </a>
  ))

const mapStateToProps = (state, { filter }) => ({
  isActive: state.visibilityFilter === filter,
})

const mapDispatchToProps = (dispatch, { filter }) => ({
  handleClick() { dispatch(setVisibilityFilter({ filter })) },
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)
