import React from 'react'
import './Menulink.css'

function Menulink() {
  return (
    <>     
          <Menulink linkname='Home' url='#home'/>
          <Menulink linkname='About' url='../SubPages/About.jsx'/>
          <Menulink linkname='Contact' url='contact'/>
          <Menulink linkname='Login' url='login'/>
   
    </>
  )
}

export default Menulink