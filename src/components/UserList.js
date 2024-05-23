import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(response => setUsers(response.data.data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.picture} alt={user.firstName} />
            <p>{user.firstName} {user.lastName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;