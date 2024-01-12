import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../../components/Spinner';
import './../../css/main.css';

import UserTable from '../../components/user/UserTable';
import UserCard from '../../components/user/UserCard';
import RegisterButton from '../../components/RegisterButton';

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [showType, setShowType] = useState('table')
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/users')
            .then((response) => {
                setUsers(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            })
    }, [])

    return (
        <div className='home-content'>
            <section className='user-operations items-center'>
                <button
                    className='card-button'
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className='card-button'
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </section>

            <RegisterButton/>
            {
                loading
                    ? <Spinner />
                    : showType === 'table'
                        ? (<UserTable users={users} />)
                        : (<UserCard users={users} />)
            }
        </div>
    )
}

export default UserList