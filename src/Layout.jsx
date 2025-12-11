import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
