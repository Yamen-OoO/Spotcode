import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Navbar() {
  useEffect(() => {
    import('../scripts/script.js')
  }, [])
  return (
    <nav className="navbar bg-transparent navbar-expand-lg z-1 py-0  px-3 px-lg-0 position-fixed  start-0 w-100 " >
      <div className="container maincolor-background-3 py-1 py-lg-0">
        <Link className='text-decoration-none  navbar-brand fw-bold p-3 ps-lg-3 ps-0  fs-5 text-white' to={'/'}>HUDA</Link>
        <button className="navbar-toggler theme-border-1" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="avbar-toggler-icon theme-text-1">|||</span>
        </button>
        <div className="collapse navbar-collapse ms-auto " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#."
                role="button" aria-expanded="false">Theme</a>
              <ul className="dropdown-menu theme-border-1 theme-background-1">
                <li><p className="dropdown-item theme-toggler theme-text-1 mb-0"
                  data-theme="light">Light</p></li>
                <li><p className="dropdown-item theme-toggler theme-text-1 mb-0"
                  data-theme="dark">Dark</p></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className='text-decoration-none nav-link text-white' to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className='text-decoration-none nav-link text-white' to={'/about'}>About</Link>

            </li>
            <li className="nav-item">
              <Link className='text-decoration-none nav-link text-white' to={'/portfolio'}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className='text-decoration-none nav-link text-white' to={'/news'}>News</Link>
            </li>
            <li className="nav-item">
              <Link className='text-decoration-none nav-link text-white' to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Navbar