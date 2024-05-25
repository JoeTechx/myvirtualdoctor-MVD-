import { Header } from '@/components/Home/Header';
import { OurActivity } from '@/components/Home/OurActivity';
import { WhyUs } from '@/components/Home/WhyUs';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Header />
      <OurActivity />
      <WhyUs />
    </div>
  );
};
export default HomePage;
