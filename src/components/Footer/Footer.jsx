import React from 'react'
import './Footer.css'
import Mylogo from'../Datas/Mylogo.png'
import instagram_icon from '../Datas/instagram_icon.png'
import pintester_icon from '../Datas/pintester_icon.png'
import whatsapp_icon from '../Datas/whatsapp_icon.png'
const  Footer = () => { 
return (
    <div className='footer'> 
        <div className='footer-logo'>
            <img src={Mylogo} alt='logo'/>
            <p>Showme</p>
        </div>
        <ul className='footer-links'>
             <li>Company</li>
             <li>Products</li>
             <li>Offices</li>
             <li>About</li>
             <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon}/>
            </div> 
            <div className='footer-icons-container'>
                <img src={pintester_icon}/>
            </div> 
            <div className='footer-icons-container'>
                <img src={whatsapp_icon}/>
            </div> 

        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved.</p>

        </div>
    </div>
    )
}
    export default Footer