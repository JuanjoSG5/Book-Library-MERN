import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import DeleteUser from './pages/DeleteUser'
import EditUser from './pages/EditUser'
import ShowUser from './pages/ShowUser'
import Logout from './pages/Logout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<CreateUser/>}/>
      <Route path="/user/logout/:id" element={<Logout/>}/>
      <Route path="/user/edit/:id" element={<EditUser/>}/>
      <Route path="/user/delete/:id" element={<DeleteUser/>}/>
      <Route path="/user/details/:id" element={<ShowUser/>}/>
    </Routes>
  )
}

export default App