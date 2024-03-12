import React from 'react'
import './Navbar.css'
import {useState} from 'react'

import Mylogo from '../Datas/Mylogo.png'
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { homecontext } from '../Context/Homecontext';


const Navbar = () => {

    const[menu,setMenu] = useState();
    const {getTotalCartItems}=useContext(homecontext)

    const data=menu==="home"?<hr/>:<></>
    const data2=menu==="men"?<hr/>:<></>
    const data3=menu==="women"?<hr/>:<></>
    const data4=menu==="kids"?<hr/>:<></>
    const data5= menu==="about"?<hr/>:<></>
return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={Mylogo} alt=""/>
            <p>Showme</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none',textDecorationColor:"none"}}to='/home'>Home</Link>{data}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{data2}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{data3}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{data4}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}} to='/about'>About</Link>{data5}</li>
        </ul>
        <div className='nav-login'>
            <Link style={{textDecoration:'none'}}  to='/login'><button>Login</button></Link>
            <Link style={{textDecoration:'none'}} to='/cart'><p><IoCart /></p></Link>
            <div className='nav-login-count'>{getTotalCartItems()}</div>
        </div>
    </div>
)
}
export default Navbar