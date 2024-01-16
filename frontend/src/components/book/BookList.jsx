import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import BookCard from './BookCard';
import Spinner from '../components/Spinner';
import coverImg from '../images/cover_not_found.jpg';

const BookList = ({ useLocalStorage }) => {
    const { books, loading,resultTitle } = useGlobalContext();
    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const [shouldReload,setShouldReload] = useState(false)
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const fetchBooks = () => {
        if (useLocalStorage) {
            return JSON.parse(localStorage.getItem(`bookmarkedBooks_${currentUser.username}`)) || [];
        } else {
            return books;
        }
    };

    const booksWithCovers = fetchBooks().map((singleBook) => ({
        ...singleBook,
        id: singleBook.id.replace('/works/', ''),
        cover_img: singleBook.cover_id
            ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-M.jpg`
            : coverImg,
    }));

    const totalBooks = booksWithCovers.length;

    const indexOfLastBook = currentPage * itemsPerPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;
    const currentBooks = booksWithCovers.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setCurrentPage(1);
    }, [useLocalStorage]);

    if (loading) return <Spinner />;

    const totalPages = Math.ceil(totalBooks / itemsPerPage);

    if (totalPages <= 1) {
        return (
            <section>
                <div>
                    <div className="book-container border-margin">
                        {currentBooks.map((item, index) => (
                            <BookCard setShouldReload={setShouldReload} key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section >
                <div>
                    <h2 className='border-margin'>{resultTitle}</h2>
                    <div className="book-container border-margin">
                        {currentBooks.map((item, index) => (
                            <BookCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="pagination">
                <ul className="pagination-list">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <li key={index} onClick={() => paginate(index + 1)} className={index + 1 === currentPage ? 'active' : ''}>
                            {index + 1}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default BookList;
