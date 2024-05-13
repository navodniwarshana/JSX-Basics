import React from 'react'

function MenuItem(props) {
  return (
    <a href={props.url} className='link'>{props.linkname}</a>

  )
}

export default MenuItem