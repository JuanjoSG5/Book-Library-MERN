import React from 'react';
import BookCard from './BookCard';
const BookList = () => {
    // Fetch the books from local storage
    const storedBooks = JSON.parse(localStorage.getItem('bookmarkedBooks')) || [];
  
    return (
      <div className="book-list">
        {storedBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    );
  };
  
  export default BookList;