import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (users.length === 0) {  // Only fetch if users are not already loaded
          axios.get('https://fakestoreapi.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
        }
      }, [users, setUsers]);

  const deleteUser = (id) => {
    axios.delete(`https://fakestoreapi.com/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error('Error deleting user:', error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const userNew = { username: username, email: email, password: password };
        fetch('https://fakestoreapi.com/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userNew)
        })
          .then(response => response.json())
          .then(data => console.log(data)); // Including username and email manually
      setUsers([...users, userNew]); // Append new user to the list
      navigate('/users');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <>
      <h1 className="text-xl mb-4">Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="flex justify-between mb-2">
            <Link to={`/users/${user.id}`}>{user.username}</Link>
            <button onClick={() => deleteUser(user.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    <div>
        <form onSubmit={handleSubmit} className="space-y-4">
        <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            placeholder="Username" 
            className="border p-2" 
            required 
        />
        <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Email" 
            className="border p-2" 
            required 
        />
        <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="password" 
            className="border p-2" 
            required 
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Add User</button>
        </form>
    </div>
    </>
  );
};

export default UsersList;
