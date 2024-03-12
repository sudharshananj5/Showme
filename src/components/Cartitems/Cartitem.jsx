import React from 'react'
import { useContext } from 'react';
import './Cartitem.css'
import { homecontext } from '../Context/Homecontext'
import remove_icon from '../Datas/cart_cross_icon.png'

const Cartitem = () => { 
    const {getTotalAmount,all_product,cartItems,removefromcart}=useContext(homecontext)
return (
    <div className='cartitem'>
        <div className='cartitem-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>  
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
            <div className='cartitem-format cartitem-format-main'>
                <img src={e.image} alt='' className='carticon-product-icon'/>
                <p className='title'>{e.name}</p>
                <p className='cartitem-price'>${e.new_price}</p>
                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>{removefromcart(e.id)}} alt='' />
            </div>  
            <hr/>  
        </div>  
    }
    return null;
        })}
         <div className='cart-promocode'>
            <p>If you have a promo code, Enter it here</p>
            <div className='cartitem-promobox'>
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
                </div>
            </div>
         <div className='cartitem-down'>
            <div className='cartitem-total'>
                <h1>Cart Totals</h1>
            <div>
            <div className='caritem-total-item'>
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
            </div>
            <hr/>
            <div className='caritem-total-item'>
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className='caritem-total-item'>
                <h3>Total</h3>
                <h3>${getTotalAmount()}</h3>
            </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
         </div>
        </div>
        
    </div>

    )
}
    export default Cartitem