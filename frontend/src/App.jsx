import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './pages/User/UserList'; 
import BookList from './components/BookList';
import CreateUser from './pages/User/CreateUser';
import DeleteUser from './pages/user/DeleteUser';
import EditUser from './pages/User/EditUser'; 
import ShowUser from './pages/user/ShowUser'; 
import Logout from './pages/user/Logout';  
import Login from './pages/user/Login';
import Home from './pages/Home';
import BookDetails from './components/BookDetails';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateUser />} />
      <Route path="/home" element = {<Home />} />
      <Route path="book/:id" element = {<BookDetails />} />
      <Route path="/admin" element={<UserList />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/user/edit/:id" element={<EditUser />} />
      <Route path="/user/delete/:id" element={<DeleteUser />} />
      <Route path="/user/details/:id" element={<ShowUser />} />
    </Routes>
  );
};

export default App;
