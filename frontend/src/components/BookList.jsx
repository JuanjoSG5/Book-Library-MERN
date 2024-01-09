import React from 'react';
import { useGlobalContext } from '../context';
import Book from '../components/Book';
import Spinner from '../components/Spinner';
import coverImg from '../images/cover_not_found.jpg';
import '../css/main.css';

const BookList = () => {
    const { books, loading, resultTitle } = useGlobalContext();

    const booksWithCovers = books.map((singleBook) => {
        console.log(singleBook);
        return {
            ...singleBook,
            // removing /works/ to get only id
            id: singleBook.id.replace('/works/', ''),
            cover_img: singleBook.cover_id
                ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-M.jpg`
                : coverImg,
        };
    });

    if (loading) return <Spinner />;

    return (
        <section>
            <div>
                <h2 className='border-margin'>{resultTitle}</h2>
                <div className="book-container border-margin">
                    {booksWithCovers.slice(0, 30).map((item, index) => (
                        <Book key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookList;
