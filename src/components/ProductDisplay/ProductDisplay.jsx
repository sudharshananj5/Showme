import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Datas/star_icon.png'
import star_dull_icon from '../Datas/star_dull_icon.png'
import {homecontext} from '../Context/Homecontext'
import { useContext } from 'react'


const ProductDisplay = (props) => {
    const {product} = props; 
    const {addtocart}=useContext(homecontext);
    console.log(addtocart)
return (
    <div className='productdisplay'> 
    <div className='productdisplay-left'>
        <div className='productdisplay-imglist'>
            <img src={product.image} alt=" "/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
        </div>  
        <div className='productdisplay-img'>
        <img  className="ProductDisplay-main-img" src={product.image}/>
        </div>
    </div>
    <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-rightstar'>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(155)</p>
        </div>
        <div className='productdisplay-rightprice'>
            <div className='productdisplay-rightprice-old'>${product.old_price}</div>
            <div className='productdisplay-rightprice-new'>${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
        A lightweight, usually knitted, pullover shirt, close-fitting and Wrap around neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className='productdisplay-right-size'>
            <h1>Select Size</h1>
            <div className='productdisplay-right-size'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
    </div>
    </div>
    )
}
    export default ProductDisplay