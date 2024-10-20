import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Style from './NewBooks.module.css';
import demo1 from '../../assets/imgs/theme-demo-2.jpg';
import demo2 from '../../assets/imgs/theme-demo2.jpg';
import demo3 from '../../assets/imgs/theme-demo3.jpg';
import demo4 from '../../assets/imgs/theme-demo4.jpg';
import book1 from '../../assets/imgs/book1.jpg';
import book2 from '../../assets/imgs/book2.jpg';
import book3 from '../../assets/imgs/book3.jpg';
import book4 from '../../assets/imgs/book4.jpg';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';

function NewBooks() {
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  if (!toggleDarkMode) {
    console.error('DarkModeContext is not available. Make sure the component is wrapped with DarkModeProvider.');
    return null;
  }

  return (
    <>
      {/* Choose Demo */}
      <section className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-white'}`}>
        <div className="demo py-7">
          <div className="container w-3/4 m-auto">
            <div className="text-center m-auto mb-16">
              <h2 className="text-5xl my-2">
                {t('choose')} <span className="font-bold">{t('demo')}</span>
              </h2>
              {/* line after header */}
              <div className="h-px min-w-12 w-80 m-auto relative my-6">
                <ul className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
                  <li><i className="fa-solid fa-square rotate-45 text-xs mx-1"></i></li>
                  <li><i className="fa-solid fa-square rotate-45 text-xs mx-1"></i></li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {[demo1, demo2, demo3, demo4].map((image, index) => (
                <div className="col-span-1" key={index}>
                  <div className="image-container">
                    <img src={image} alt="Demo Image" />
                    <div className="layout bg-blue-700">
                      <h4 className="uppercase">{t('author')}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* New Books */}
      <section className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div>
          <div className="py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center text-white">
              <Link to="/categories/child">
                <div className={`${Style.post1} ${Style.post} flex items-center justify-center flex-col relative overflow-hidden group`}>
                  <div className={`${Style.inner_content} relative z-10`}>
                    <h6 className="text-white">{t('books_to_help_you_bring_up_a_child')}</h6>
                  </div>
                </div>
              </Link>
              <Link to="/categories/cooking">
                <div className={`${Style.post2} ${Style.post} flex items-center justify-center flex-col relative overflow-hidden group`}>
                  <div className={`${Style.inner_content} relative z-10`}>
                    <h6 className="text-white">{t('books_to_help_you_learn_cooking')}</h6>
                  </div>
                </div>
              </Link>
              <Link to="/categories/health">
                <div className={`${Style.post3} ${Style.post} flex items-center justify-center flex-col relative overflow-hidden group`}>
                  <div className={`${Style.inner_content} relative z-10`}>
                    <h6 className="text-white">{t('books_to_help_you_stay_positive')}</h6>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Book! */}
      <section className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div>
          <div className="container w-11/12 m-auto">
            <div className="py-5">
              <div className="text-center m-auto mb-16">
                <h2 className="text-5xl mb-2">
                  {t('choose_your_books')}
                </h2>
                {/* line after header */}
                <div className="bg-blue-700 h-px min-w-12 w-80 m-auto relative my-6">
                  <ul className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
                    <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-blue-700"></i></li>
                    <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-blue-700"></i></li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-1 text-center">
                {[book1, book2, book3, book4].map((book, index) => (
                  <div className="col-span-1 w-3/4 group mx-auto flex flex-col items-center" key={index}>
                    <div className="flex items-center justify-center overflow-hidden">
                      <img
                        src={book}
                        className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                        alt="Book Image"
                      />
                    </div>
                    <div className="my-4">
                      <h4 className="uppercase transition-colors duration-500 ease-in-out group-hover:text-blue-500">
                        {t('drama')}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewBooks;
