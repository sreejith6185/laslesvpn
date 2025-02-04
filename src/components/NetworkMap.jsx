import React from 'react'
import mapImg from '../assets/banner-img3.png'

const NetworkMap = () => {
  return (
    <section className=" py-5">
        <div className="container-xl mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2 className="text-center">
                        Huge Global Network <br/> of Fast VPN
                    </h2>
                    <p className="text-center">See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations.
                    </p>
                </div>
            </div>
        </div>
        <div className="position-relative map-section grey-bg">
            <div className="container-xl">
                <img src={mapImg} className="img-fluid d-block mx-auto mb-5" alt="Map image"/>
            </div>
        </div>
    </section>
  )
}

export default NetworkMap