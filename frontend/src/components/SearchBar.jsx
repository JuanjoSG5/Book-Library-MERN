import { FaSearch } from "react-icons/fa";
import React, { useState, useRef, useEffect,   } from 'react';
import { useGlobalContext } from './../context.jsx';
import "../css/main.css";
import BookList from "./BookList.jsx";



const SearchBar = () => {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const [filterParameter, setFilterParameter] = useState('random');
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
        <div >
            <div>
                <div>
                    <form className="search-form search-form-image" onSubmit={handleSubmit}>
                        <div className="search-container">


                            
                            <input className="search-input" type="text" placeholder="The Lost World ..." ref={searchText} />
                            <button className="search-button" type="submit" onClick={handleSubmit}>
                                <FaSearch className="search-icon" size={28} />
                            </button>
                        </div>
                    </form>
                    <label className="filter-container" htmlFor="filterSelect">
                        <select className="filter-container-select" id="filterSelect" value={filterParameter} onChange={handleFilterChange}>
                            
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
