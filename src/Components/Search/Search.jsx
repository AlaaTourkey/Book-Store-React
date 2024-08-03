import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Card from '../Card/Card';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchBooks = async () => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchQuery}&maxResults=35`);
    return response.data.items;
  };

  const { data, isError, isLoading } = useQuery(['searchBook', searchQuery], fetchBooks, {
    enabled: !!searchQuery,
  });

  useEffect(() => {
    if (data) {
      setBooks(data);
    }
  }, [data]);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <>
      <div className="container w-3/4 m-auto">
        <div className="mb-5">
          <label htmlFor="base-input" className="block mb-2 text-xl font-medium text-gray-900">
            Search
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="base-input"
            placeholder="Search with book name"
            className="bg-gray-50 border border-gray-300 text-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 my-7">
          {books?.map((book) => (
            <div key={book.id} className="bg-white border-2 h-fit p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-300 hover:border-amber-400 hover:shadow-2xl " onClick={() => handleBookClick(book)}>
              <div className="grid grid-cols-2 gap-4 ">
                <div className="">
                  <img src={book.volumeInfo.imageLinks.thumbnail} className='w-3/4 ' alt="" />
                </div>
                <div className="">
                  <h2 className="text-lg font-bold">{book.volumeInfo.title}</h2>
                  <h5 className="text-sm font-light">By : {book.volumeInfo.authors}</h5>
                  <h3 className="text-lg  my-2 ">{book.volumeInfo.publishedDate}</h3>
                  <p className="text-gray-400 mt-7 font-bold text-base">{book.volumeInfo.description?.split(' ').slice(0, 30).join(' ')}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {selectedBook && (<Card isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
      )}
    </>
  );
}

export default Search;



// const [searchTerm, setSearchTerm] = useState('');
// const [books, setBooks] = useState([]);

// const searchBooks = async () => {
//   try {
//     const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}`);
//     setBooks(response.data.items);
//   } catch (error) {
//     console.error('Error fetching data', error);
//   }
// };



{/* <div>
        <h1>Search for Books</h1>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter search terms" />
        <button onClick={searchBooks}>Search</button>
        <div>
          {books.map(book => (
            <div key={book.id}>
              <h2>{book.volumeInfo.title}</h2>
              <p>Author(s): {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
              <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'} alt={book.volumeInfo.title} />
            </div>
          ))}
        </div>
      </div> */}