import React, { useState } from 'react';
import BackButton from '../../components/buttons/BackButton.jsx';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../../components/buttons/LogInButton.jsx';
import "../../css/main.css"

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false); // Default to false for checkbox
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createNewUser = () => {


    const data = {
      username,
      email,
      password,
      admin,
    };

    // Client-side input validation
    if (!username || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);

    axios
      .post('http://localhost:5555/users/', data)
      .then(() => {
        setLoading(false);
        localStorage.removeItem('currentUser');
        localStorage.setItem('currentUser', JSON.stringify(data));
        navigate('/home');
      })
      .catch((error) => {
        setLoading(false);
        alert('Error, check console');
        console.log(error);
      });
  };

  return (
    <div className='user-info'>
      <BackButton />
      <h1 className='title'>Register new user</h1>
      {loading ? <Spinner /> : ''}
      <section className='register-user'>
        <div className='top-bottom-margin'>
          <label className='user-details-cell'>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='user-input'
          />
        </div>
        <div className='top-bottom-margin'>
          <label className='user-details-cell'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='user-input'
          />
        </div>
        <div className='top-bottom-margin'>
          <label className='user-details-cell'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='user-input'
          />
        </div>

        <div className='top-bottom-margin'>
          <label className='user-details-cell'>Admin</label>
          <input
            type='checkbox'
            checked={admin}
            onChange={(e) => setAdmin(e.target.checked)}
          />
        </div>
        <button className='submit-button' onClick={createNewUser}>
          Register
        </button>
      </section>
      <section className='login-register-page'>
        <span className='login-register-text'>Already registered? Log in here</span>
        <span className='login-register-button'><LoginButton /></span>
      </section>

    </div>
  );
};

export default CreateUser;
