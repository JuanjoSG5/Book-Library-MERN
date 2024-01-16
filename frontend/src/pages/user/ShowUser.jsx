import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/buttons/BackButton.jsx';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import BookList from '../../components/book/BookList.jsx';
import "../../css/main.css";
import LogoutButton from '../../components/buttons/LogoutButton.jsx';
import Navbar from '../../components/Navbar';

const ShowUser = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/users/${id}`)
            .then((response) => {
                setUser(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className=''>
            <Navbar />
            
            {
                loading ? (
                    <Spinner />
                ) : (
                    <div className="border-margin">
                        <h1 className='title'>User Details</h1>
                        <section className='border-margin user-details-flex'>
                                <span className=' user-details-cell'>Username</span>
                                <span className='show-user-margin user-info-cell'>{user.username}</span>
                                <span className='user-details-cell'>Email</span>
                                <span className='show-user-margin user-info-cell'>{user.email}</span>
                                <LogoutButton/>
                        </section>
                        <section>
                            <h2 className='title books-marked-title'>Bookmarks</h2>
                            <BookList useLocalStorage={true} />
                        </section>
                    </div>
                )
            }
        </div>
    );
}

export default ShowUser;
