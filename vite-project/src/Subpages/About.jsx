import React, { useEffect, useRef, useState } from 'react'
import HeaderContent from '../pages/HeaderContent/HeaderContent'
import Bodycontent from '../pages/BodyContent/Bodycontent'
import Footercontent from '../pages/FooterContent/Footercontent'
import LoggedIn from './LoggedIn';

function About() {

  
 //-------- useRef & ref attribute ----------------------------

  const [input,setinput] = useState(" <Input text gose here> ");
  const [count,setcount] = useState(0);

  /*
  const countref=useRef("hi");
  console.log(countref.current);
 */

  const countref=useRef(0);
  const inputref=useRef();
  const inputref2=useRef();

  useEffect(() => {
    //setcount ((count) => count - 1 );
    countref.current =countref.current + 1;
  })

  const handlechange = (e) => {   
    if(e.target.value.length == 0){
      setinput("<Input text gose here>")
    }else{
      setinput(e.target.value);
      inputref.current.style.backgroundColor = "red";
    }
  
  }
  const handleclick =() =>{
    if(inputref2.current.value == ""){
      inputref2.current.focus()
    }
    else if(inputref2.current.value > 50){
      alert("Success")
    }
    else{
      alert("Error")
    }
  }

  return (
    <>
      <HeaderContent/>
      <Bodycontent>
         
          <input type="text" onChange={handlechange}/>
          <p>You have inputs {input} </p>
        {/* <p>Rendered {count}</p> */}
          <p>Rendered {countref.current}</p>
          <input type="text" ref={inputref} />
          <br />
          <input type="text" ref={inputref2} />
          <button onClick={handleclick}> click me </button>

      </Bodycontent>
      <Footercontent/>
    </>
  )
    
    
}

export default About