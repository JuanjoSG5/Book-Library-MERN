import React from 'react'
import { Link } from 'react-router-dom'

const ContactButton = () => {
  return (
    <Link className="contact-us-button" to='/contact'>
      <span >Contact us </span>
    </Link>
  )
}

export default ContactButton