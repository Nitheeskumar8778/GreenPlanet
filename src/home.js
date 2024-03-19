import React from 'react'
import Navbar from './navbar'
import features from './images/features.jpg'
import workshop from './images/workshop.jpg'
import community from './images/community.jpg'
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Form from './form'
import Footer from './footer'
function Home() {
  return (
    <>
    <Navbar/>
    <div className='home1'> 
      <div className='home1-2'> 
        <div className='home1-2-3 text-center'>
        <h1 className='welcome'>Welcome to Our Website</h1>
        <p className='mt-2 fs-4'>Explore the world of gardening and plant care with us!</p>
        <Link to={'../Plants'} className="btn btn-success mt-2">Get Started</Link>
        </div>
      </div>
    </div>
   
    <div>
      

    </div>
    <section className="features">
        <div className="container">
          <h2 className= 'display-4 mb-4 pt-4 text-center'>Our Features</h2>
        
        {/* {expert advice} */}
        <div className='d-flex justify-content-between flex-column flex-md-row'>

          <div className='pt-5 col-12 col-md-6'>
            <h3 className='text-lg-start text-center'>Expert Advice</h3>
            <p>Get expert tips and advice on gardening and plant care from our team of professionals. Our team of experienced horticulturists provides personalized guidance to help you succeed in your gardening endeavors. From selecting the right plants for your climate to troubleshooting common issues, our experts are here to support you every step of the way. Whether you're a beginner or seasoned gardener, trust our expertise to enhance your gardening journey.</p>
          </div>
          <div className='col-12 col-md-5'  >
          <img src= {features} alt='features' style={{width:'100%' ,height:'100%'}}/> 
          </div>

        </div>
        {/* {worksshop} */}
        <div className='d-flex justify-content-between flex-column-reverse flex-md-row'>

          <div className='col-12 col-md-5'>
              <img src={workshop} alt='workshop' style={{width:'100%' ,height:'100%'}}/>

          </div >
          <div className='col-12 col-md-6'>
            <h3 className='text-lg-start text-center'>Workshops</h3>
            <p>Join our workshops and learn new techniques and skills to improve your gardening.</p>
          </div>

          </div>
          {/* {community} */}
          <div className='d-flex justify-content-between flex-column flex-md-row'>

          <div className='pt-5 col-12 col-md-6'>
            <h3 className='text-lg-start text-center'>Community</h3>
            <p>Connect with other gardening enthusiasts in our community and share your experiences.</p>
          </div>
          <div className='col-12 col-md-5'  >
          <img src={community} alt='workshop' style={{width:'100%' ,height:'100%'}}/> 
          </div>

          </div>


        </div> 
 

      </section>
      <section>
      <Form/>
      </section>
      <Footer/>
       <a href="#" class="btn btn-danger upper" target="_top"><FontAwesomeIcon icon={faArrowUp} /></a>
    </>
  )
}

export default Home
 
