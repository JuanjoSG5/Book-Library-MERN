import React from 'react';
import LogOutButton from '../components/LogoutButton.jsx';
import BackButton from './BackButton.jsx';
import ContactButton from './ContactButton.jsx';
import UserDetailsButton from './UserDetailsButton.jsx';


const Navbar = () => {


  return (
    <nav className='header-buttons'>
      <BackButton/>
      <ContactButton />
      <UserDetailsButton/>
      <LogOutButton />
    </nav>
  )
}

export default Navbar