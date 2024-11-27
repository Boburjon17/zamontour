import React, { useRef } from 'react'
import  './app.scss'
import Home from '../pages/home'
import About from '../pages/about'
import Tour from '../pages/tour'
import Contact from '../pages/contact'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import { BrowserRouter} from 'react-router-dom'


const App = () => {

  const homeRef= useRef(null)
  const aboutRef= useRef(null)
  const tourRef= useRef(null)
  const contactRef= useRef(null)
  return (
   <BrowserRouter>
    <Navbar
     homeRef={homeRef} 
     aboutRef={aboutRef} 
     tourRef={tourRef} 
     contactRef={contactRef} 
    
    />
    
       <Home/>
       <About/>
       <Tour/>
       <Contact/>
    <Footer/>
    </BrowserRouter>
 
  )
}

export default App