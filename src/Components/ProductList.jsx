import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = ({products,setProducts}) => {
    const navigate = useNavigate();

  const deleteProduct = (id) => {
    const x=confirm("Are you want to delet?");
    if(x===true){

      axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(() => setProducts(products.filter(product => product.id !== id)))
        .catch(error => console.error('Error deleting user:', error));
    }
  };

  return (
    <>
      <h1 className="text-xl mb-4">products List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} className="flex justify-between mb-2">
            <Link to={`/products/${product.id}`}>{product.title}</Link>
            <button onClick={() => deleteProduct(product.id)} className="text-red-500 font-mono rounded-lg bg-sky-500/50 p-1">Delete</button>
          </li>
        ))}
      </ul>
   
    </>
  );
};

export default ProductList;
