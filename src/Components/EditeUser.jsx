import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditUser = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
      setUsername(user.username);
      setFirstName(user.name.firstname);
      setEmail(user.email);
    }
  }, [id, users]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstname)
    const updatedUser = { id: parseInt(id), username:username, email,name:{firstname: firstname }};

    try {
      const response = await axios.put(`https://fakestoreapi.com/users/${id}`, updatedUser, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200 || response.status === 201) {
        const updatedUsers = users.map(user => user.id === updatedUser.id ? updatedUser : user);
        setUsers(updatedUsers);
        // localStorage.setItem('users', JSON.stringify(updatedUsers));
        setShowModal(false);

      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <>
      <div className='flex  font-mono justify-center items-center '>

        <div className=' margin-auto border-2 rounded-lg p-4'>
          <h2>User: {username}</h2>
          <h2>Name: {firstname}</h2>
          <h2>Email: {email}</h2>
          <button 
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white text-sm p-1 rounded mb-2 my-2"
        >
          Edit User
        </button>
          
        </div>
      </div>
      

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h3 className=" font-bold mb-4">Edit User</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
                className="w-full p-2 border rounded"
              />
              <input 
                type="text" 
                value={firstname} 
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder="FirstName" 
                className="w-full p-2 border rounded"
              />
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                className="w-full p-2 border rounded"
              />
              <div className="flex justify-between">
                <button 
                  type="submit" 
                  className="bg-green-500 text-white p-2 rounded"
                >
                  Save Changes
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditUser;
