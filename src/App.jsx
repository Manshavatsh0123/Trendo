import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Card from './pages/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SingleProduct from './SingleProducts'


const App = () => {

  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/card' element={<Card />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App