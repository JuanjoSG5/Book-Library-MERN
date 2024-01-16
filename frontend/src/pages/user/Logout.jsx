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
    <>
      <BackButton />
      <section className="centered-container">
        <div className="logout-container">
          <h1 className="logout-title">Logout</h1>
          <h3 className="logout-subtitle">Are you sure you want to log out?</h3>
          <button className='logout-button' onClick={handleLogout}>Logout</button>
        </div>
      </section>
    </>
  );
};

export default Logout;
