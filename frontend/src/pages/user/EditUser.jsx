import React, { useState,useEffect } from 'react'
import BackButton from '../../components/buttons/BackButton.jsx'
import Spinner from '../../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const EditUser = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
	const [admin, setAdmin] = useState('')
    const [loading, setLoading] = useState(false)
	const url = process.env.VITE_DATABASE_URL;

    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() =>{
      setLoading(true)
      axios.get(`${url}/${id}`)
      .then((response) =>{
        setUsername(response.data.username)
        setEmail(response.data.email)
        setPassword(response.data.password)
		setAdmin(response.data.admin)
        setLoading(false)
      })
      .catch((error) =>{
        setLoading(false)
        alert("Error check console")
        console.log(error);
      })
    },[])
    const handleEditUser = () => {
        const data = {
            username,
            email,
            password,
			admin
        };
        setLoading(true)
        axios
            .put(`${url}/${id}`, data)
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
		<h1 className='title'>Edit user</h1>
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
				<label className='user-details-cell'>Admin</label>
				<input
					type='checkbox'
					checked={admin}
					onChange={(e) => setAdmin(e.target.checked)}
				/>
			</div>
			<button className='submit-button' onClick={handleEditUser}>
				Save changes
			</button>
		</section>
	  </div>
    )
}

export default EditUser