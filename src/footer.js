import React from 'react'
import logo from './images/logo.png'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
    
          <div className="container-fluid footer justify-content-around mt-5">
        <div className="row justify-content-around">
            <div className="col-12 col-lg-4 mt-5 text-center  mb-lg-5 footerlogo">
                <a href='/'><h3><img src={logo} alt="logo" style={{width: '70px',height: '70px'}} className="rounded-circle"/> Green Planet</h3></a>
            </div>
       
            <div className="col-6 col-lg-4 mt-3">
                <h3 >For more Deatails</h3>
                <br/>
                <a href="/"><FontAwesomeIcon icon={faPhone} className='me-2'/> +918525027112</a>
                <br/>
                <a href="/"><FontAwesomeIcon icon={faEnvelope} className='me-2' /> nithiskumar73y@gmail.com</a>
            </div>
            <div className="col-5 col-lg-4  mt-3">
                <h3>Resources</h3> 
                <br/>
                <a href="/" >Blogs </a>
                <a href="/">Contact</a> 
               
            </div>
        </div>
       
    </div>

    
  )
}

export default Footer