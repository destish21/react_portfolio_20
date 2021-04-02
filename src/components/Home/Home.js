import React from 'react'
import './Home.css'
const Home = () => {
  return (

    <>
      <header className="portfolio-header">
        <h1 className="portfolio-header-h1"> Desta Mulualem</h1>

        {/* <ul className="portfolio-header-menu">
      <li><a className="button" href="about">About Me</a></li>
      <li><a className="button" href="portfolio">Portfolio</a></li>
      <li><a className="button" href="contact">Contact</a></li>
      <li><a className="button" href="/">Home</a></li>
    </ul> */}

        <div className="about-btn-wrap d-flex justify-content-center justify-content-center">
          <a href="https://github.com/destish21" target="_blank" className="btn btn-danger">GitHub</a>
          <a href="./assets/images/Resume3.pdf" target="_blank" className="btn btn-success"> Resume</a>
          <a href="https://www.linkedin.com/in/desta-mulualem-6718b1203/" target="_blank"
            className="btn btn-danger">LinkedIn</a>
        </div>
      </header>
    </>
  )
}

export default Home