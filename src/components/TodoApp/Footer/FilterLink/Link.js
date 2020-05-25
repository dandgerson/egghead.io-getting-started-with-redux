import React from 'react'

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

export default Link
