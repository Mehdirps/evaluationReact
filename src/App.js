import { useEffect, useState } from 'react';
import './styles/App.scss';
import UserList from './styles/components/UserList';
import AddUserModal from './styles/components/AddUserModal';

function App() {

  const [users, setUsers] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);

  useEffect(() => {
    setUsers([
      {
        firstName: 'Mehdi',
        lastName: 'Raposo',
        age: 23,
        gender: 'male'
      },
      {
        firstName: 'Michel',
        lastName: 'Obama',
        age: 55,
        gender: 'female'
      },
      {
        firstName: 'Booba',
        lastName: 'Bouffon',
        age: 45,
        gender: 'gogolle'
      },
    ])
  }, [])

  // const addUser = () => {

  // }

  return (
    <div className="app">
      <button onClick={() => {
        setOpenAddModal(true)
      }}>Add user</button>
      <h1>Liste des utilisateurs</h1>
      <UserList users={users} setUsers={setUsers} />
      {
        openAddModal ?
          <AddUserModal users={users} setUsers={setUsers} setOpenAddModal={setOpenAddModal} />
          : null
      }

    </div>
  );
}

export default App;
