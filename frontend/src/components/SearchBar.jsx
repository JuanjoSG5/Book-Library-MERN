import { FaSearch } from "react-icons/fa";
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from './../context.jsx';

const SearchBar = () => {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    useEffect(() => searchText.current.focus(), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchTerm = searchText.current.value.trim();
        if (tempSearchTerm
            // Trim the value of the input field and check if it is empty or contains only special characters
            .replace(/[^\w\s]/gi, '')
            .length === 0) {
                setSearchTerm('meditations');
                setResultTitle('Please Enter Something ...');
        } else {
            setSearchTerm(searchText.current.value);
        }

        navigate('/book');
    };

    return (
        <div>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" placeholder="The Lost World ..." ref={searchText} />
                            <button type="submit" onClick={handleSubmit}>
                                <FaSearch size={32} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
