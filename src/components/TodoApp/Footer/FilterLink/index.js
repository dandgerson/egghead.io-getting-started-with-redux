import React from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from 'store/reducers/todoApp'

const Link = ({
  active,
  handleClick,
  children,
}) => {


  return active
    ? (<span>{children}</span>)
    : (
      <a
        href="#"
        onClick={handleClick}
      >
        {children}
      </a>
    )
}

const mapStateToProps = (state, { filter }) => ({
  active: state.todoApp.visibilityFilter === filter,
})

const mapDispatchToProps = (dispatch, { filter }) => ({
  handleClick() { dispatch(setVisibilityFilter({ filter })) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
