import React, { useContext } from 'react'
import { UserApp } from './Comp1'

function Comp4() {
    const user =useContext(UserApp)
  return (
    <div>
        <h3>
            Child 3
        </h3>
        <p>Welcome {user} </p>

    </div>
  )
}

export default Comp4