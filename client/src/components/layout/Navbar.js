import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a href="index.html" class="navbar-brand">
          Portfolio Backtest
        </a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active mx-2">
              <a href="index.html" class="nav-link">
                Example
              </a>
            </li>
            <li class="nav-item mx-2">
              <a href="about.html" class="nav-link">
                About Me
              </a>
            </li>
            <li class="nav-item mx-2">
              <a href="services.html" class="nav-link">
                Tools
              </a>
            </li>
            <li class="nav-item mx-2">
              <a href="services.html" class="nav-link">
                FAQ
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="nav-link btn btn-warning btn-sm text-white mx-2"
              >
                Sign Up
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link btn btn-primary btn-sm text-white">
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
