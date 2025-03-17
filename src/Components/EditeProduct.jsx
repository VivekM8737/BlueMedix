import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProduct = ({products,setProducts}) => {
  const { id } = useParams();
  const [title, setTitle] = useState('t');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

   useEffect(() => {
      const product = products.find(product => product.id === parseInt(id));
      if (product) {
        setTitle(product.title);
        setDescription(product.description);
      }
    }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://fakestoreapi.com/products/${id}`, { title, description })
      .then(() => navigate('/product'))
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <> 
      <div className='flex  font-mono justify-center items-center '>

      <div className=' margin-auto border-2 rounded-lg p-4'>
        <h2><b>Title:</b> {title}</h2>
        <p className='text-sm'><b>Description:</b> {description}</p>
        {/* <button 
      onClick={() => setShowModal(true)}
      className="bg-blue-500 text-white text-sm p-1 rounded mb-2 my-2"
      >
        Edit User
      </button> */}
      
    </div>
    </div>
      {/* <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="title" className="border p-2" />
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="description" className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Edit User</button>
      </form> */}
    </>
  );
};

export default EditProduct;
