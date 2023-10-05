import React from 'react'

const Skill = (props) => {
  return (
    <div>
      <div className="bars">
        <div className="info">
            <span>{props.language}</span>
            <span>{props.percent}</span>
        </div>
        <div className="line html"></div>
      </div>
    </div>
  )
}

export default Skill
