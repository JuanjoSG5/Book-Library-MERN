import React from 'react';
import Spinner from '../images/loader.svg';
import "../css/main.css";

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src = {Spinner} alt = "loader" />
    </div>
  )
}

export default Loader
