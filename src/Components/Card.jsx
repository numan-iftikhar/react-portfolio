import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="emoji" />
        <h3>{heading}</h3>
        <p>{detail}</p>
        <button className="c-btn">learn more</button>
    </div>
  )
}

export default Card;