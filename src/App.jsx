import vmLogo from './assets/img/vm-logo.svg'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <img src={vmLogo} className='main_logo' alt="VM logo" />
      </main>
    </>
  )
}

export default App
