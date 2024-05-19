import React from 'react'
import Comp3 from './Comp3'

function Comp2() {
  return (
    <div>
        <h1>Child 1</h1>
       {/*} <p>Welcome {props.user} </p>{*/}
        <Comp3/>    
    </div>
  )
}

export default Comp2