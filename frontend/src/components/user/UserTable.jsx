import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete, MdOutlineAddBox } from 'react-icons/md'
import './../../css/main.css';

const UserTable = ({ users }) => {

    // TODO there is a bug in the code where after creating a new admin user it doesn't display in the table 
    return (
        <table className='users-table'>
            <thead>
                <tr>
                    <th className='users-table-cell'>Nº</th>
                    <th className='users-table-cell'>Username</th>
                    <th className='users-table-cell'>Email</th>
                    <th className='users-table-cell'>Admin</th>
                    <th className='users-table-cell'>Operations</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => (
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
                                {user.admin ? "Administrator" : "User"}
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

export default UserTable