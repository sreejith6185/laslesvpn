import React from 'react'
import aboutbanner from '../assets/banner-img2.png'
import Stat from './Stat'

const About = () => {
  return (
    <section className="py-5" id='featuresSection'>
        <div className="container">
            <Stat/>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={aboutbanner} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-6">
                    <h2>
                        We Provide Many <br/> Features You Can Use
                    </h2>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <ul className="list-wrp list-type1 ps-0">
                        <li>Powerfull online protection.</li>
                        <li>Internet without borders.</li>
                        <li>Supercharged VPN</li>
                        <li>No specific time limits.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About