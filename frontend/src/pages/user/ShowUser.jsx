import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import BookList from '../../components/BookList'

const ShowUser = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
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
    }, [])
    return (
        <div className='user-info'>
            <BackButton />
            <h1 className='title'>User Details</h1>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <>
                        <section className='user-details-flex'>

                            <div className='top-bottom-margin'>
                                <span className='user-details-cell'>Username</span>
                                <span>{user.username}</span>
                            </div>
                            <div className='top-bottom-margin'>
                                <span className='user-details-cell'>Email</span>
                                <span>{user.email}</span>
                            </div>

                        </section>
                        <section>
                            <h2 className='title books-marked-title'>Bookmarks</h2>
                            <BookList useLocalStorage={true}  />
                        </section>
                    </>
                )
            }
        </div>
    )
}

export default ShowUser