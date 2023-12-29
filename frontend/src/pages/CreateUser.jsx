import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const createNewUser = () => {
        const data = {
            username,
            email,
            password,
        };
        setLoading(true)
        axios
            .post('http://localhost:5555/users', data)
			.then(() => {
				setLoading(false);
				navigate('/')
			})
			.catch(( error ) => {
				setLoading(false);
				alert("Error, check console")
				console.log(error);
			});
    }

    return (
      <div className='user-info'>
		<BackButton />
		<h1 className='title'>Register new user</h1>
		{
			loading ? <Spinner/>: ''
		}
		<section className='register-user'>
			<div className='top-bottom-margin'>
				<label className='user-details-cell'>Username</label>
				<input type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				className='user-input'
				/>
			</div>
			<div className='top-bottom-margin'>
				<label className='user-details-cell'>Email</label>
				<input type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='user-input'
				/>
			</div>
			<div className='top-bottom-margin'>
				<label className='user-details-cell'>Password</label>
				<input type="text"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className='user-input'
				/>
			</div>
			<button className='submit-button' onClick={createNewUser}>
				Register
			</button>
		</section>
	  </div>
    )
}

export default CreateUser