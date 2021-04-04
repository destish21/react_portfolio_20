import React from 'react'
import './contact.css';
const Contact = () => {

  return (

    <div id="form-cont">
      <div className="personal">
        <div id="mydivheader">
          <p className="contact">Contact Information</p>
        </div>
        <h3>Desta Mulualem</h3>
        <h3>Chicago, IL</h3>
        <p className="phone">Phone:<span>(507)-295-2120</span></p>
        <p className="contact">Email:<a href="mail to:destish21@yahoo.com">destish21@yahoo.com</a></p>
      </div>

      <form>
        <div className="form-group">
          <h2>Contact</h2>
          <label htmlFor="exampleInputName">Name</label>
          <input type="Name" className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Name" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input type="Email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Message</label>
          <input type="Message" className="form-control" id="exampleInputMassege" placeholder="Message" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1"> Phone</label>
          <input type="Message" className="form-control" id="exampleInputMassege" placeholder="Phone" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
export default Contact