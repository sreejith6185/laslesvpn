import React from 'react'
import bannerimg1 from '../assets/banner-img1.png'

const Topbanner = () => {
  return (
    <section className="top-banner py-5" id='aboutSection'>
        <div className="container-xl">
            <div className="row g-xl-5 align-items-center">
                <div className="col-md-6">
                    <h1 className="primary-text mb-4">
                        Want anything to be easy with <strong>LaslesVPN.</strong>
                    </h1>
                    <p className="mb-4">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                    <button type="button" className="btn btn-type1 px-5 shadow">Get Started</button>
                </div>
                <div className="col-md-6 d-md-block d-none">
                    <div className="img-wrp">
                        <img src={bannerimg1} className="img-fluid" alt="Banner image"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Topbanner