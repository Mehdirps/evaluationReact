import React, { useState } from 'react';
import User from './User';
import EditUserModal from './EditUserModal';

const UserList = ({ users,setUsers }) => {

    const [openEditModal, setOpenEditModal] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState('');

    const toggleModal = (user) => {
        setOpenEditModal(true);
        setUserToUpdate(user);
    }



    const cancelEditModal = () => {
        setOpenEditModal(false);
        setUserToUpdate('');
    }

    return (
        <div>
            {
                users.length > 0 ?
                users.map((user, i) => (
                    <>
                        <User key={i} user={user} toggleModal={toggleModal} />
                    </>
                ))
                : <p>Aucun utilisateur pour le moment !</p>
            }
            {
                openEditModal ?
                    <EditUserModal users={users}  user={userToUpdate} cancelEditModal={cancelEditModal} setUsers={setUsers}/>
                    : null
            }
        </div>
    );
};

export default UserList;