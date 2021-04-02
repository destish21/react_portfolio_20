import React from 'react'
import './About.css'
import IMG1 from '../../assets/images/IMG1.jpg'
// import Resume from '../../assets/images/Resume3.pdf'
import { Link } from 'react-router-dom'
const About = () =>{
    return(
    <div className="Me">
      <div className="row-md-4">
      <div className="col-md-12">
        <h2> About</h2>
      </div>
     </div>

    <div className="row-md-4">
      <div className="col-md-6">
        <img src={IMG1} width="300px" alt="Desta" />
      </div>

      <div className="col-md-6">
        <p> My name is Desta Mulualem. I am a Full Stack Developer from North Western University Coding Bootcamp. I
          am comfortable with both front and back end programming.
          ensuring the responsiveness of an applications. I have built substantial knowledge in identifying programing
          errors and troubleshooting them accordingly. I have a solid knowledge on HTML5/CSS, Bootstrap, Git,
          JavaScript, Express, Node.js,
          jQuery, APIs, AJAX, ESS, ESS6 MySQL MongoDB.
        </p>
      </div>
    </div>

    <div className="row-md-4">
      <div className="col-md-12">
        <p>Dej.Balicha Aba Nefso Senior Secondary School, Ethiopia
          I Taught mathematics and physics to senior secondary school students.
          I worked hard to increase students’ knowledge; thus, they could work on mathematics their potential.
          Helped building the next generation of Ethiopian innovators by implementing up-to-date interactive
          Mathematics.
          I Worked as a homeroom teacher for two years.
          In Kolfe Keranio in worda -7/Addis ababa I worked as administrator.
          I worked hard people to get good governance, Democracy and Justice.
          In kolfe keranio /Addis ababa,
          I worked as Quality of Education and assurance officer.
          In Kolfe Keranio in worda -7/Addis ababa I worked as administrator
          Worthington,MN swift pork company(JBS),
          I Worked in cool side where I worked fair, friendly and honestly with a strong work ethic.
          When I left I got appreciated by the supervisor as the most active employee to work respectful to my
          colleagues and my job.

          Professional Driver in chicago,
          I Worked as a professional chauffeur providing customers safe and pleasant services.
          Received a lot of great compliments from riders
          thanking me
          for the experience of a safe, on-time ride with friendly
          If need more contact me. <Link to="/contact">here...</Link>
        </p>
        <div className="about-btn-wrap d-flex justify-content-center justify-content-center">
          <a href="https://github.com/destish21" target="_blank" className="btn btn-dark">GitHub</a>
          <a href="./assets/images/Resume3.pdf" target="_blank" className="btn btn-secondary"> Resume</a>
          <a href="https://www.linkedin.com/in/desta-mulualem-6718b1203/" target="_blank"
            className="btn btn-dark">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
    )
}
export default About