 import React from 'react';
import riceCrop from './images/rice crop.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import wheat from './images/wheat.jpg'
import tomato from './images/tomato.jpg'
import soyabean from './images/soyabean.jpg'
import potato from './images/potato.jpg'
import maize from './images/maize.jpg'
import Navbar from './navbar';

 function Plants() {
   return (
<div>  
      <Navbar/>
  <div className="container">
    <h1 className="col col-11 text-center m-auto mt-5">Start Your Cultivation Journey With Our Ideas!</h1>
    <h3 className="col col-11 text-center m-auto mt-5 mb-5">Choose which plant you want to grow</h3>
    <div className='row justify-content-around'>
      {/* rice crop */}
    <div className="card col-6" style={{width: '500px'}}>     
                <img className="card-img" src={riceCrop} alt="crop" loading="lazy"/>
        <div className="card-body"> 
            <div className="card-title">
                <h3>Rice <FontAwesomeIcon icon={faPagelines} className='faPagelines'/></h3> 
            </div> 
            <div className="card-text">
                Rice cultivation is the process of growing rice, one of the most important staple crops worldwide. Rice is a primary source of food for more than half of the world's population, particularly in Asia, where it serves as a major dietary staple.
            </div>
        </div>
        <div className="card-footer">
          <div className='row'>
              <Link to={'../ricecrop'} className='btn btn-info col-4'>Start to cultivate</Link>
              <p className=' card-text text-muted col-6 fs-6 text-center pt-2'>last uptated on 14/03/2024.</p>
          </div>
        </div> 
    </div>
    {/* wheat */}
    <div className="card col-6" style={{width: '500px'}}>     
                <img className="card-img" src={wheat} alt="crop" loading="lazy"/>
        <div className="card-body"> 
            <div className="card-title">
                <h3 >Wheat <FontAwesomeIcon icon={faWheatAwn} className='faPagelines'/></h3> 
            </div> 
            <div className="card-text">
            Wheat is one of the most widely cultivated cereal grains globally and serves as a staple food for a significant portion of the world's population.
            </div>
        </div>
        <div className="card-footer">
        <div className='row'>
              <Link to={'../ricecrop'} className='btn btn-info col-4'>Start to cultivate</Link>
              <p className=' card-text text-muted col-6 fs-6 text-center pt-2'>last uptated on 14/03/2024.</p>
          </div>
        </div> 
    </div>
    {/* Tomato */}
    <div className="card col-6" style={{width: '500px'}}>     
                <img className="card-img" src={tomato} alt="crop" loading="lazy"/>
        <div className="card-body"> 
            <div className="card-title"> 
                <h3>Tomato <FontAwesomeIcon icon={faPagelines} className='faPagelines'/> </h3> 
            </div> 
            <div className="card-text">
            Tomatoes are one of the most widely grown and consumed vegetables (although botanically classified as a fruit). They are valued for their versatility, flavor, and nutritional value.
            </div>
        </div>
        <div className="card-footer">
        <div className='row'>
              <Link to={'../ricecrop'} className='btn btn-info col-4'>Start to cultivate</Link>
              <p className=' card-text text-muted col-6 fs-6 text-center pt-2'>last uptated on 14/03/2024.</p>
          </div>
        </div> 
    </div>
    {/* Soyabean */}
    <div className="card col-6" style={{width: '500px'}}>     
                <img className="card-img" src={soyabean} alt="crop" loading="lazy"/>
        <div className="card-body"> 
            <div className="card-title"> 
                <h3>Soyabean <FontAwesomeIcon icon={faPagelines} className='faPagelines'/> </h3> 
            </div> 
            <div className="card-text">
            Soybeans are a versatile legume crop known for their high protein and oil content. They are widely cultivated for food, feed, and industrial purposes. 
            </div>
        </div>
        <div className="card-footer">
        <div className='row'>
              <Link to={'../ricecrop'} className='btn btn-info col-4'>Start to cultivate</Link>
              <p className=' card-text text-muted col-6 fs-6 text-center pt-2'>last uptated on 14/03/2024.</p>
          </div>
        </div> 
    </div>
    {/* Potato */}
    <div className="card col-6" style={{width: '500px'}}>     
                <img className="card-img" src={potato} alt="crop" loading="lazy"/>
        <div className="card-body"> 
            <div className="card-title"> 
                <h3>Potato <FontAwesomeIcon icon={faPagelines} className='faPagelines'/> </h3> 
            </div> 
            <div className="card-text">
            Potatoes are one of the most widely grown and consumed crops globally, valued for their versatility, nutritional value, and storage stability.
            </div>
        </div>
        <div className="card-footer">
        <div className='row'>
              <Link to={'../ricecrop'} className='btn btn-info col-4'>Start to cultivate</Link>
              <p className=' card-text text-muted col-6 fs-6 text-center pt-2'>last uptated on 14/03/2024.</p>
          </div>
        </div> 
    </div>
    {/* Maize */}
    <div className="card col-6" style={{width: '500px'}}>     
                <img className="card-img" src={maize} alt="crop" loading="lazy"/>
        <div className="card-body"> 
            <div className="card-title"> 
                <h3>Maize <FontAwesomeIcon icon={faPagelines} className='faPagelines'/> </h3> 
            </div> 
            <div className="card-text">
            Maize is a versatile cereal grain that is widely cultivated for food, feed, and industrial purposes.
            </div>
        </div>
        <div className="card-footer">
        <div className='row'>
              <Link to={'../ricecrop'} className='btn btn-info col-4'>Start to cultivate</Link>
              <p className=' card-text text-muted col-6 fs-6 text-center pt-2'>last uptated on 14/03/2024.</p>
          </div>
        </div> 
    </div>
    </div>
  </div>

</div>
   );
 }
 
 export default Plants;