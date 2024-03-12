import React from 'react'
import '../pages/CSS/Loginsignup.css'
const  Loginsignup = () => { 
return (
    <div className='loginsignup'>
        <div className='loginsignup-container'>
        <h1>Sign Up</h1> 
        <div className='login-fields'>
            <input type='text' placeholder='Your Name'></input>
            <input type='email' placeholder='email Address'></input>
            <input type='password' placeholder='Your Password'></input>
        </div> 
        <button>Continue</button>  
        <p className='loginsignup-login'>Already Have An Account?<span>Login</span></p>   
        <div className='login-agree'>
        <input type='checkbox' name='' id=''></input>   
        <p>By Continuing, I agree to the terms of use & privacy policy</p> 
        </div> 
        </div> 
    </div>
    )
}
    export default Loginsignup