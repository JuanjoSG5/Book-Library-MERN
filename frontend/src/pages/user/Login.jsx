import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./../../css/main.css";

const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({ username: '', password: '' });
	const [user, setUser] = useState([])
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()



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
			.get('http://localhost:5555/users')
			.then((response) => {
			  const filteredUsers = response.data.data.filter((user) => user.username === username);
			  setUser(filteredUsers);
			  setLoading(false);
	
			  if (filteredUsers.length > 0 && (filteredUsers[0].password) === password) {
				localStorage.setItem('currentUser', JSON.stringify(filteredUsers[0]));
				navigate('/home');
			  } else {
				alert("The user doesn't exist or the password is incorrect");
			  }
			})
			.catch((error) => {
			  console.log(error.message);
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
					<label className="label-login" htmlFor="username">Username:</label>
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
					<label className="label-login" htmlFor="password">Password:</label>
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