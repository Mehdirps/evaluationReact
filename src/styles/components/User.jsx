import React from 'react';

const User = ({ user, toggleModal }) => {
    return (
        <div onClick={() => toggleModal(user)}>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>age : {user.age}</p>
            <p>gender : {user.gender}</p>
        </div>
    );
};

export default User;