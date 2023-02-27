import React from 'react'
// import { Link } from 'react-router-dom';
import logo from './logo192.png';

function Navbar(props) {
  return (
    <div>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img width="30px" src={logo} alt="nothing" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          {/* <Link className="nav-link" to="/">Home</Link> */}
          <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to='/about'>About</Link> */}
            <a className="nav-link" href='/about'>About</a>
          </li>
          <li className="nav-item  dropdown">
            {/* <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link> */}
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Project 1</a></li>
              <li><a className="dropdown-item" href="#">Project 2</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Major Project</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
          <div className="form-check form-switch text-light">
          {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> */}
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode Enable</label>
          </div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
    </div>
  )
}
export default Navbar;
