import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

const Book = (book) => {
    return (
        <Link className="book-card link" to={`/book/${book.id}`} >
            <div>
                <img src={book.cover_img} alt="cover" />
            </div>
            <section>
                <h3 className='item-margin'>{book.title}</h3>
                {
                    /* TODO: There is an issue with the authors is that there may be a lot of authors for example 
                        searching for meditations you can find a book with a lot of authors which making the cards
                         extend innecessarily 
                    */
                }
                <h4 className='item-margin'>Author: {book.author && book.author.join(", ")}</h4>
                <span className='item-margin'>Total Editions: {book.edition_count}</span>
                <span className='item-margin'>First Publish Year: {book.first_publish_year}</span>
            </section>
        </Link>
    );
}

export default Book;
