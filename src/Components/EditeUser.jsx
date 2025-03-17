import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const { id } = useParams();
  const [username, setUsername] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/users/${id}`)
      .then(response => {
        setUsername(response.data.username);
        setFirstName(response.data.name.firstname);
        setEmail(response.data.email);
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    axios.put(`https://fakestoreapi.com/users/${id}`, { username, email })
      .then(() => navigate('/users'))
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="border p-2" />
      <input type="text" value={firstname} onChange={e => setFirstName(e.target.value)} placeholder="FistName" className="border p-2" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">Edit User</button>
    </form>
  );
};

export default EditUser;
