import React from 'react'
import "./form.css"
import { Link } from 'react-router-dom'
function Sign() {
  return (
    <div className='container'>
      <div className='color'></div>
       <form method='POST'>
         <h1>User Login Form</h1>
           
           <label>User Name:</label> <br/>
            <input type=' text' /> <br/>

            <label>Password:</label> <br/>
            <input type='password' /> <br/>
            <button>Login</button> <br/> 
             <Link to="/signUp"> Don't have an account Register Here</Link>
       </form>
    </div>
  )
}

export default Sign
