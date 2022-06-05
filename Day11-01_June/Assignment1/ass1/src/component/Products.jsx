import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async() =>{
            let r = await fetch("http://localhost:8020/products")
            let d = await r.json()
            // .then((r) => r.json())
            // .then((d) =>{
                setProducts(d)
            // })
        };
        fetchProducts()
    },[])
  return (
    <div>
    Product:{" "}
        <div style={{display:"grid",gridTemplateColumns: "1fr 1fr"}}>
           <div>
            {products.map((p) =>(
                <div key={p.id}>
                    <Link to={`/products/${p.id}`}>{p.name}</Link>
                </div>
            ))}
        </div>
        <Outlet/>
        </div>
    </div>
 
    )
}
