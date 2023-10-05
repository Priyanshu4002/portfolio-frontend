import React from 'react';
import '../styles/card1.css'

const Education = (props) => {
  return (
    <div>
      <div className="card1">
        <div className="box">
            <img src={props.image} alt="" />
            <div className="text">{props.text}</div>
            <p>{props.p}</p>
            </div>
        </div>
    </div>
  )
}

export default Education
