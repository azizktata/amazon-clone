import React from 'react'
import { useStateValue } from '../../StateProvider'
import "./Product.css"
export default function Product({id, title, img, price, rating}) {
  const [ dispatch] = useStateValue();
  
  const addToBasket = () =>{
      dispatch({type:"Add_To_Basket",
               item:{
                 id: id,
                 title: title,
                 img: img,
                 price: price,
                 rating: rating
                }
              }
              )
  }
  return (
      <div className='product'>
        <div className='product-container'>
            <p>{title}</p>
            <p className='price'><small>$</small><strong>{price}</strong></p>
            <div className='rating'>
                {Array(rating).fill().map((_, i)=>(
                    <span key={i}>⭐</span>
                ))}
            </div>
            
            <img className='product-img' src={img} alt="img" />
            <button onClick={addToBasket}>add to basket</button> 
        </div>
    </div>
  )
}
