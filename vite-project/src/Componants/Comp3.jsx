import React from 'react'
import Comp4 from './Comp4'

function Comp3(props) {
  return (
    <div>
        <h2>Child 2</h2>
       {/*} <p>Welcome {props.user} </p>{*/}
        <Comp4 user={props.user}/>
    </div>
  )
}

export default Comp3