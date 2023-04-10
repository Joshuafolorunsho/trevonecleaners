import Image from 'next/image';
import React from 'react';

import { Button, CheckMark, FAQ, Team, Testimonials, Title } from '~/components';

const Index = () => {
  const coreValues = [
    'Customer satisfaction',
    'Excellence',
    'Teamwork',
    'Integrity',
    'Environmental responsibility',
    'Respect'
  ];
  return (
    <>
      <section className="bg-hero-services bg-cover bg-no-repeat py-8 text-white sm:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1
              style={{ backdropFilter: 'blur(4px)' }}
              className="rounded-full border border-white bg-primary-300/40 px-6 py-3 text-4xl font-bold"
            >
              Our Services
            </h1>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
};

export default Index;
