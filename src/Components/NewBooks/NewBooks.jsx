import React, { useState } from 'react';
import Style from './NewBooks.module.css';
import Card from '../Card/Card';
import axios from 'axios';
import { useQuery } from 'react-query';

function NewBooks() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_KEY = 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU';

  function getNewest() {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=${API_KEY}`);
  }

  const { data, isError, isLoading } = useQuery('getNewest', getNewest);

  if (isLoading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error loading data</div>;
  }

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="container w-3/4 m-auto">


      <h1 className="text-3xl font-bold text-center mb-6">New Books</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data?.items?.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(book)}
          >
            {book.volumeInfo.imageLinks?.thumbnail && (
              <div className="group relative">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-full h-80" />
                <div className="bg-gray-200 bg-opacity-50 p-4 absolute top-0 bottom-0 w-full rounded-lg shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-200 flex items-center justify-center flex-col">
                  <p className="text-black font-extrabold text-2xl">
                    {book.volumeInfo.authors?.join(', ')}
                  </p>
                  <p className="text-2xl text-black">
                    {book.volumeInfo.publishedDate}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Card isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
    </div>
    </>
  );
}

export default NewBooks;
