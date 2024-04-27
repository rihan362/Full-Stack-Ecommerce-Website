import React from 'react'
import './CSS/Loginsignup.css'


const LoginSignup = () => {
  return (


    <div className="loginsignup">
       <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Your pass" />


        </div>
        <button>continue</button>
        <p className="loginsignup-login">Already Have an Account ? Login HERE</p>
        <div className="loginsignup-agree">
             <input type ="checkbox" name="" id="" />
             <p>By Continuing , i agree to terms of use & private policy</p>
        </div>
       </div>
      
      </div>

  )
}

export default LoginSignup;
