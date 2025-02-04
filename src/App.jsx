import React from 'react'
import Header from './components/Header'
import Topbanner from './components/Topbanner'
import About from './components/About'
import Priceplan from './components/Priceplan'
import NetworkMap from './components/NetworkMap'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Topbanner/>
      <About/>
      <Priceplan/>
      <NetworkMap/>
      {/* <Testimonials/> */}
      <Footer/>
    </>
  )
}

export default App