import React from 'react'
import './CSS/about.css'
import about_image from '../components/Datas/about_image.png'
import all_product from '../components/Datas/all_product'
import Product from './Product'
const about = () => { 
return (
    <div className='about'>
        <div className='about-items'>
        <img src={about_image} alt=""/>
            <h2>Shop With US</h2>
            <p>Here are the elegance to shop with your favourite products.started a website to sell products online.To be successful-so i built my own. Today, businesses of all sizes use Showme and elegance way to shop .</p>
            <button onClick={()=>{all_product(Product)}}>Shop here</button>
        </div> 
    </div>
    )
}
    export default about