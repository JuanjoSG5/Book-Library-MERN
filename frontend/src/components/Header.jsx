import React from 'react';
import SearchBar from "../components/SearchBar.jsx";

const Header = () => {
  return (
    <div className='holder'>
        <header>
            <div >
                <h2>find your book of choice.</h2><br />
                <p>This is just some random text that will be displayed explaining how does the search bar work </p>
                <SearchBar />
            </div>
        </header>
    </div>
  )
}

export default Header