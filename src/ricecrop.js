import riceCrop2 from './images/rice crop 2.jpg'
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import React from 'react'


function Ricecrop() {
  return (
    <div>
          <header> 
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
       
      <Link to={"./"} className="navbar-brand"><img src ={logo}   style={{width: '35px', height: '35px'}}  alt="applogo" className="align-top rounded-circle me-2"/>GreenPlanet</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
        <span className="navbar-toggler-icon"></span> 
      </button>
      <div className=" collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item fs-5">
            <Link to={"/"} className="nav-link active"><buuton classNameName = 'btn btn-primary'>Home</buuton></Link>
          </li>
          <li className="nav-item fs-5">
            <Link to={"../about"} className="nav-link">About</Link>
          </li>
          <li className="nav-item fs-5">
            <Link to="../contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item fs-5">
            <Link to="../more" className="nav-link">Blog</Link>
          </li>
          <li className=" dropdown nav-item fs-5" >
            <Link to="../Advanced" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Advanced</Link>
            <ul className="dropdown-menu">
              
              <li className="dropdown-item fs-5"><Link to="../plants" className="nav-link">Plants</Link></li>
              <li className="dropdown-item fs-5"><Link to="..problems" className="nav-link">problems</Link></li>
              <li className="dropdown-item fs-5"><Link to="successStory" className="nav-link">Sucess story</Link></li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  </header> 
    <div class="container">
        
    <div class="row">
        <div class="col col-11 m-auto">
            <img src={riceCrop2} class="w-100" alt="rice crop 2"/>
        </div>
    </div>
    <div class="row">
        <div class="col col-8 m-auto mt-5">
            <h2>1. Land Preparation:</h2>
            <p>The process begins with land preparation, which involves clearing the field of any weeds, debris, and previous crop residues. The soil is then plowed, leveled, and flooded with water to create a suitable environment for rice cultivation.</p>
        </div>
    </div>
    <div class="row">
        <div class="col col-8 m-auto mt-5">
            <h2>2. Seed Selection and Pre-germination:</h2>
            <p>Rice can be planted using different methods, including direct seeding and transplanting. In direct seeding, seeds are sown directly into the flooded field. Transplanting involves planting young rice seedlings (known as rice transplants) into the flooded field after they have been grown in a nursery.</p>
        </div>
    </div>
    <div class="row">
        <div class="col col-8 m-auto mt-5">
            <h2>3.Planting:</h2>
            <p>The process begins with land preparation, which involves clearing the field of any weeds, debris, and previous crop residues. The soil is then plowed, leveled, and flooded with water to create a suitable environment for rice cultivation.</p>
        </div>
    </div>
    <div class="row">
        <div class="col col-8 m-auto mt-5">
            <h2>4.Water Management: </h2>
            <p>Rice requires a significant amount of water for optimal growth. Throughout the growing season, water levels in the field are carefully managed to ensure that the rice plants receive adequate irrigation. Flooding the fields helps control weeds and pests while also providing the necessary water for rice growth.</p>
        </div>
    </div>
    <div class="row">
        <div class="col col-8 m-auto mt-5">
            <h2>5.Fertilization: </h2>
            <p>Fertilizers containing essential nutrients such as nitrogen, phosphorus, and potassium are applied to the soil to promote healthy rice plant growth and maximize yields.</p>
        </div>
    </div>
    <div class="row">
        <div class="col col-8 m-auto mt-5">
            <h2>6.Weed and Pest Control: </h2>
            <p>Weeds and pests can significantly impact rice yields if left uncontrolled. Various methods are used to manage weeds, including manual weeding, herbicide application, and the use of mechanical weeders. Pests such as insects, rodents, and diseases are also managed through the application of pesticides and other control measures.</p>
        </div>
    </div>
    <div class="row">
        <div class="col col-8 m-auto mt-5">
            <h2>7.Harvesting: </h2>
            <p>Rice is typically harvested when the grains have reached full maturity. The harvesting method depends on the variety of rice and local agricultural practices. In mechanized harvesting, machines called combine harvesters are used to cut and collect the rice crop. In traditional methods, rice is harvested manually using sickles or other hand tools.</p>
        </div>
    </div>
    <div class="row">
        <div class="col col-8 m-auto mt-5">
            <h2>8.Post-harvest Processing: </h2>
            <p>After harvesting, the rice grains undergo post-harvest processing, which includes threshing, drying, milling, and storage. Threshing removes the grains from the stalks, drying reduces the moisture content of the grains to prevent spoilage, milling removes the husk and bran layers to produce polished white rice, and storage preserves the rice for future consumption.</p>
        </div>
    </div>
    <div class="row">
        <div class="col col-8 m-auto mt-5">
           <p> <b>Note:</b>Rice cultivation practices can vary depending on factors such as climate, soil type, water availability, and cultural practices. Sustainable rice cultivation methods, such as System of Rice Intensification (SRI) and Integrated Pest Management (IPM), aim to improve yields while minimizing environmental impact and resource use.</p>
        </div>  
    </div>      
</div>
</div>
  )
}

export default Ricecrop;