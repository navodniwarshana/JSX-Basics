import React from 'react'
import './Menulink.css'

function Menulink(props) {
  return (
    <>     
     <a href={props.url} className='link'>{props.linkname}</a>
    </>
  )
}

export default Menulink