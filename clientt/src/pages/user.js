import React, { useState } from 'react'
import "./form.css"
import { Link } from 'react-router-dom'
function Sign() {

  const [user_name , setUser_name] = useState('')
  const [password , setPassword] = useState('')

  // state for error and success messages

  const [success , setSuccess] = useState('')
  const [failure , setFailure] = useState('')

  const Login = async e => {
    e.preventDefault()
    try {
      const  body= {user_name , password }
      const loggedIn = await fetch(`http://localhost:4000/login`, {
        method: 'POST',
        headers : { 'Content-Type': 'application/json'},
        body:JSON.stringify(body)
      })

      const data = await loggedIn.json();


      if (loggedIn.ok) {

        setSuccess("Login successful")
        setFailure("")
        setTimeout(() => {
          window.location = "/todo"
        }, 1000)
      
      } else {

        setFailure("failed to login" ,data.error )
        setSuccess("")
    
      }
      
    } catch (err) {
      console.error(err.massage)
    }
  }

  return (
    <div className='containerr'>
      <div className='color'></div>
       <form onSubmit={Login}>
         <h1>User Login Form</h1>
          {success && (
            <h4 className='message'> {success}</h4>
          ) }

          {failure && (
            <h4 className='Errmessage'> {failure}</h4>
          )}
        
           <label>User Name:</label> <br/>
            <input type=' text' value={user_name} 
            onChange={(e) => setUser_name(e.target.value)}
            /> <br/>

            <label>Password:</label> <br/>
            <input type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            /> <br/>
            <button type='submit'>Login</button> <br/> 
             <Link to="/signUp"> Don't have an account Register Here</Link>
       </form>
    </div>
  )
}

export default Sign
