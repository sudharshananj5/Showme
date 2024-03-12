import React,{ useContext } from 'react'
import {homecontext} from '../components/Context/Homecontext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../components/Descriptionbox/Descriptionbox';
import Relatedproducts from '../components/Relatedproducts/Relatedproduct';

const Product = () => { 
    const {all_product}= useContext(homecontext);
    const {productId} =useParams();
    const  product = all_product.find((e)=> e.id===Number(productId))
return (
    <div> 
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <Descriptionbox/>
        <Relatedproducts/>

    </div>
    )
}
    export default Product 