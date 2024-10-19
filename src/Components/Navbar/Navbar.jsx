import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DarkModeContext } from "../context/DarkModeContext";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Ensure that the context is available
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
    setMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} border-gray-200 drop-shadow-2xl px-4 lg:px-6 py-4 shadow-xl fixed top-0 left-0 right-0 z-50`}>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center lg:order-2">
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={24}
            moonColor="white"
            sunColor="black"
          />
          <button onClick={() => changeLanguage("en")} className="ml-2">En</button>
          <button onClick={() => changeLanguage("ar")} className="ml-2">Ar</button>
          <NavLink to="/login" className="hover:bg-blue-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 lg:px-5 lg:py-2 lg:mr-2 focus:outline-none">
            {t('login')}
          </NavLink>
          <NavLink to="/signup" className="bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 lg:px-5 lg:py-2 lg:mr-2 focus:outline-none">
            {t('signup')}
          </NavLink>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMobileMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
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
          </button>
        </div>
        <div className={`lg:flex justify-between items-center w-full lg:w-auto lg:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0"
            >
              {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newbooks"
              onClick={handleLinkClick}
              className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0"
            >
              {t('newBooks')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              onClick={handleLinkClick}
              className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0"
            >
              {t('categories')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              onClick={handleLinkClick}
              className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0"
            >
              {t('search')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0"
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
