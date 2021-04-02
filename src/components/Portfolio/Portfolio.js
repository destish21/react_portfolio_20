import React from 'react'
import Screenshot from '../../assets/images/Screenshot.png'
import triviagame from '../../assets/images/triviagame.png'
import Screenshot1 from '../../assets/images/Screenshot1.png'
import notetaker from '../../assets/images/notetaker.png'
import ScreenshotJ from '../../assets/images/Screenshot.jpn.png'
import teamhtml1 from '../../assets/images/teamhtml1.png'
import weather from '../../assets/images/weather.png'
import MyBurgerApp from '../../assets/images/MyBurger App.png'
import './Portfolio.css'
const Portfolio = () => {
  return (
    <div className="my-port">
      <h2> Portfolio </h2>
      <div className="row md-4 bg-light-dark">
        <div className="col-md-6">
          <img src={ Screenshot } width="350px" className="rounded float-left" alt="LyricLysteners" />

          <div className="wea">
            <a href="https://github.com/Pete-Scale/lyric-finder" target="_blank" className="btn btn-dark"><i
              className="fa fa-github"></i>LyricLysteners</a>
            <a href="https://pete-scale.github.io/lyric-finder/index.html" className="btn btn-success">URL</a>
          </div>
        </div>

        <div className="col-md-6">
          <img src={triviagame} width="350px" className="rounded float-left" alt="jeopardy_trivia_game" />
          <div className="wea">
            <a href="https://github.com/Geoff7709/jeopardy_trivia_game" target="_blank" className="btn btn-dark"><i
              className="fa fa-github"></i>jeopardy_trivia_game</a>
            <a href="https://shielded-fjord-19309.herokuapp.com/" className="btn btn-success">URL</a>
          </div>
        </div>

        <div className="col-md-6">
          <img src={Screenshot1} width="350px" className="rounded float-left" alt="Password Generator" />
          <div className="wea">
            <a href="https://github.com/destish21/password_generator" target="_blank" className="btn btn-dark"><i
              className="fa fa-github"></i>Password Generator</a>
            <a href="https://destish21.github.io/password_generator/" className="btn btn-success">URL</a>
          </div>
        </div>

        <div className="col-md-6">
          <img src={notetaker} width="350px" className="rounded float-left" alt="Note Taker App" />
          <div className="wea">
            <a href="https://github.com/destish21/note_taker" className="fa fa-github btn btn-primary">Github</a>
            <a href="https://notetakerd.herokuapp.com/" className="btn btn-success">URL</a>
        </div>
       </div>
          </div>

          <div className="row md-4 bg-light-dark">
            <div className="col-md-6">
              <img src={ScreenshotJ} width="350px" className="rounded float-left" alt="CODING-QUIZ" />
              <div className="wea">
                <a href="https://github.com/destish21/api04-codequiz" target="_blank" className="btn btn-dark"><i
                  className="fa fa-github"></i>CODING-QUIZ</a>
                <a href=" https://destish21.github.io/api04-codequiz/" className="btn btn-success">URL</a>
              </div>
            </div>

            <div className="col-md-6">
              <img src={ teamhtml1 } width="350px" className="rounded float-left"
                alt="Employee-Team-Profile-Generator" />
              <div className="wea">
                <a href="https://github.com/destish21/employee-team-profile-generator"
                  className="fa fa-github btn btn-primary">Github</a>
                <a href="https://destish21.github.io/employee-team-profile-generator/Develop/output/team.html"
                  className="btn btn-success">URL</a>
              </div>
            </div>
          </div>

          <div className="row md-4 bg-light-dark">
            <div className="col-md-6">
              <img src={weather} width="350px" className="rounded float-left" alt="weather_dashbord" />
              <div className="wea">
                <a href="https://github.com/destish21/weather_dashbord" className="fa fa-github btn btn-primary">Github</a>
                <a href="https://destish21.github.io/weather_dashbord/" className="btn btn-success">URL</a>
              </div>
            </div>

            <div className="col-md-6">
              <img src={MyBurgerApp} width="350px" className="rounded float-left" alt="MyBurger App" />
              <div className="wea">
                <a href="https://github.com/destish21/burger" className="fa fa-github btn btn-primary">Github</a>
                <a href="https://myburger12.herokuapp.com/burgers" className="btn btn-success">URL</a>
              </div>
            </div>

          </div>
        </div>
    )
} 

export default Portfolio