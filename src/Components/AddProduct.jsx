import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = ({products, setProducts}) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newProduct = { title: title, description: description};
      fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      })
        .then(response => response.json())
        .then(data => console.log(data)); // Including username and email manually
        console.log(newProduct)
        setProducts([...products, newProduct]); // Append new user to the list
    // Append new user to the list
      navigate('/products');
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
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            placeholder="title" 
            className="border p-2" 
            required 
        />
        <input 
            type="text" 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
            placeholder="Description" 
            className="border p-2" 
            required 
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Add product</button>
        </form>
    </div>
    </>
  );
};

export default AddProduct;
