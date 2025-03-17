import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="bg-gray-600 p-4 flex justify-between">
        <div className="text-white text-xl">BlueMedix Dashboard</div>
        <div className="space-x-4">
          <Link to="/users" className="text-white">Users</Link>
          <Link to="/addUser" className="text-white">AddUser</Link>
          <Link to="/products" className="text-white">Products</Link>
          <Link to="/add-product" className="text-white">Add Product</Link>
        </div>
      </nav>
    );
  };

  
  export default Navbar;