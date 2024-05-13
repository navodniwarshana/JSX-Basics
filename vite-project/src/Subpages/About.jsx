import React from 'react'
import HeaderContent from '../pages/HeaderContent/HeaderContent'
import Bodycontent from '../pages/BodyContent/Bodycontent'
import Footercontent from '../pages/FooterContent/Footercontent'

function About() {
  return (
    <>
      <HeaderContent/>
      <Bodycontent>
          <h2>About Page</h2>
      </Bodycontent>
      <Footercontent/>
    </>
  )
    
    
}

export default About