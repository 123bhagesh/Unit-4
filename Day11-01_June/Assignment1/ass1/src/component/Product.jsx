import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    // console.log(id)
    
    useEffect(() =>{
        if(id){
            fetch(`http://localhost:8020/products/${id}`)
            .then((r) => r.json())
            .then((d) => setProduct(d))
        };
    }, [id]);
  return (
    <div>Product ID: {id}
    <div>{product.name}</div>
    </div>
  )
} 

export  {Product};