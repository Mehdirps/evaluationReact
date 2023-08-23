import React, { useState } from 'react';

const EditUserModal = ({ users, user, cancelEditModal, setUsers }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);

    const [firstNameNew, setFirstNameNew] = useState(user.firstName);
    const [lastNameNew, setLastNameNew] = useState(user.lastName);
    const [ageNew, setAgeNew] = useState(user.age);
    const [genderNew, setGenderNew] = useState(user.gender);

    const handleForm = () => {

        const usersCopy = [...users];

        let userToUpdate = usersCopy.find((user) => user.firstName === firstName);


        userToUpdate.firstName = firstNameNew;
        userToUpdate.lastName = lastNameNew;
        userToUpdate.age = ageNew;
        userToUpdate.gender = genderNew;

        console.log(userToUpdate);
        setFirstName('');
        setLastName('');
        setAge('');
        setGender('');

        setUsers(usersCopy);
        cancelEditModal()
    }

    const deleteUser = (firstName) => {
        const usersCopy = [...users];

        const usersFiltered = usersCopy.filter((user) => user.firstName !== firstName);

        setUsers(usersFiltered);
        cancelEditModal()
    }

    return (
        <div>
            User
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                handleForm();
            }}>
                <div>
                    <label htmlFor="firstName">firstName</label>
                    <input type="text" id='firstName' onChange={(e) => setFirstNameNew(e.target.value)} defaultValue={firstName} />
                </div>
                <div>
                    <label htmlFor="lastName">lastName</label>
                    <input type="text" id='lastName' onChange={(e) => setLastNameNew(e.target.value)} defaultValue={lastName} />
                </div>
                <div>
                    <label htmlFor="age">age</label>
                    <input type="number" id='age' onChange={(e) => setAgeNew(e.target.value)} defaultValue={age} />
                </div>
                <div>
                    <label htmlFor="gender">gender</label>
                    <select name="gender" id="gender" onChange={(e) => setGenderNew(e.target.value)} defaultValue={gender}>
                        <option disabled selected>--- Select gender ---</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </div>
                <button>Add</button>
            </form>
            <button onClick={() => {
                deleteUser(firstName)
            }}>Delete</button>
            <button onClick={() => cancelEditModal()}>Cancel</button>
        </div>
    )
};

export default EditUserModal;