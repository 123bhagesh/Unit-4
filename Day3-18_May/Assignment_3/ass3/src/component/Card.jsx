import React from 'react'
import "./Card.css"

export const Card = (props) => {
  return (
    <div className={`Row jc-center ${props.bgcolor}`}>
      
        <div className='topDiv'>
            <p>{props.date}</p>
            <div><img src={props.logo} alt="logo" /></div>
        </div >
        <div className='midDiv'>
            <button>{props.title}</button>
            <p>{props.compTitle}</p>
            <p>{props.pay}</p>
        </div>
        <div className='botDiv'>
            <p>{props.mode}</p>
            <i class="fa-solid fa-arrow-right fa-2x"></i>
        </div>
    </div>
  )
}
