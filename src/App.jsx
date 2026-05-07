import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout & Utilities
import Layout from './layouts/Layout';
import ScrollToTop from './utils/ScrollToTop';
import Loading from './components/ui/Loading';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HistoryPage from './pages/HistoryPage';
import FacilityPage from './pages/FacilityPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        {loading ? <Loading /> : null}
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <index element={<HomePage />} /> {/* This is a shorthand, but I'll use index property below */}
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="facility" element={<FacilityPage />} />
            <Route path="location" element={<LocationPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
