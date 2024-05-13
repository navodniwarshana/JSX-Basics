import React from 'react'
import './HeaderContent.css'
import logo from './img/logo.png'
import Menulink from '../MenuLink/Menulink'

function HeaderContent() {
  return (
    <>
    <div id='headercontent'>
      <img className='logo' src={logo}alt="" />
        <Menulink linkname='Home' url='#home'/>
        <Menulink linkname='About' url='#about'/>
        <Menulink linkname='Contact' url='#contact'/>
        <Menulink linkname='Login' url='#login'/>
         
    </div>
    

    </>
  )

}

export default HeaderContent