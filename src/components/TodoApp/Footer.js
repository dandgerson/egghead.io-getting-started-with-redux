import React from 'react'

import FilterLink from './FilterLink'
const Footer = ({
  filter,
  handleFilterClick,
}) => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
        currentFilter={filter}
        handleClick={handleFilterClick}
      >
        All
      </FilterLink>
      {' '}
      <FilterLink
        filter='SHOW_ACTIVE'
        currentFilter={filter}
        handleClick={handleFilterClick}
      >
        Active
      </FilterLink>
      {' '}
      <FilterLink
        filter='SHOW_COMPLETED'
        currentFilter={filter}
        handleClick={handleFilterClick}
      >
        Completed
      </FilterLink>
    </p>
  )
}

export default Footer
