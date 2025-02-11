import React from 'react';
import logo from '../assets/logo.png';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white sticky-top new-nav shadow-sm">
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container-xl">
                <Link to="/" className="navbar-brand order-0">
                    <img src={logo} alt="Logo" className="img-fluid"/>
                </Link>
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
                            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/AboutPage" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/PricePlan" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Pricing</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header;