import './App.css'
import HeaderContent from './pages/HeaderContent/HeaderContent'
import Bodycontent from './pages/BodyContent/Bodycontent'
import Footercontent from './pages/FooterContent/Footercontent'


function App() {

  return (
    <>
      <HeaderContent/>
      <Bodycontent>
          <h2>Home Page</h2>

          <h2 className='one'>Font Font Type 1</h2>
          <h2 className='two'>Font Font Type 2</h2>
          
      </Bodycontent>
      <Footercontent/>
      
    </>
  )
}

export default App
