import React, { useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        // Add more users as needed
    ]);

    const deleteUser = (userId) => {
        // Filter out the user with the specified ID
        const updatedUsers = users.filter(user => user.id !== userId);
        // Update the state with the new user list
        setUsers(updatedUsers);
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
