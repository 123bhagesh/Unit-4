import React from 'react'

export const Resturants = (props) => {
  return (
    <div className="container divider">
    <div className="cards">
         {props.reust.map((reust) => (
            <div key={reust.id} className="card">
            <img width="254" height="160px" src={reust.image} />
            <div className="restaurant-details">
                <div className="restaurant-title">{reust.name}</div>
                <div className="restaurant-subtitle">{reust.category.join(", ")}</div>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i>{reust.rating}
                </div>
                 .<div className="restaurant-delivery-timings"> {reust.deliveryTimings} </div> .
                <div className="restaurant-cost-for-two">₹ {reust.costForTwo} FOR TWO</div>
            </div>
            <div className="offer-banner">
                <span className="material-icons"> local_offer </span>
                <span className="offer-text">{reust.offers.join(", ")}</span>
            </div>
        </div>
        ))}
                      
    </div>
</div>
  )
}
