import React from 'react'
import './Offers.css'
import exclusive_image from'../Datas/exclusive_image.png'
const offers = () => { 
return (
    <div className='offers'> 
    <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>offers For You</h1>
        <p>Only On Best Sellers Products </p>
        <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image}/>
        </div>
    </div>
    )
}
    export default offers