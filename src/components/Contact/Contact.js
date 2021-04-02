import React from 'react'
import './contact.css';
const Contact = () => {
  return (

    <div id="form-cont">
      <div className="personal">
        <div id="mydivheader">
          <pC>Contact Information</pC>
        </div>
        <h3>Desta Mulualem</h3>
        <h3>Chicago, IL</h3>
        <pC>Phone: <span>(507)-295-2120</span></pC>
        <pC>Email: <a href="mail to:destish21@yahoo.com">destish21@yahoo.com</a></pC>
      </div>

      <form>
        <div className="form-group">
          <h2>Contact</h2>
          <label for="exampleInputName">Name</label>
          <input type="Name" className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Name" />
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input type="Email" className="form-control" id="exampleInputEmail1" placeholder="Email" />

        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">Message</label>
          <input type="Message" className="form-control" id="exampleInputMassege" placeholder="Message" />
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1"> Phone</label>
          <input type="Message" className="form-control" id="exampleInputMassege" placeholder="Phone" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
export default Contact