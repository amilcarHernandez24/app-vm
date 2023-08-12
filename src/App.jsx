import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Layout from './components/layout'
import Vm from './components/vm';
import Preview from './components/preview';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/vm' element={<Vm />} />
          <Route path='*' element={<Navigate to='/'></Navigate>} />
          <Route path='/preview' element={<Preview />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
