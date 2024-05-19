import './App.css'
import HeaderContent from './pages/HeaderContent/HeaderContent'
import Bodycontent from './pages/BodyContent/Bodycontent'
import Footercontent from './pages/FooterContent/Footercontent'
import { data } from './data'
import { useEffect, useState } from 'react'
import { FaAlignJustify } from "react-icons/fa";
import { FaAddressBook , FaBaby} from "react-icons/fa";


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
      <div className='flex'>
        <span className='p-2 m-2'>
        <FaAlignJustify className='icon' />
        </span>
        <span className='p-2 m-2'>
        <FaAddressBook  className='icon' />
        </span>
        <span className='p-1 m-1'>
        <FaBaby  className='w-20 h-20' />
        </span>
      </div>

      <h1 className='text-green-300 bg-orange-400'>hello tailwind</h1>

      </Bodycontent>
      <Footercontent/>
    
      
    </>
  )
}

export default App
