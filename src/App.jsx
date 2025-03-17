import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from './Components/Card';
import Navbar from './Components/Navbar';
import EditUser from './Components/EditeUser';
import UsersList from './Components/UserList';
import ProductList from './Components/ProductList';
import AddUser from './Components/AddUser';
import EditProduct from './Components/EditeProduct';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="p-4">
          <Card>
            <CardContent>
              <Routes>
                <Route path="/users" element={<UsersList />} />
                <Route path="/users/:id" element={<EditUser />} />
                <Route path="/AddUser" element={<AddUser/>} />
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
