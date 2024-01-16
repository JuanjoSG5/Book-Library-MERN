import React from 'react';
import SearchBar from "../components/SearchBar.jsx";

import Navbar from './Navbar.jsx';
const Header = () => {
  return (
    <div className='holder'>
          <Navbar/>
            <div className="border-margin">
                <h2 className="title">Find your book of choice.</h2>
                <SearchBar />
            </div>
        
    </div>
  )
}

export default Header