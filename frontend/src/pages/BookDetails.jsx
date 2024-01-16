import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './../components/Spinner';
import coverImg from "./../images/cover_not_found.jpg";
import Book from '../components/book/Book.jsx';
import './../css/main.css';
import Navbar from '../components/Navbar';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getBookDetails() {
            try {
                const response = await fetch(`${URL}${id}.json`);
                const data = await response.json();

                if (data) {
                    const { description, title, covers, subject_places, subject_times, subjects } = data;
                    const newBook = {
                        description: description ? description.value : "No description found",
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
                        subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
                        subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
                        subjects: subjects ? subjects.join(", ") : "No subjects found"
                    };
                    setBook(newBook);
                } else {
                    setBook(null);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getBookDetails();
    }, [id]);

    if (loading) return <Spinner />;

    return (<>
    <Navbar/>
        <Book className="book" book={book} />;
    </>
    )
}

export default BookDetails