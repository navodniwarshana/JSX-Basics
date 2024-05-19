import React from 'react'
import Comp4 from './Comp4'

function Comp3() {
  return (
    <div>
        <h2>Child 2</h2>
       {/*} <p>Welcome {props.user} </p>{*/}
        <Comp4/>
    </div>
  )
}

export default Comp3