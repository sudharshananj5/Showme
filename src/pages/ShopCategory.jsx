import React,{ useContext } from 'react'
import './CSS/Shopcategory.css'
import {homecontext} from '../components/Context/Homecontext'
import dropdown_icon from '../components/Datas/dropdown_icon.png';
import Items from '../components/Items/Item.jsx'

const ShopCategory = (props) => { 
    const {all_product} = useContext(homecontext);
    console.log(all_product)
return (
    <div className='shop-category'> 
    <img className='shop-banner' src={props.banner} alt="" />
    <div className='shop-category-indexsort'>
        <p>
            <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className='shop-category-sort'>
            sort by <img src={dropdown_icon}/>
        </div>
    </div>
    <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
            if (props.category==item.category){
                return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
                return null;
            }
        })}
    </div>
    <div className='shop-loadmore'>
        Explore More
    </div>
    </div>
    )
}
    export default ShopCategory