import vmLogo from './assets/img/vm-logo.svg'
import './App.css'
import Footer from './components/footer'

function App() {

  return (
    <>
      <div className='container'>
        <img src={vmLogo} className='main_logo' alt="VM logo" />
      </div>
      <Footer>
      
      </Footer>
    </>
  )
}

export default App
