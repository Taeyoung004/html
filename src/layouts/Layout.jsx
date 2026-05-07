import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingCTA from '../components/ui/FloatingCTA';

const Layout = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
