import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../context/DarkModeContext";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!toggleDarkMode) {
    console.error('DarkModeContext is not available. Make sure the component is wrapped with DarkModeProvider.');
    return null;
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const isArabic = i18n.language === 'ar';

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} border-gray-200 drop-shadow-2xl px-4 lg:px-6 py-5 shadow-xl fixed top-0 left-0 right-0 z-50`}>
      <div className={`flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ${isArabic ? 'flex-row-reverse' : ''}`}>
        <div className="flex items-center lg:order-2">
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={24}
            moonColor="white"
            sunColor="black"
          />
          <button onClick={() => changeLanguage("en")} className="mx-4">En</button>
          <button onClick={() => changeLanguage("ar")} className="me-4">Ar</button>
          <NavLink to="/login" className={({ isActive }) =>
            `block py-2 me-5 text-center relative hover:text-blue-400 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''}`
          }>
            {t('login')}
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) =>
            `block py-2 me-5 text-center relative hover:text-blue-400 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''}`
          }>
            {t('signup')}
          </NavLink>
        </div>
        <button
          type="button"
          className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${isArabic ? 'ml-0' : 'ml-auto'}`}
          onClick={toggleMobileMenu}
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Toggle main menu</span>
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
        <div className={`lg:flex justify-center items-center w-full lg:w-auto lg:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            <li className="relative">
              <NavLink
                to="/"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-2  text-center relative hover:text-blue-400 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''}`
                }
              >
                {t('home')}
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/newbooks"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-2 text-center relative hover:text-blue-400 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''}`
                }
              >
                {t('newBooks')}
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/categories"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-2 text-center relative hover:text-blue-400 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''}`
                }
              >
                {t('categories')}
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/search"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-2 text-center relative hover:text-blue-400 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''}`
                }
              >
                {t('search')}
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/contact"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-2 text-center relative hover:text-blue-400 ${isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''}`
                }
              >
                {t('contact')}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
