// About.js
import logo from './images/logo.png'
import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Form from './form';

function About() {
  return (
    <div>
           <header> 
    <nav className="navbar navbar-expand-lg">
      <div className="container text-info">
       
      <Link to={"./"} className="navbar-brand"><img src ={logo}   style={{width: '35px', height: '35px'}}  alt="applogo" className="align-top rounded-circle me-2"/>GreenPlanet</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
        <span className="navbar-toggler-icon"></span> 
      </button>
      <div className=" collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item ">
            <Link to={"/"} className="nav-link "><buuton classNameName = 'btn btn-primary'>Home</buuton></Link>
          </li>
          <li className="nav-item">
            <Link to={"../about"} className="nav-link active">About</Link>
          </li>
          <li className="nav-item">
            <Link to="../contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="../blog" className="nav-link">Blogs</Link>
          </li>
          <li className=" dropdown nav-item">
            <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Advanced</Link>
            <ul className="dropdown-menu bg-success">
              
              <li className="dropdown-item"><Link to="../plants" className="nav-link">Plants</Link></li>
              <li className="dropdown-item"><Link to="" className="nav-link">problems</Link></li>
              <li className="dropdown-item"><Link to="" className="nav-link">Sucess story</Link></li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  </header> 
  <div className='container'>
      <h2>About Us</h2>
      <p>Welcome to our Green Planet website. We provide valuable information and tips for taking care of your plants.</p>
      </div>
      <Form/>
    </div>
  );
}

export default About;
