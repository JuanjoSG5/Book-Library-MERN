import React from 'react'
import { Link } from 'react-router-dom';


const LogoutButton = () => {
  return (
    
        <Link className="logout-button" to='/logout'>
            <span >Log out </span>
        </Link>
  )
}

export default LogoutButton