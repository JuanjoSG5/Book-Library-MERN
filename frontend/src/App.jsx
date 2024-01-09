import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './pages/User/UserList'; 
import BookList from './components/BookList';
import CreateUser from './pages/User/CreateUser';
import DeleteUser from './pages/user/DeleteUser';
import EditUser from './pages/User/EditUser'; 
import ShowUser from './pages/user/ShowUser'; 
import Logout from './pages/User/Logout';  
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="book" element = {<BookList />} />
      <Route path="/user" element={<UserList />} />
      <Route path="/user/login" element={<CreateUser />} />
      <Route path="/user/logout/:id" element={<Logout />} />
      <Route path="/user/edit/:id" element={<EditUser />} />
      <Route path="/user/delete/:id" element={<DeleteUser />} />
      <Route path="/user/details/:id" element={<ShowUser />} />
    </Routes>
  );
};

export default App;
