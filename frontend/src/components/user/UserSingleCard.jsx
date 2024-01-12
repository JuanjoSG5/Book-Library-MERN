import React from 'react'
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
// This icon is for roles
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';


const UserSingleCard = ({ user }) => {
    return (
        <section key={user._id} className='grid-cell'>
            <h2 className='grid-cell-title'>{user.username}</h2>
            <h4 className='grid-cell-subtitle'>{user.admin ? ' Admin' : ' User'}</h4>
            <div className='user-card'>
                <MdEmail className='user-operation user-operation-delete' />
                <h2 className='top-bottom-margin'>{user.email}</h2>
            </div>
            <div className='flex-container home-content '>
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
        </section>
    )
}

export default UserSingleCard