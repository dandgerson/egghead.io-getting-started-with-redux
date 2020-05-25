import React from 'react'

const FilterLink = ({
  filter,
  currentFilter,
  handleClick,
  children,
}) => {


  return filter === currentFilter
    ? (<span>{children}</span>)
    : (
      <a
        href="#"
        onClick={(e) => handleClick(e, filter)}
      >
        {children}
      </a>
    )
}

export default FilterLink
