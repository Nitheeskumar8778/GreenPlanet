import React from 'react'
import form from './images/form.png'
function Form() {
  return (
    
    <div>
    <div className="container p-4 form-container rounded">
        <div className="text-center">
            <h2 className="p-0 m-0">Do You Have a Doubts?</h2>
            <h3 className="p-0 m-0">Let's Clear It</h3>
        </div>
        <div className="row justify-content-between">
           
            <form action="" className="form-harizontal col-12 col-lg-7 text-center mt-4">
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type="text" nmae="name" className="input-text form-control" placeholder="Enter your name"/>
                    </div>
                </div>
                <div className="form-group"> 
                    <div className="col-sm-12">
                        <input type="email" name="email" className="input-text form-control" placeholder="Enter your email"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type="phone" name="phone" className="input-text form-control" placeholder="Enter your phone" value="+91"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <textarea name="questions" className="input-text form-control" placeholder="Type your message" id="" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-success ps-5 pe-5">Submit</button>
            </form>
            <div className="d-none d-lg-block col-5">
                <img src={form} alt="form" className=" w-100 h-100"/>
            </div>
        </div>

    </div>
</div>
  )
}

export default Form;