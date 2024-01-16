import React from 'react';
import BackButton from '../buttons/BackButton.jsx';

import '../../css/pages/book.css'
// TODO: import the book css to the main css file

const Book = ({ book }) => {
    return (
        <section className='book-content'>
            <article className='container'>
                <section className='book-content-flex grid'>
                    <img className="book-details-img" src={book?.cover_img} alt='cover img' />
                    <div className='book-details-info'>
                        <span className='book-details-item title'>{book?.title}</span>
                        <section className='book-details-content'>
                            <span className='book-details-item descrition'>{book?.description}</span>
                            <span className='book-details-item'><strong> Subject Places:</strong> {book?.subject_places}</span>
                            <span className='book-details-item'><strong> Subject Times:</strong> {book?.subject_times}</span>
                            <span className='book-details-item'><strong> Subjects:</strong> {book?.subjects} </span>
                            <span className='book-details-item'><strong> Subjects:</strong> {book?.subjects} </span>
                        </section>
                    </div>
                </section>
            </article>
        </section>
    );
};

export default Book;