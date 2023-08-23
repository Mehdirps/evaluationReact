import { useState } from "react";


const AddUserModal = ({ users, setUsers, setOpenAddModal }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleForm = () => {

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender
        }

        const usersCopy = [...users];

        usersCopy.push(newUser);

        setFirstName('');
        setLastName('');
        setAge('');
        setGender('');

        setUsers(usersCopy);
    }

    const cancelAddModal = () => {
        setOpenAddModal(false);
    }

    return (
        <div>
            Add User
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                handleForm();
            }}>
                <div>
                    <label htmlFor="firstName">firstName</label>
                    <input type="text" id='firstName' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div>
                    <label htmlFor="lastName">lastName</label>
                    <input type="text" id='lastName' onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div>
                    <label htmlFor="age">age</label>
                    <input type="number" id='age' onChange={(e) => setAge(e.target.value)} value={age} />
                </div>
                <div>
                    <label htmlFor="gender">gender</label>
                    <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} value={gender}>
                        <option disabled selected>--- Select gender ---</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </div>
                <button>Add</button>
            </form>
            <button onClick={() => {
                cancelAddModal()
            }}>Cancel</button>
        </div>
    );
};

export default AddUserModal;