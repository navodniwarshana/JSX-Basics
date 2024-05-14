import React from 'react'
import HeaderContent from '../pages/HeaderContent/HeaderContent'
import Bodycontent from '../pages/BodyContent/Bodycontent'
import Footercontent from '../pages/FooterContent/Footercontent'
import LoggedIn from './LoggedIn';

function About() {

  const loggedin=true;//false
  const names =["Jane","Doe","jhone"];
  const namescount=names.length;

  const namearr =["amal","kamal","bimal"];
  const namescount2=namearr.length;

  return (
    <>
      <HeaderContent/>
      <Bodycontent>
          <h2>About Page</h2>
          {loggedin && <LoggedIn/> }
          {!loggedin && <h2> Logged Out</h2>}

          {namescount > 0 && names.map((value) =>  //use and operation
              {
                return <h2>{value}</h2>
              }
            )}
          {namescount ==0 && <p>None Provided</p>}
          
          {/*use Ternary operators*/}
          {namescount2 > 0 ? (namearr.map((name2)=>{
            return <h3>{name2}</h3>
          })) : (<p>None Provided</p>)}

      </Bodycontent>
      <Footercontent/>
    </>
  )
    
    
}

export default About