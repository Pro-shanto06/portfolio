import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Qualification from './components/qualifications/Quakifications'
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton';


const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About/>
    <Qualification/>
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    <ScrollUpButton />
    </>
  )
}

export default App