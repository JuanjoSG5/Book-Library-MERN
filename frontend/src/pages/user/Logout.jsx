// Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/buttons/BackButton.jsx';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    
    <div>
      <BackButton/>
      <h1>Logout Page</h1>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
