import React from 'react'
import './HeaderContent.css'
import logo from './img/logo.png'
import Menulink from '../MenuLink/Menulink'
import About from '../SubPages/About'

function HeaderContent() {
  return (
    <>
    <div id='headercontent'>
      <img className='logo' src={logo}alt="" />
      <Menulink/> 
         
    </div>
    

    </>
  )

}

export default HeaderContent