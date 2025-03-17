import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from './Components/Card';
import Navbar from './Components/Navbar';
import EditUser from './Components/EditeUser';
import UsersList from './Components/UserList';
import ProductList from './Components/ProductList';
import AddUser from './Components/AddUser';
import EditProduct from './Components/EditeProduct';
// const Navbar = () => {
//   return (
//     <nav className="bg-gray-600 p-4 flex justify-between">
//       <div className="text-white text-xl">BlueMedix Dashboard</div>
//       <div className="space-x-4">
//         <Link to="/users" className="text-white">Users</Link>
//         <Link to="/products" className="text-white">Products</Link>
//         <Link to="/add-user" className="text-white">Add User</Link>
//         <Link to="/add-product" className="text-white">Add Product</Link>
//       </div>
//     </nav>
//   );
// };

// const UsersList = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/users')
//       .then(response => setUsers(response.data))
//       .catch(error => console.error('Error fetching users:', error));
//   }, []);

//   const deleteUser = (id) => {
//     axios.delete(`https://fakestoreapi.com/users/${id}`)
//       .then(() => setUsers(users.filter(user => user.id !== id)))
//       .catch(error => console.error('Error deleting user:', error));
//   };

//   return (
//     <div>
//       <h1 className="text-xl mb-4">Users List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id} className="flex justify-between mb-2">
//             <Link to={`/users/${user.id}`}>{user.username}</Link>
//             <button onClick={() => deleteUser(user.id)} className="text-red-500">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const AddUser = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('https://fakestoreapi.com/users', { username, email })
//       .then(() => navigate('/users'))
//       .catch(error => console.error('Error adding user:', error));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="border p-2" />
//       <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2" />
//       <button type="submit" className="bg-blue-500 text-white p-2">Add User</button>
//     </form>
//   );
// };

// const EditUser = () => {
//   const { id } = useParams();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`https://fakestoreapi.com/users/${id}`)
//       .then(response => {
//         setUsername(response.data.username);
//         setEmail(response.data.email);
//       })
//       .catch(error => console.error('Error fetching user details:', error));
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`https://fakestoreapi.com/users/${id}`, { username, email })
//       .then(() => navigate('/users'))
//       .catch(error => console.error('Error updating user:', error));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="border p-2" />
//       <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2" />
//       <button type="submit" className="bg-blue-500 text-white p-2">Edit User</button>
//     </form>
//   );
// };

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
