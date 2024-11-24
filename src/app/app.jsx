import React from 'react'
import  './app.scss'
import Home from '../pages/home'
import About from '../pages/about'
import Tour from '../pages/tour'
import Contact from '../pages/contact'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element= { <Home/>}/ >
        <Route path= "/about" element= {<About/>}  />
        <Route path= "/tour" element= {<Tour/>}  />
        <Route path= "/contact" element= {<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
 
  )
}

export default App