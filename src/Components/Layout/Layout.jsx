import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="grid grid-rows-layout ">
      <Navbar />
      <main className="py-4 overflow-y-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white mt-10">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;