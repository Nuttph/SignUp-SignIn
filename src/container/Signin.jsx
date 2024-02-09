import React from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'
function Signin() {
  return (
    <div id='signinMain'>
        <div className="containerMain">
            <div className="topOntop">
                Login
            </div>
            <div className="topS">
                <form id='Login'>
                <div className="LogTop">
                        Gmail & User<div className="LogLog"><input className='noneInput' type="email" required/></div>
                        Password<div className="LogLog"><input className='noneInput' type="password" required/></div>
                    </div>
                    <div className="botS">
                    <div className="botLeft">
                        <input className='subLeft' type="submit" value={"Sign In"}/>
                        <Link to="/Login" className='switchLog'>Sign Up</Link>
                    </div>
                    
                 </div>
                </form>
            </div>
            
        </div>
        
    </div>
  )
}

export default Signin