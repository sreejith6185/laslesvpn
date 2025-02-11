import React from 'react';
import Topbanner from '../components/Topbanner'
import About from '../components/About'
import Priceplan from '../components/Priceplan'
import NetworkMap from '../components/NetworkMap'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
        <Topbanner/>
        <About/>
        <Priceplan/>
        <NetworkMap/>
        <Testimonials/>
    </>
  )
}

export default Home;