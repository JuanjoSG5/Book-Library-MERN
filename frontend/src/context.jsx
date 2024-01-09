import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

// The base URL for the Open Library API
const URL = "http://openlibrary.org/search.json?title=";

// Create a React context for managing global state
const AppContext = React.createContext();

// AppProvider component responsible for managing the global state
const AppProvider = ({ children }) => {

    // State variables 

    const [searchTerm, setSearchTerm] = useState("meditations");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    // useCallback is used to memoize the fetchBooks function
    const fetchBooks = useCallback(async () => {
        setLoading(true);
        let newBooks = [];
        try {
            // Fetch data from the Open Library API based on the search term
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const { docs } = data;

            // Map the retrieved data to a simplified book format
            newBooks = docs
                ? docs
                    .slice(0, 20)
                    .map((bookSingle) => {
                        const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;
                        return {
                            id: key,
                            author: author_name,
                            cover_id: cover_i,
                            edition_count: edition_count,
                            first_publish_year: first_publish_year,
                            title: title
                        }
                    })
                : [];
            setBooks(newBooks);
        } catch (error) {
            console.log(error);
        } finally {
            setResultTitle(newBooks.length > 1 ? "Your Search Result" : "No Search Result Found!");
            setLoading(false);
        }
    }, [searchTerm]);

    // useDebounce hook to delay the search term update and subsequent API calls
    const useDebounce = (value, delay) => {
        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        }, [value, delay]);

        return debouncedValue;
    };

    // Apply the debounce hook to the search term with a delay of 300ms
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    // useEffect to trigger the fetchBooks function when debouncedSearchTerm changes
    useEffect(() => {
        fetchBooks();
    }, [debouncedSearchTerm, fetchBooks]);

    // Provide the state and functions through the AppContext.Provider
    return (
        <AppContext.Provider value={{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

// Custom hook to access the global context from any component
export const useGlobalContext = () => {
    return useContext(AppContext);
}

// Export the context and provider for use in other parts of the application
export { AppContext, AppProvider };
