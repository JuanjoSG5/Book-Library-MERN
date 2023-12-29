import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle }from 'react-icons/bs';
import { MdOutlineDelete, MdOutlineAddBox } from 'react-icons/md'
import '../css/main.css';

const Home = () => {
    const [users,setUsers] = useState([])
    const [loading,setLoading ] = useState(false)
    useEffect(() => {
        setLoading(true);
        axios
        //This is an example you have to chaneg it to the actual book you want to display 
            .get('http://localhost:5555/users')
            .then((response) =>{
                setUsers(response.data.data);
                setLoading(false);
            })
            .catch((error) =>{
                console.log(error.message);
                setLoading(false);
            })
    },[])

  return (
    <div className='home-content'>
        <section className='flex-container'>
            <h1 className='title'>User list</h1>
            {
                // I am changing this to a list of users that should
                // be shown only when logged so change this in the future 
            }
            <Link to='/login'>
                <MdOutlineAddBox className='create-user-icon'/> 
            </Link>
        </section>
        {
            loading ? (
                <Spinner/>
            ) : (
                <table className='users-table'>
                    <thead>
                        <tr>
                            <th className='users-table-cell'>Nº</th>
                            <th className='users-table-cell'>Username</th>
                            <th className='users-table-cell'>Email</th>
                            <th className='users-table-cell'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=> (
                                <tr key={user._id}>
                                    <td className='users-table-cell'>
                                        {index + 1}
                                    </td>
                                    <td className='users-table-cell'>
                                        {user.username}
                                    </td>
                                    <td className='users-table-cell'>
                                        {user.email}
                                    </td>
                                    <td className='users-table-cell'>
                                        <div className='user-operations'>
                                            <Link to={`/user/details/${user._id}`}>
                                                <BsInfoCircle className='user-operation user-operation-details'></BsInfoCircle>
                                            </Link>
                                            <Link to={`/user/edit/${user._id}`}>
                                                <AiOutlineEdit className='user-operation user-operation-edit'></AiOutlineEdit>
                                            </Link>
                                            <Link to={`/user/delete/${user._id}`}>
                                                <MdOutlineDelete className='user-operation user-operation-delete'></MdOutlineDelete>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            )
        }
    </div>
  )
}

export default Home