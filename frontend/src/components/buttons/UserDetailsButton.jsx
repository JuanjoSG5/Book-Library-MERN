import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner.jsx';


const UserDetailsButton = () => {
    const [user, setUser] = useState(null);  // Change here
    const [loading, setLoading] = useState(false);
    const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
    const url = process.env.VITE_DATABASE_URL;



    useEffect(() => {
        setLoading(true);
        axios
            .get(`${url}`)
            .then((response) => {
                const filteredUsers = response.data.data.filter(user => user.username === currentUserData.username);
                setUser(filteredUsers.length > 0 ? filteredUsers[0] : null);  // Change here
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
            });
    }, [currentUserData.username]);  // Change here

    return (
        loading ? <Spinner/> : (
            user ? (
                <Link className="login-button" to={`/user/details/${user._id}`}>
                    <span>{user.username}</span>
                </Link>
            ) : (
                <span>User not found</span>
            )
        )
    );
}

export default UserDetailsButton;
