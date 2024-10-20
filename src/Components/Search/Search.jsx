import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Spin } from 'antd';
import Card from '../Card/Card';
import { DarkModeContext } from '../context/DarkModeContext';
import { useTranslation } from 'react-i18next';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchOption, setSearchOption] = useState('relevance');
  const [triggerSearch, setTriggerSearch] = useState(false);

  const API_KEY = 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU';

  const fetchBooks = async () => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&orderBy=${searchOption}&key=${API_KEY}&langRestrict=en&maxResults=35`);
    return response.data.items;
  };

  const { data, isError, isLoading } = useQuery(['searchBook', searchQuery, searchOption], fetchBooks, {
    enabled: triggerSearch,
  });

  useEffect(() => {
    if (data) {
      setBooks(data);
    }
  }, [data]);

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { t } = useTranslation();

  if (!toggleDarkMode) {
    console.error('DarkModeContext is not available. Make sure the component is wrapped with DarkModeProvider.');
    return null;
  }

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setTriggerSearch(true);
  };

  return (
    <>
    <div className={`${isDarkMode ? 'bg-gray-900 text-black' : 'bg-white text-black'}`}>

      <header>
        <div className='Header'>
          <div className="w-3/4 text-center mx-auto">
            <div className="">
              <form className="mt-8 " onSubmit={(e) => e.preventDefault()}>
                <div className="text-center">
                  <div className="relative">
                    <input
                      id="base-input"
                      name="base-input"
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder={t('Enter Book Name')}
                      className="w-1/2 p-3  pl-3 rounded-md focus:outline-none dark:bg-black dark:bg-opacity-70 dark:text-white focus:w-full transition-all duration-300"
                    />
                  </div>
                </div>
                <div className='flex justify-end items-center w-full mt-7'>
                  <label htmlFor="search-option" className="font-bold text-lg m-5 text-white">{t('Sort By')}:</label>
                  <select
                    id="search-option"
                    name="search-option"
                    value={searchOption}
                    onChange={(e) => setSearchOption(e.target.value)}
                    className="block lg:w-1/4 w-1/2 py-3 pl-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 bg-black bg-opacity-70 dark:border-gray-600 dark:text-white"
                  >
                    <option value="relevance">{t('Relevance')}</option>
                    <option value="newest">{t('Newest')}</option>
                  </select>
                </div>
              </form>
            </div>
            {/* line after header */}
            <div className="bg-white h-px w-1/2 m-auto relative my-6">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-white"></i></li>
                <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-white"></i></li>
              </ul>
            </div>
            <h2 className='text-2xl text-white my-4 capitalize'>{t('Result For')} : {searchQuery}</h2>
          </div>
        </div>
      </header>
      <div className="container w-3/4 m-auto ">
        {isLoading ? (
          <div className="py-7 text-center">
            <Spin tip={t('Loading')} size="large" />
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 py-8">
            {books?.map((book) => (
              <div
                key={book.id}
                className="bg-white border-2 h-full p-4 rounded-lg cursor-pointer hover:-translate-y-1 duration-300 hover:border-amber-400 hover:shadow-2xl"
                onClick={() => handleBookClick(book)}
              >
                <div className="grid lg:grid-cols-2 grid-cols-2 gap-4">
                  <div className="">
                    <img src={book.volumeInfo.imageLinks?.thumbnail} className="w-3/4 h-full object-fill" alt="" />
                  </div>
                  <div className="">
                    <h4 className="text-lg font-bold">{book.volumeInfo.title}</h4>
                    <h5 className="text-sm font-light">{t('By')}: {book.volumeInfo.authors?.join(', ')}</h5>
                    <h4 className="text-lg my-2">{book.volumeInfo.publishedDate}</h4>
                    {book.volumeInfo.description ? (
              <p className="text-gray-400 font-bold text-2xl">
                {book.volumeInfo.description.split(' ').slice(0, 20).join(' ')}...
              </p>
            ) : (
              <p className="text-gray-400 font-bold text-2xl">No description available.</p>
            )}                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>

      {selectedBook && <Card isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />}
    </>
  );
}

export default Search;
