import React from 'react';
import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/api';

function UserList({ users }) {
    const users, setUsers = useState();

    useEffect(() => {
        fetchData(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => setUsers(data));
    },);

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => setUsers(users.filter((user) => user !== user)))}>Удалить</button>
          </li>
        ))}
        </ul>
    </div >
  );
}

export default UserList;