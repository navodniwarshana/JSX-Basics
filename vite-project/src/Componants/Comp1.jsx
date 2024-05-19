import React, { useState } from 'react'
import Comp2 from './Comp2';

function Comp1() {
    const [username,setUserName] = useState ("Guest");

  return (
    <div>
        <h2>Parent</h2>
       <p>Welcome {username} </p>
       <input type="text" placeholder="Enter your Username" 
       onChange={(e)=>{
        setUserName(e.target.value)
       }}
       />

       <Comp2 user={username}/>
    </div>

  )
}

export default Comp1