import axios from 'axios';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState('');

  useEffect(() => {
    if (subject) {
      fetchData();
    }
  }, [subject]);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`http://openlibrary.org/subjects/${subject}.json`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const storeBooksToLocalstorage = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  return (
    <>
      {subject !== null && (
        <>
          <label htmlFor="bookSubjects">Select a Book Subject:</label>
          <select
            id="bookSubjects"
            value={subject}
            onChange={handleSubjectChange}
          >
            <option value="" disabled>Select a subject</option>
            <option value="love">Love</option>
            <option value="mystery">Mystery</option>
            <option value="fantasy">Fantasy</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="history">History</option>
            <option value="biography">Biography</option>
            <option value="self-help">Self-Help</option>
            <option value="travel">Travel</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
          </select>

          {loading && <p>Loading...</p>}

          {!loading && data && data.works && data.works.length > 0 ? (
            data.works.map((work) => (
              <div key={work.key}>
                <h2>{work.title}</h2>
                <h5>Author: {work.authors && work.authors.length > 0 ? work.authors[0].name : 'Unknown Author'}</h5>
                <p>Publish Date: {work.first_publish_year ? work.first_publish_year : 'Unknown Publish Date'}</p>
                <p>Cover ID: {work.cover_id ? work.cover_id : ''}</p>
                <p>Complete: {work.has_fulltext ? 'Yes' : 'No'}</p>
                <hr />
              </div>
            ))
          ) : ''}
        </>
      )}
    </>
  );
};

export default MainPage;
