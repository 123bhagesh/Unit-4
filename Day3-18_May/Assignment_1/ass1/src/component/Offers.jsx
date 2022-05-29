import React from 'react'
// import '../data/offers.json'
export const Offers = (props) => {
  return (
    <section className="offers">
    <div className="Row jc-center">
        {props.offers.map((offer,index) =>(
        <img key={index} className="offer" src={offer}/>
        ))}
        {/* <img className="offer" src="assets/offer1.jpeg" />
        <img className="offer" src="assets/offer2.jpeg" />
        <img className="offer" src="assets/offer3.jpeg" />
        <img className="offer" src="assets/offer4.jpeg" /> */}
    </div>
</section>
  )
}
