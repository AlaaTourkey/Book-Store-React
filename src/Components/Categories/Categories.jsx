import React, { useState } from 'react';
import style from './Categories.module.css'
import axios from 'axios';
import { useQuery } from 'react-query';
import Card from '../Card/Card';

function Categories() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('science fiction');
  const [fetchKey, setFetchKey] = useState('science fiction'); 

  const API_KEY = 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU';

  const fetchBooksByCategory = async (category) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=25&key=${API_KEY}`);
    return response.data.items;
  };

  const { data: books, isError, isLoading } = useQuery(['getBooks', fetchKey], () => fetchBooksByCategory(fetchKey), {
    keepPreviousData: true
  });

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setFetchKey(category);
  };

  return (
    <>
      <header>
        <div className='Header'>
          <div className="w-3/4 text-center m-auto">
            <h2 className='text-white text-5xl font-extrabold'>Choose Your Category and Enjoy</h2>
            {/* line after header */}
            <div className="bg-white h-px w-1/4 m-auto relative my-6 ">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-white"></i></li>
                <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-white"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="container w-11/12 m-auto">
        <h1 className="text-3xl font-bold text-center my-6">{selectedCategory} Books</h1>
        <div className="grid sm:grid-cols-5 grid-cols-2">
          <div className="sm:col-span-1 px-3 ">
            <h1 className="font-extrabold text-3xl text-gray-700"><i className="fas fa-filter text-xl"></i> Filter By</h1>
            <h3 className="my-4 text-xl ">Category</h3>
            <hr />
            <ul className="cursor-pointer">
              {['fiction', 'fantasy', 'mystery', 'philosophy', 'thriller', 'biography', 'autobiography', 'chemistry', 'mathematics', 'education', 'textbooks', 'children', 'health', 'technology', 'business', 'science', 'politics'].map((category) => (
                <li key={category} className="my-4 group" onClick={() => handleCategorySelection(category)}>
                  <i className="fa-solid fa-square text-amber-300 hover:ms-3 group-hover:text-amber-500 group-hover:rotate-45 text-xs mx-3 transition-all  duration-300 ease-out "></i>
                  <span className="group-hover:text-amber-500 group-hover:ms-1 transition-all  duration-300 ease-out">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-4 col-span-1 ">
            {isLoading ? (
              <div className="text-center text-blue-500">Loading...</div>
            ) : isError ? (
              <div className="text-center text-red-500">Error loading data</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book) => (
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
            )}
          </div>
        </div>

        <Card isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />

      </section>

    </>
  );
}

export default Categories;
