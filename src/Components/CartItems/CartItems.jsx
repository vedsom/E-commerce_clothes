import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/remove_icon.png'
export const CartItems = () => {
  const {getTotalCartAmount,all_products, cartItems,removeFromCart}=useContext(ShopContext);
  
    return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_products.map((e)=>{
            if(cartItems[e.id]>0)
            {
                
                return (<div key={e.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} alt='' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>Rs. {e.new_price}</p>
                                
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>Rs. {e.new_price*cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
                            </div>
                            <hr/>
                        </div>)
            }
            console.log(`Product Total for ${e.name}: ${e.new_price*cartItems[e.id]}`);
            return null;
        })}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>Cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>Rs. {getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <p>Rs. {getTotalCartAmount()}</p>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cartitems-promocode'>
                <p>If you have a promo code, Enter it here</p>
                <div className='cartitems-promobox'>
                    <input type='text' placeholder='Promo Code'></input>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
