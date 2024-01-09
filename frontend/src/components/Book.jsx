import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

const Book = (book) => {
    return (
        <Link className="book-card" to={`/book/${book.id}`} >
            <div>
                <img src={book.cover_img} alt="cover" />
            </div>
            <section className="book-info">
                <span>{book.title}</span>
                <span className='text-capitalize fw-7'>Author: {book.author && book.author.join(", ")}</span>
                <span className='text-capitalize fw-7'>Total Editions: {book.edition_count}</span>
                <span className='text-capitalize fw-7'>First Publish Year: {book.first_publish_year}</span>
            </section>
        </Link>
    );
}

export default Book;
