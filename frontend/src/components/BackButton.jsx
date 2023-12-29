import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import '../css/main.css'

const BackButton = ({ destination= '/' }) => {
  return (
    <div className='backButton-flex'>
        <Link
            to={destination}
            className='backButton-Link'
        >
            <BsArrowLeft className='user-operation'></BsArrowLeft>
        </Link>
    </div>
  )
}

export default BackButton