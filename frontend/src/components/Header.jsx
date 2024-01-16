import React from 'react';
import SearchBar from "../components/SearchBar.jsx";

import Navbar from './Navbar.jsx';
const Header = () => {
  return (
    <div className='holder'>
          <Navbar/>
            <div className="border-margin">
                <h2>Find your book of choice.</h2><br />
                <p>This is just some random text that will be displayed explaining how does the search bar work </p>
                <SearchBar />
            </div>
        
    </div>
  )
}

export default Header