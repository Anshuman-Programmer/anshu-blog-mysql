import React from 'react'
import "./styles/_login.scss"

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login