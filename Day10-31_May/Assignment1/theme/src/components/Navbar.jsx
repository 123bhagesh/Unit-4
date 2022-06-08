import React from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export const Navbar = () => {

const {isLight, toggleTheme} = useContext(ThemeContext)


  return (
    <div style={{display:"flex",justifyContent:"space-around",fontSize:"25px", marginTop:"10px", border:'1px solid black',padding:'10p'}}>
        <div>Menu</div>
        <div>Addproduct</div>
        <div>Products</div>
        <button onClick={toggleTheme}>{`Make ${ isLight ? "Dark" : "Light"}`}</button>
    </div>
  )
}
