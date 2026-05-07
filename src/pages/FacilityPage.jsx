import React from 'react';
import { Helmet } from 'react-helmet-async';
import Facility from '../components/sections/Facility';

const FacilityPage = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>BA TECH - 주요 설비</title>
      </Helmet>
      <Facility />
    </div>
  );
};

export default FacilityPage;
