import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddUser = ({users, setUsers}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
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
        console.log(username)
      setUsers([...users, userNew]); // Append new user to the list
    // Append new user to the list
      navigate('/users');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <>
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

export default AddUser;
