import React from 'react'
import './Bodycontent.css'

function BodyContent(props) {
  return (
    <>
      <div id='bodycontent'>
        
        {props.children}
      </div>
    </>
  )
}

export default BodyContent