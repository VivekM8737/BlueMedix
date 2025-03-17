import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
    const [products, setproducts] = useState([]);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (products.length === 0) {  // Only fetch if products are not already loaded
          axios.get('https://fakestoreapi.com/products')
            .then(response => setproducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
        }
      }, [products, setproducts]);

  const deleteProduct = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => setproducts(products.filter(product => product.id !== id)))
      .catch(error => console.error('Error deleting user:', error));
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         const userNew = { username: username, email: email, password: password };
//         fetch('https://fakestoreapi.com/products', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(userNew)
//         })
//           .then(response => response.json())
//           .then(data => console.log(data)); // Including username and email manually
//       setproducts([...products, userNew]); // Append new user to the list
//       navigate('/products');
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

  return (
    <>
      <h1 className="text-xl mb-4">products List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} className="flex justify-between mb-2">
            <Link to={`/products/${product.id}`}>{product.title}</Link>
            <button onClick={() => deleteProduct(product.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    {/* <div>
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
    </div> */}
    </>
  );
};

export default ProductList;
