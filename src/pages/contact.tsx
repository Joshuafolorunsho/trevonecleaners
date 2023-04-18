import React from 'react';

const Index = () => {
  return (
    <>
      <section className="bg-hero-contact bg-cover bg-no-repeat py-8 text-white sm:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1
              style={{ backdropFilter: 'blur(4px)' }}
              className="rounded-full border border-white bg-primary-300/40 px-6 py-3 text-4xl font-bold"
            >
              Contact Us
            </h1>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-8">
        <div className="flex items-center rounded-3xl bg-white p-8 shadow-lg sm:rounded-[40px]">
          <div className="flex-1">
            <h2 className='text-gray-950 text-4xl font-semibold'>Contact Us Today</h2>
            <p className='text-xl mt-1 sm:text-2xl text-gray-850'>We will give you call to follow up</p>
          </div>
          <div className="flex-1">
            <img src="/assets/contact/map.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
