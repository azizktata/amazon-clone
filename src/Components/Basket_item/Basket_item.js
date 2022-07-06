import React from 'react'
import { useStateValue } from '../../StateProvider';
import "./Basket_item.css"

function Basket_item({id, title, img, price, rating}) {
    const [ basket,dispatch ] = useStateValue();
    function DeleteFromBasket (){
  
        dispatch({
          type:"Remove_From_Basket",
          id:id
        })
        
      }
  return (
    <div className='basket-item' key={id}>
                  <div className='product-img'>
                  <img className='product-img' src={img} alt="img" />
                  </div>
                  <div className='product-info'>
                    <p>{title}</p>
                    <p className='price'><small>$</small><strong>{price}</strong></p>
                    <div className='rating'>
                        {Array(rating).fill().map((_, i)=>(
                            <span>⭐</span>
                        ))}
                    </div>
                    <button onClick={DeleteFromBasket}>Delete from basket</button> 
                    </div>
                </div>
  )
}

export default Basket_item