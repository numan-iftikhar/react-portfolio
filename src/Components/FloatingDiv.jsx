import React from 'react'
import './FloatingDiv.css';

export const FloatingDiv = ({img, txt1, txt2}) => {
  return (
    <div className="floating-div">
        <img src={img} alt="" />
        <div>
        <span>{txt1}</span>
        <br />
        <span>{txt2}</span>
        </div>
    </div>
  )
}

export default FloatingDiv;