import React from 'react'
import './Hero.css'
import hand_icon from '../Datas/hand_icon.png'
import arrow_icon from '../Datas/arrow_icon.png'
import hero_image2 from '../Datas/hero_image2.png'



const hero = () => { 
return (
    <div className='hero'> 
    <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hand-icon'>
            <img src={hand_icon} alt="icon"/>
            <p>New</p>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon}/>

        </div>
    </div>
    <div className='hero-right'>
        <img src={hero_image2}/>
    </div>

    </div>
    )
}
    export default hero