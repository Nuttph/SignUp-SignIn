import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div id='signinMain'>
        <div className="containerMain">
            <div className="topOntop">
                Register
            </div>
            <div className="topS">
                <form id='Login'>
                    <div className="LogTop">
                        Gmail & User<div className="LogLog"><input className='noneInput' type="email" required/></div>
                        Password<div className="LogLog"><input className='noneInput' type="password" required/></div>
                        Confirm password<div className="LogLog"><input className='noneInput' type="password" required/></div>
                    </div>
                    <div className="botS">
                    <div className="botLeft">
                        <input className='subLeft' type="submit" value={"Sign Up"}/>
                        <Link to="/" className='switchLog'>
            Sign In
        </Link>
                    </div>
                    
                 </div>
                </form>
            </div>
            
        </div>
        
    </div>

  )
}

export default Login