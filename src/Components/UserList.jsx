import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UsersList = ({users,setUsers}) => {
  const navigate = useNavigate();
  const deleteUser = (id) => {
    let x=confirm("Are you want to delete it?");
    if(x===true){

      axios.delete(`https://fakestoreapi.com/users/${id}`)
        .then(() => setUsers(users.filter(user => user.id !== id)))
        .catch(error => console.error('Error deleting user:', error));
    }
  };

  return (
    <>
      <h1 className="text-xl mb-4">Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="flex justify-between mb-2">
            <Link to={`/users/${user.id}`}>{user.username}</Link>
            <button onClick={() => deleteUser(user.id)} className="text-red-500 font-mono rounded-lg bg-sky-500/50 p-1">Delete</button>
          </li>
        ))}
      </ul>
    
    </>
  );
};

export default UsersList;
