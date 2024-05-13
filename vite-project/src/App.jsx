import './App.css'
import HeaderContent from './pages/HeaderContent/HeaderContent'
import Bodycontent from './pages/BodyContent/Bodycontent'
import Footercontent from './pages/FooterContent/Footercontent'


function App() {

  return (
    <>
      <HeaderContent/>
      <Bodycontent/>
      <Bodycontent>
          <button>click me</button>
      </Bodycontent>
      <Footercontent/>
    </>
  )
}

export default App
