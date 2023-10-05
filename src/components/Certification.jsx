import React from 'react'

const Certification = (props) => {
  return (
    <div>
      <div className="card">
            <div className="box">
                <a href={props.link} target='blank'><img src={props.image} alt="" /></a>
                <div className="text">{props.text} </div>
                <p>{props.p}</p>
            </div>
       </div>
    </div>
  )
}

export default Certification
