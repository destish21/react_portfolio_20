import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    return (
        
        //     {/* <Link to='/'>
        //         Home
        // </Link>
        //     <Link to='/about'>
        //         About
        // </Link>
        //     <Link to='/contact'>
        //         Contact
        // </Link> */}

        <div id="container">
            <nav className="navbar navbar-expand-lg navbar-light" >
                <h1>Desta Mulualem</h1>
                <button className="navbar-toggler" type="button"   data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                         </li>
                        <li className="nav-item active">
                            <Link className="navbar-brand" to="contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="portfolio">Portfolio <span className="sr-only">(current)</span></Link>
                          </li>
                          
                         <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                         </li>
                    </ul>
             </div>
          </nav> 
                
        </div>


    )
}
export default Navbar
