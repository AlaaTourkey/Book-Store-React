import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="grid grid-rows-layout ">
      <Navbar />
      <main className=" overflow-y-auto mt-10">
        <Outlet />
      </main>
      <footer className=" text-white  ">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;