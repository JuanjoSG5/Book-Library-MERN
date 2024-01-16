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
import NotFound from './pages/NotFound';

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
      <Route path="/login" element={<Login />} />
      <Route path="/home"
        element={
          userIsLoggedIn() ? (
            <Home />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="book/:id"
        element={
          userIsLoggedIn() ? (
            <BookDetails />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="/logout"
        element={
          userIsLoggedIn() ? (
            <Logout />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="/contact"
        element={
          userIsLoggedIn() ? (
            <ContactPage />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="/admin"
        element={
          userIsAdmin() ? (
            <UserList />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="/user/edit/:id"
        element={
          userIsAdmin() ? (
            <EditUser />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="/user/delete/:id"
        element={
          userIsAdmin() ? (
            <DeleteUser />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route path="/user/details/:id"
        element={
          userIsAdmin() ? (
            <ShowUser />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

    </Routes>
  );
};

export default App;
