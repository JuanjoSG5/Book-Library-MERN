import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookmark } from 'react-icons/fa';
import '../../css/main.css';

const BookCard = (book ) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showAllAuthors, setShowAllAuthors] = useState(false);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        // Check if the book is bookmarked when the component mounts
        const bookmarkedBooks = JSON.parse(localStorage.getItem(`bookmarkedBooks_${currentUser.username}`)) || [];
        const isBookmarkedOnLoad = bookmarkedBooks.some((b) => b.id === book.id);
        setIsBookmarked(isBookmarkedOnLoad);
    }, [book.id, currentUser.username]); // Added currentUser.username to the dependency array


    const handleIconClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    
        // Toggle bookmark status
        setIsBookmarked(!isBookmarked);
    
        // Store or manage the book information (e.g., using Redux, local storage, etc.)
        const bookmarkedBooks = JSON.parse(localStorage.getItem(`bookmarkedBooks_${currentUser.username}`)) || [];
    
        if (isBookmarked) {
            // Remove the book from the bookmarkedBooks array
            const updatedBookmarks = bookmarkedBooks.filter((b) => b.id !== book.id);
            localStorage.setItem(`bookmarkedBooks_${currentUser.username}`, JSON.stringify(updatedBookmarks));
            if (book.setShouldReload) {
                book.setShouldReload(true);
            }
        } else {
            // Store the book information
            const bookmarkedBook = {
                id: book.id,
                title: book.title,
                author: book.author,
                cover_img: book.cover_img
            };
            bookmarkedBooks.push(bookmarkedBook);
            localStorage.setItem(`bookmarkedBooks_${currentUser.username}`, JSON.stringify(bookmarkedBooks));
    
            
        }
    };
    

    const truncatedAuthors = showAllAuthors ? book.author : book.author && book.author.slice(0, 3).join(", ");

    const toggleAuthors = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowAllAuthors(!showAllAuthors);
    };

    return (
        <Link className="book-card link" to={`/book/${book.id}`}>
            <img src={book.cover_img} alt="cover" />
            <section>
                <h3 className='item-margin'>{book.title}</h3>

                <h4 className='item-margin'>Author: {truncatedAuthors}</h4>
                {book.author && book.author.length > 5 && (
                    <button className="read-more-button" onClick={toggleAuthors}>
                        {showAllAuthors ? 'Read less authors' : 'Read more authors'}
                    </button>
                )}
                <span className='item-margin'>Total Editions: {book.edition_count}</span>
                <span className='item-margin'>First Publish Year: {book.first_publish_year}</span>
            </section>
            {
                isBookmarked ? <FaBookmark onClick={handleIconClick} className="read-later-icon" size={28} /> : <IoBookmarkOutline onClick={handleIconClick} className="read-later-icon" size={28} />
            }
        </Link>
    );
}

export default BookCard;