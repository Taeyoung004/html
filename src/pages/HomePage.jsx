import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import Facility from '../components/sections/Facility';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>BA TECH - 홈</title>
      </Helmet>
      <Hero />
      <div className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">산업 현장의 새로운 기준</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            비에이텍은 최고의 기술력과 신뢰를 바탕으로 고효율 펌프 및 엔지니어링 설비를 제공합니다.
          </p>
        </div>
      </div>
      {/* You can add more summary sections here if needed */}
    </>
  );
};

export default HomePage;
