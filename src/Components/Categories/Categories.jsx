import React, { useContext, useEffect, useState } from 'react';
import style from './Categories.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import Card from '../Card/Card';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DarkModeContext } from '../context/DarkModeContext';

function Categories() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [fetchKey, setFetchKey] = useState('');
  const { category } = useParams();
  const { t } = useTranslation();

  const API_KEY = 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU';

  const fetchBooksByCategory = async (category) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=30&langRestrict=en&key=${API_KEY}`);
    return response.data.items;
  };

  const { data: books, isError, isLoading } = useQuery(['getBooks', fetchKey], () => fetchBooksByCategory(fetchKey), {
    keepPreviousData: true
  });

  useEffect(() => {
    if (category) {
      setSelectedCategory(category.charAt(0).toUpperCase() + category.slice(1));
      setFetchKey(category);
    }
  }, [category]);

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  if (!toggleDarkMode) {
    console.error('DarkModeContext is not available. Make sure the component is wrapped with DarkModeProvider.');
    return null;
  }
  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category.charAt(0).toUpperCase() + category.slice(1));
    setFetchKey(category); 
  };

  return (
    <>
      <header>
        <div className='Header'>
          <div className="w-3/4 text-center m-auto">
            <h2 className='text-white text-5xl font-extrabold'>{t('Choose Your Category And Enjoy')}</h2>
            <div className="bg-white h-px w-1/4 m-auto relative my-6 ">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-white"></i></li>
                <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-white"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} `} >
        <div className="container w-11/12 mx-auto py-8">
          {/* Dynamic Category Title */}
          <h1 className="text-3xl font-bold text-center py-8">
            {selectedCategory ? `${selectedCategory} ${t('books')}` : t('books')}
          </h1>

          <div className="grid sm:grid-cols-5 grid-cols-2">
            {/* Sidebar */}
            <div className="sm:col-span-1 px-3 ">
              <h1 className="font-extrabold text-3xl text-gray-700">
                <i className="fas fa-filter text-xl"></i> {t('Filter By')}
              </h1>
              <h3 className="my-4 text-xl ">{t('category')}</h3>
              <hr />
              <ul className="cursor-pointer">
                {['fiction', 'fantasy', 'mystery', 'philosophy', 'thriller', 'biography', 'autobiography', 'chemistry', 'mathematics', 'education', 'textbooks', 'children', 'health', 'technology', 'business', 'science', 'politics'].map((category) => (
                  <li key={category} className="my-4 group" onClick={() => handleCategorySelection(category)}>
                    <i className="fa-solid fa-square text-amber-300 hover:ms-3 group-hover:text-amber-500 group-hover:rotate-45 text-xs mx-3 transition-all duration-300 ease-out"></i>
                    <span className="group-hover:text-amber-500 group-hover:ms-1 transition-all duration-300 ease-out">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book List */}
            <div className="sm:col-span-4 col-span-1 ">
              {isLoading ? (
                <div className="my-7 text-center">
                  <Spin tip={t('loading')} size="large" />
                </div>
              ) : isError ? (
                <div className="text-center text-red-500">{t('error_loading_data')}</div>
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

          {/* Modal */}
          <Card isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />
        </div>
      </section>
    </>
  );
}

export default Categories;
