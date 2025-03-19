import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Header from './components/Header.jsx'

function App() {


  return (
    <>
      <div className=''>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
