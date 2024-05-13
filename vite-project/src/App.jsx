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
      </Bodycontent>
      <Footercontent/>
      
    </>
  )
}

export default App
