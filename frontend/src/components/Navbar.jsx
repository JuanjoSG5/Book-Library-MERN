import React from 'react';
import LogOutButton from './buttons/LogoutButton.jsx';
import BackButton from './buttons/BackButton.jsx';
import ContactButton from './buttons/ContactButton.jsx';
import UserDetailsButton from './buttons/UserDetailsButton.jsx';


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