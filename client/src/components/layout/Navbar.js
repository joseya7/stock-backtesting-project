import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <a href="index.html" className="navbar-brand">
          Portfolio Backtest
        </a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active mx-2">
              <a href="index.html" className="nav-link">
                Example
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="about.html" className="nav-link">
                About Me
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="services.html" className="nav-link">
                Tools
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="services.html" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#!"
                className="nav-link btn btn-warning btn-sm text-white mx-2"
              >
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#!"
                className="nav-link btn btn-primary btn-sm text-white"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
