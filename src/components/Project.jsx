import React from 'react'

const Project = (props) => {
  return (
    <div>
      <div className="card">
        <div className="box">
            <img src={props.image} alt="" className="size" />
            <div className="text">{props.text}</div>
            <p>{props.p}</p>
            <a href={props.link} className="download" target='blank'>Download Code</a>
        </div>
      </div>
    </div>
  )
}

export default Project
