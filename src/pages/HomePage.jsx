import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>BA TECH - 산업용 펌프 및 설비 엔지니어링</title>
      </Helmet>
      <Hero />
    </div>
  );
};

export default HomePage;
