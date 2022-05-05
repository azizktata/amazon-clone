import React from 'react'
import "./Checkout.css"
import NumberFormat from 'react-number-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
export default function Checkout() {
  const [{basket}, dispatch ] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <h3>Votre panier</h3>
            {/* basket item*/}
            {basket.map((item)=>{
              const {id, title, img, price, rating} = item
              return(
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
                    <button >Delete from basket</button> 
                    </div>
                </div>

              )
            })}
            

        </div>
        <div className='checkout-right'>
            {/*subtotal here */}
            <div className='subtotal'>
                <NumberFormat 
                  renderText={(value)=>(
                    <>
                      <p>subtotal ({basket.length} items): <strong>{value}</strong></p>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  
                />
                <button >Proceed to Checkout</button> 
            </div>
        </div>
    </div>
  )
}
