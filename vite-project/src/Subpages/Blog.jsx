import React from 'react'
import HeaderContent from '../pages/HeaderContent/HeaderContent'
import Bodycontent from '../pages/BodyContent/Bodycontent'
import Footercontent from '../pages/FooterContent/Footercontent'
import reatlogo from '../assets/react.svg'

function Blog() {
 /* 
  const a =10;
  const firstname="Navod";
  const lastname="Niwarshana";
  const age="25";
  const getFullName=(fn, mn, ln) =>
  {
    return `${fn} ${mn} ${ln}`;
  }

  const arr = ["apple","orange","mango"];
  const lang =    <ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
  <li>React</li>
</ul>;

 const pobj={
  fname : "Amal",
  age : 32
}
*/
  function hello(e){
    console.log("Console log using function" ,e);
  }

  const hello2 = (e) => {
    console.log("Console log using arrow function", e.target);
  }

  function hello3(name){
    console.log("Console log using parameter anonimous function " + name);
  }

  const styles_dev= //styling
      {
        fontSize:'1rem',color:'green',backgroundColor:'black'
      }

  return (
    <>{/*
     <h1 className='heading'>hi</h1>
     <p>{10*10}% for JSX</p>
     <p>{a} call a variable</p>
     <p>{a > 50 ? "Greater" : "Lesser" }</p>

    <p>Full name : {firstname} {lastname} </p>
    <p>Age : {age} </p>
    <p>Full Name function: {getFullName("Navod","Niwarshana","Jayalath")} </p>
    <p>{firstname} likes {arr[2]} </p>

    <p>Frontend Languages</p>
    <p> {lang} </p>

    <p> call to object variables </p>
    <p> {pobj.fname} is {pobj.age} year old </p>*/}
 
    <div className="content">

      <HeaderContent/>

      <Bodycontent>
        <h2>Blog Page</h2>
      </Bodycontent>

        <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Facilis, tenetur!</p>

      <Bodycontent/>
        <img src="vite.svg" alt="vite logo" />{/*img in in public folder*/}
        <img src={reatlogo} alt="vite logo" />{/*img in in scr folder*/}

        <p>Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Facilis, tenetur!</p>

      <Bodycontent>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Exercitationem praesentium tempore debitis quos provident ut
           ratione veritatis perferendis nesciunt cumque.</p>

           <button onClick={hello}>Click Here</button>
           <button onClick={hello2}>Click Here</button>
           <button onClick={()=>{hello3("Hello")}}>Click Here</button>
           
      </Bodycontent>

      <Bodycontent>
          <p className='para1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, saepe?</p>

          <p style={{fontSize:'3rem',color:'yellow'}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, saepe?</p>

          <p style={styles_dev} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, saepe?</p>

      </Bodycontent>

      <Footercontent/>  
           
    </div>
   
   
    </>
  )
}

export default Blog