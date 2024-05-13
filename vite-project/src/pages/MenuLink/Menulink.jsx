import React from 'react'
import MenuItem from '../MenuItem/MenuItem'

function Menulink() {
  return (
    <>
    <div className="links">
      <MenuItem linktext="Home" linkurl="/"/>
      <MenuItem linktext="Blog" linkurl="/blog"/>
      <MenuItem linktext="About" linkurl="/about"/>
      <MenuItem linktext="Contact" linkurl="/contact"/>
    </div> 
    </>
  )
}

export default Menulink