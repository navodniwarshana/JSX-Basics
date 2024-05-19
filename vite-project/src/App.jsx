import './App.css'
import HeaderContent from './pages/HeaderContent/HeaderContent'
import Bodycontent from './pages/BodyContent/Bodycontent'
import Footercontent from './pages/FooterContent/Footercontent'
import { data } from './data'
import { useEffect, useState } from 'react'


function App() {

  const [activeImg,setActiveImg] = useState(0);
  const handlePrev = () =>{
    //alert("prev img")
    if(activeImg <=0){
      setActiveImg(data.length - 1)
    }else{
      setActiveImg(activeImg -1 )
    }
  }

  useEffect (() =>{

    let timer=setTimeout(() => {
      handleNext();
    },3000);

    return() => {
      clearTimeout(timer);
    }

  },[activeImg])

  const handleNext = () =>{
    //alert("Next img")
    setActiveImg((activeImg +1) % data.length)
  }
  return (
    <>
      <HeaderContent/>
      <Bodycontent>
          
      <div className="carousal">
        <button onClick={handlePrev}>Prev</button>
        {
          data.map((item,i)=>{
            return(
            <img className={activeImg === i ? 'img':"hide" }src={item.url} alt={item.alt} key={item.id}/>
          )})
        }
        <button onClick={handleNext}>Next</button>
      </div>

      </Bodycontent>
      <Footercontent/>
      
    </>
  )
}

export default App
