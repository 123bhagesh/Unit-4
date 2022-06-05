import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const Navbar = () => {
  const navigate = useNavigate()
  const handelOnClick = (id) =>{
      if(id === 1){
        navigate("/products/1")
      }
  }
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <button onClick={() => handelOnClick(1)}>Go To Product 1 </button>
        <button onClick={() => handelOnClick(2)}>Go To Product 2 </button>

    </div>
  )
}

