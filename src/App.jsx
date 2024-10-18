import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/skill/Skills'
import Portfolio from './components/projects/Project'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton';
import Qualification from './components/qualification/Qualifications'


const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About/>
    <Experience />
    <Qualification />
    <Portfolio />
    <Contact />
    <Footer />
    <ScrollUpButton />
    </>
  )
}

export default App