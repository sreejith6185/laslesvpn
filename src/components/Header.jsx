import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="bg-white sticky-top new-nav shadow-sm">
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container-xl">
                <a className="navbar-brand order-0" href="">
                    <img src={logo} alt="Logo" className="img-fluid"/>
                </a>
                {/* <ul className="navbar-nav ms-auto order-lg-3 flex-row align-items-center button-wrap">
                    <li className="nav-item">
                        <a href="" className="btn reg-btn border-0 px-lg-4 p-2"><span className="d-lg-flex d-none">Register</span><i
                                className="bi bi-person-circle d-lg-none d-block fs-4 white-text"></i></a>
                    </li>
                </ul> */}
                <button className="navbar-toggler border-0 shadow-none px-0 ms-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span className="navbar-toggler-icon shadow-none white-text"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div
                        className="d-lg-none d-flex justify-content-end align-items-center position-absolute end-0 top-0 p-2">
                        <button type="button" className="btn border-0 primary-color fs-3" data-bs-dismiss="offcanvas"
                            aria-label="Close"><i className="bi bi-x-lg"></i></button>
                    </div>
                    <ul className="navbar-nav ms-lg-auto fw-500 p-lg-0 p-5">
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutSection">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#featuresSection">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricingSection">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonialsSection">Testimonials</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header