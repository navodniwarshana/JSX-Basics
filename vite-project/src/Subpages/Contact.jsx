import React, { useState } from 'react'
import HeaderContent from '../pages/HeaderContent/HeaderContent'
import Bodycontent from '../pages/BodyContent/Bodycontent'
import Footercontent from '../pages/FooterContent/Footercontent'


function Contact() {
    
    const styles_dev= //styling
      {
        fontSize:'2rem',color:'green',backgroundColor:'black',
        width:'4rem',
      }

    //use state
    ///let num=2;
    const [num,setnum]=useState(0)
    function handleClick(){
        setnum(5);
        //alert(num)
    }
    //--------------------------------
    const [count,setcount]=useState(0)

    const  incrfunc = () =>{
        setcount(count +1)
    }
     
    const dicrfunc = () =>{
        setcount(count -1)
    } 

  return (
    <>
        <HeaderContent/>

        <Bodycontent>

            <h2>Contact Page</h2>
            <h2>Use State</h2>
            <button className='btn' onClick={handleClick}>Click Me</button>
            <p>{num}</p><br />

            <button style={styles_dev} onClick={dicrfunc}> - </button>
            <button style={styles_dev} onClick={incrfunc}> + </button>
            
            <h3 >{count}</h3>

        </Bodycontent>

        <Footercontent/>
    </>
   
  )
}

export default Contact