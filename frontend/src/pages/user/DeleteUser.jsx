import React,{useState} from 'react'
import BackButton from '../../components/buttons/BackButton.jsx'
import Spinner from '../../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteUser = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const handleDeleteUser = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5555/users/${id}`)
      .then(() =>{
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert("An error happended check console")
        console.log(error);
      })
  }
  return (
    <div className="user-info">
      <BackButton />
      <h1 className='title'>Delete User</h1>
      {
        loading ? <Spinner/> :''
      }
      <div className='register-user'>
        <h3 className='user-operation'> Are you sure you want to delete this user? </h3>
        <button
          className='home-content delete-button'
          onClick={handleDeleteUser}
        >
          Yes, delete this user
        </button>
      </div>
    </div>
  )
}

export default DeleteUser