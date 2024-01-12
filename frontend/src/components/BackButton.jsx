import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../css/main.css';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    const { state } = location;
    const previousPathname = state?.from || '/home';

    // Check if the currentUser is an admin
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const isAdmin = currentUser.admin === true;

    // Check if the previous pathname contains "/admin" or "/user"
    if (!isAdmin) {
      // Reload the current page
      navigate("/home")
    } else {
      // Navigate to the previous page
      navigate(-1);
    }
  };

  // Check if currentUser exists and isAdmin is true
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  const isAdmin = currentUser.admin === true;
  const showBackButton = isAdmin || (location.state?.from && !isAdmin);

  return (
    <div className='backButton-flex'>
      {showBackButton && (
        <button onClick={goBack} className='backButton'>
          <BsArrowLeft className='user-operation'></BsArrowLeft>
        </button>
      )}
    </div>
  );
};

export default BackButton;
