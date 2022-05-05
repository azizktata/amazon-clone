import React from 'react'
import "./Checkout.css"
import NumberFormat from 'react-number-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import BasketItem from '../Basket_item/Basket_item';
export default function Checkout() {
  const [{basket}, dispatch ] = useStateValue();
  
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <h3>Votre panier</h3>
            {/* basket item*/}
            {basket.map((item)=>{
              
              return(
                <BasketItem 
                id={item.id}
                  key={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    rating={item.rating}
                />
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
