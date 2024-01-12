import React from 'react';
import UserSingleCard from './UserSingleCard';

const UserCard = ({ users }) => {
    return (
        <div className="grid-container">
            {users.map((user) => (
                <UserSingleCard user={user}/>
            ))}
        </div>
    );
}

export default UserCard;
