import React from 'react'
import { Link } from 'react-router-dom';
import './../css/main.css';

const RegisterButton = () => {

  
  return (
    <section className='flex-container'>
        <Link to='/'>
            Sing up 
        </Link>
    </section>
  )
}

export default RegisterButton