import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './User/UserList';  // Correct the casing
import CreateUser from './User/CreateUser';  // Correct the casing
import DeleteUser from './user/DeleteUser';  // Correct the casing
import EditUser from './User/EditUser';  // Correct the casing
import ShowUser from './user/ShowUser';  // Correct the casing
import Logout from './User/Logout';  // Correct the casing
import MainPage from './MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
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
