import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`'https://fakestoreapi.com/products/1'${id}`)
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    axios.put(`https://fakestoreapi.com/product/${id}`, { title, description })
      .then(() => navigate('/product'))
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="title" className="border p-2" />
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="description" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">Edit User</button>
    </form>
  );
};

export default EditProduct;
