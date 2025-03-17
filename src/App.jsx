import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Card, CardContent } from './Components/Card';
import Navbar from './Components/Navbar';
import EditUser from './Components/EditeUser';
import UsersList from './Components/UserList';
import ProductList from './Components/ProductList';
import AddUser from './Components/AddUser';
import EditProduct from './Components/EditeProduct';
import axios from 'axios';
const App = () => {
  const [users, setUsers] = useState([]);
    useEffect(() => {
      console.log("yes")
        // if (users.length === 0) {  // Only fetch if users are not already loaded
          axios.get('https://fakestoreapi.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
        // }
      }, [setUsers]);
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="p-4">
          <Card>
            <h1 className='text-center'>Welcome to BlueMedix</h1>
            <CardContent>
              <Routes>
                <Route path="/users" element={<UsersList users={users} setUsers={setUsers}/>} />
                <Route path="/users/:id" element={<EditUser users={users} setUsers={setUsers} />} />
                <Route path="/AddUser" element={<AddUser users={users} setUsers={setUsers}/>} />
                <Route path="/products" element={<ProductList/>} />
                <Route path="/products/:id" element={<EditProduct/>} />
                <Route path="/add-product" element={<div>Add Product Form</div>} />
              </Routes>
            </CardContent>
          </Card>
        </div>
      </div>
    </Router>
  );
};

export default App;
