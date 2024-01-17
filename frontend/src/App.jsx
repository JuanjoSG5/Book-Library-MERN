import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserList from './pages/User/UserList';
import CreateUser from './pages/user/CreateUser';
import DeleteUser from './pages/user/DeleteUser';
import EditUser from './pages/User/EditUser';
import ShowUser from './pages/user/ShowUser';
import Logout from './pages/user/Logout';
import Login from './pages/user/Login';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import ContactPage from './pages/ContactPage';

const App = () => {
  const userString = localStorage.getItem('currentUser');
  const user = userString ? JSON.parse(userString) : null;

  const userIsLoggedIn = () => {
    const userExists = user === null ? false : true 
    return userExists
  }

  const userIsAdmin = () => {
    const userIsAdmin = user === null 
                            ? false 
                            : (
                              user.admin ? true : false
                            )
    return userIsAdmin
  }

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
