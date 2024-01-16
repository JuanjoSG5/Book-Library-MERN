import React,{useState, useEffect} from 'react';
import LogOutButton from './buttons/LogoutButton.jsx';
import BackButton from './buttons/BackButton.jsx';
import ContactButton from './buttons/ContactButton.jsx';
import UserDetailsButton from './buttons/UserDetailsButton.jsx';



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldSetScrolled = scrollTop > 0;
      setIsScrolled(shouldSetScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = `header-buttons${isScrolled ? ' transparent' : ''}`;

  return (
    <nav className={navbarClass}>
      <BackButton />
      <ContactButton />
      <UserDetailsButton />
      <LogOutButton />
    </nav>
  );
};

export default Navbar;