import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='Container-fluid'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
