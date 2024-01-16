import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../../css/main.css';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    const { state } = location;
    const previousPathname = state?.from || '/home';
    navigate(previousPathname);
  };

  return (
    <div className='backButton-flex'>
      <button onClick={goBack} className='backButton'>
        <BsArrowLeft className='user-operation'></BsArrowLeft>
      </button>
    </div>
  );
};

export default BackButton;
