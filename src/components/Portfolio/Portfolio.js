import React from 'react'
import data from './data'
import './Portfolio.css'
const Portfolio = () => {
  // console.log(data)
  return (
    <div className="my-port">
      <h2> Portfolio </h2>
      <div className="row md-4 bg-light-dark">
        {data.map(item => (
          <div key={item.id} className="col-md-6">
            <img src={item.image} width="350px" className="rounded float-left" alt={item.title} />

            <div className="wea">
              <a href={item.github} className="btn btn-dark"><i
                className="fa fa-github"></i>{item.title}</a>
              <a href={item.url} className="btn btn-success">URL</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio