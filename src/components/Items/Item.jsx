import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'
const Item = (props) => { 
return (
    <div className='item'>
       <Link to={'/'+props.id}><img onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
        <p>{props.name}</p>
         <div className='price'>
            <div className='new-price'>
                ${props.new_price}
            </div>
            <div className='old-price'>
                ${props.old_price}
            </div>
         </div>
    </div>
    )
}
    export default Item