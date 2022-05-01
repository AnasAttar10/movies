import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand text-white fs-2 py-1" href="#">Attar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link to={'home'} className="nav-link text-white">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'About'} className="nav-link text-white">about</Link>
        </li>
        <li className="nav-item">
          <Link to={'portfolio'} className="nav-link text-white">portfolio</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'Register'} className="nav-link text-white">Register</Link>
        </li>
        <li className="nav-item">
          <Link to={'Login'} className="nav-link text-white">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
