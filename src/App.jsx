import React from 'react';
import Header from './components/Header'
// import Topbanner from './components/Topbanner'
// import About from './components/About'
// import Priceplan from './components/Priceplan'
// import NetworkMap from './components/NetworkMap'
// import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PricePlan from './pages/PricePlan';
import { Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    // <Router>
    <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/AboutPage' element={<AboutPage/>}/>
            <Route path='/PricePlan' element={<PricePlan/>}/>
        </Routes>
        <Footer/>
      </>
    // </Router>
  )
}

export default App;