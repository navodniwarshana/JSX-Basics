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

  //rest operator
  function sum(...somenumbers){
    let total=0;
    somenumbers.forEach(somenumber =>{
      total += somenumber;
    });
    return total;
  }
  console.log(sum(1,2,3,4,5,6,7,8,9))

  function mybio(name,age,...rest){
   console.log(name,age,rest)
 }
 mybio("nn",25,"a","b","c","d");

 //spread operator :- use to array convert to list of items
 console.log(Math.min(1,2,3,4,5,6,7,8,9));

 let a=[2,3,4,5,6,7,8,9];
 console.log(Math.min(...a)) //spread

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