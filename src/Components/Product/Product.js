import React from 'react'
import "./Product.css"
export default function Product({id, title, img, price, rating}) {
  return (
      <div className='product'>
        <div className='product-container'>
            <p>{title}</p>
            <p className='price'><small>$</small><strong>{price}</strong></p>
            <div className='rating'>
                {Array(rating).fill().map((_, i)=>(
                    <span>⭐</span>
                ))}
            </div>
            
            <img className='product-img' src={img} alt="img" />
            <button>add to basket</button> 
        </div>
    </div>
  )
}
