import React from 'react'
import './Bodycontent.css'

function BodyContent(props) {
  return (
    <>
      <div id='bodycontent'>
        <h3> Body Content </h3>
        {props.children}
      </div>
    </>
  )
}

export default BodyContent