import { FaSearch } from "react-icons/fa";
import React, { useState, useRef, useEffect,   } from 'react';
import { useGlobalContext } from './../context.jsx';
import "../css/main.css";
import BookList from "./BookList.jsx";



const SearchBar = () => {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const [filterParameter, setFilterParameter] = useState('');
    const handleFilterChange = (event) => {
        setFilterParameter(event.target.value);
    };
    const searchText = useRef('');
    const [loaded, setLoaded] = useState(false)

    useEffect(() => searchText.current.focus(), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchTerm = searchText.current.value.trim();
        if (tempSearchTerm
            // Trim the value of the input field and check if it is empty or contains only special characters
            .replace(/[^\w\s]/gi, '')
            .length === 0) {
            setSearchTerm(`meditations&sort=random`);
            setResultTitle('Please Enter Something ...');
        } else {
            setSearchTerm(searchText.current.value + `&sort=${filterParameter}`);
        }
        setLoaded(true)
    };

    return (
        <div>
            <div>
                <div>
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="search-container">


                            {
                                /*
                                    TODO: 
                                        You have to detail how many of them you are actually filtering by 

                                */

                                /*
                                    You can search for authors using the https://openlibrary.org/search/authors.json search API which accepts q as a query parameter:
    
                                    https://openlibrary.org/search/authors.json?q=j%20k%20rowling
                                */
                            }
                            <input className="search-input" type="text" placeholder="The Lost World ..." ref={searchText} />
                            <button className="search-button" type="submit" onClick={handleSubmit}>
                                <FaSearch className="search-icon" size={28} />
                            </button>
                        </div>
                    </form>
                    <label htmlFor="filterSelect">Select Filter:
                        <select id="filterSelect" value={filterParameter} onChange={handleFilterChange}>
                            <option value="new">New</option>
                            <option value="old">Old</option>
                            <option value="random">Random</option>
                        </select>
                    </label>
                </div>
            </div>
            <section>
                {loaded ? <BookList /> : ""}
            </section>
        </div>

    );
};

export default SearchBar;
