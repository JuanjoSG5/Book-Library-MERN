import React from 'react'
import { Link } from 'react-router-dom';
import "../../css/main.css"

const LogInButton = () => {
  return (
    <Link className="login-button" to='/login'>
      <span >Log in </span>
    </Link>
  )
}

export default LogInButton