import './App.css'
import HeaderContent from './pages/HeaderContent/HeaderContent'
import Bodycontent from './pages/BodyContent/Bodycontent'
import Footercontent from './pages/FooterContent/Footercontent'
import Comp1 from './Componants/Comp1'


function App() {

  return (
    <>
      <HeaderContent/>
      <Bodycontent>
          <h2>Home Page</h2>
      <Comp1/>
          
          
      </Bodycontent>
      <Footercontent/>
      
    </>
  )
}

export default App
