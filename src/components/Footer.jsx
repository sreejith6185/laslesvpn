import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="grey-bg border-top">
        <div className="container-xl py-5">
            <div className="row justify-content-between">
                <div className="col-lg-4">
                    <div className="footer-logo mb-3">
                        <img src={logo} className="img-fluid" alt=""/>
                    </div>
                    <p><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</p>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex align-items-center gap-3">
                        <h5 className="primary-text mb-0">Social Links:</h5>
                        <div className="d-flex align-items-center gap-3 fs-4">
                            <a href=""><i className="bi bi-facebook"></i></a>
                            <a href=""><i className="bi bi-twitter"></i></a>
                            <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-xl py-2 border-top">
            <div className="copyright-text text-center small">
                &copy;2025LaslesVPN
            </div>
        </div>
    </footer>
  )
}

export default Footer