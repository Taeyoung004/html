import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingCTA from '../components/ui/FloatingCTA';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
