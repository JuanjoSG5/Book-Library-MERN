import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./../../css/main.css";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
  const newErrors = {};

  if (!username.trim()) {
    newErrors.username = 'Username is required';
    usernameRef.current.focus();
  }

  if (!password.trim()) {
    newErrors.password = 'Password is required';
    passwordRef.current.focus();
  }

  if (Object.keys(newErrors).length === 0) {
    setLoading(true);
    axios
      .post('http://localhost:5555/users/login', { username, password })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem('currentUser', JSON.stringify(response.data.user));
          navigate('/home');
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.error('Login error:', error);

        // Handle network errors or unexpected issues
        alert('An unexpected error occurred. Please try again later.');

        // Alternatively, you can redirect to an error page or display a specific error message.
      })
      .finally(() => {
        setLoading(false);
      });

    setUsername('');
    setPassword('');
    setErrors({ username: '', password: '' });
  } else {
    setErrors(newErrors);
  }
};

  return (
    <div className="container-login">
      <h2>Login Page</h2>
      <form>
        <div>
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
        </div>

        <div>
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
        </div>

        <button className="button-login" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
