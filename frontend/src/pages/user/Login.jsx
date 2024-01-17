import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./../../css/main.css";
import Navbar from "./../../components/Navbar"




const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const url = process.env.VITE_DATABASE_URL;

  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    console.log('Entering handleLogin function');
    console.log('Username:', username.trim());
    console.log('Password:', password.trim());
    const newErrors = {};
  
    if (username.trim() === '') {
      newErrors.username = 'Username is required';
      usernameRef.current.focus();
    }
  
    if (password.trim() === '') {
      newErrors.password = 'Password is required';
      passwordRef.current.focus();
    }
  
    console.log('New Errors:', newErrors);
  
    if (Object.keys(newErrors).length === 0 && username.trim() !== null) {
      console.log('Making API call');
      setLoading(true);
      axios
        .post(`${url}/login`, { username, password })
        .then((response) => {
          console.log('API Response:', response.data);
          if (response.data && response.data.success) {
            localStorage.setItem('currentUser', JSON.stringify(response.data.user));
            navigate('/home');
          } else {
            alert(response.data ? response.data.message : 'Unexpected response format');
          }
        })
        .catch((error) => {
          console.error('Login error:', error);
          alert('An unexpected error occurred. Please try again later.');
        })
        .finally(() => {
          setLoading(false);
        });
  
      setUsername('');
      setPassword('');
      setErrors({ username: '', password: '' });
    } else {
      console.log('Errors detected, not making API call');
      setErrors(newErrors);
    }
  };
  

  return (
    <>
      <Navbar />
      <section className="container-login">
        <h2>Login Page</h2>
        <form>
          <label className="label-login" htmlFor="username">
            Username:
          </label>
          <input
            className="input-login"
            type="text"
            id="username"
            ref={usernameRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="error-login">{errors.username}</p>}

          <label className="label-login" htmlFor="password">
            Password:
          </label>
          <input
            className="input-login"
            type="password"
            id="password"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-login">{errors.password}</p>}

          <button className="button-login" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
