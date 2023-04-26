import React from 'react';

const services = [
  {
    imgUrl: '/assets/home/man-cleaning-wall.png',
    title: 'Janitorial/General Cleaning service'
  },
  {
    imgUrl: '/assets/home/lady-cleaning-mat.png',
    title: 'Carpet & Upholstery Cleaning'
  },
  {
    imgUrl: '/assets/home/lady-cleaning-floor.png',
    title: 'Industrial Cleaning'
  },
  {
    imgUrl: '/assets/home/lady-cleaning-floor-2.png',
    title: 'Floor restoration & Cleaning'
  }
];

export const Services = () => {
  return (
    <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.title}
          style={{ backgroundImage: `url(${service.imgUrl})` }}
          className="relative h-[448px] flex-1 rounded-3xl bg-cover text-white"
        >
          <div className="absolute inset-0 rounded-3xl bg-[#544b4b] bg-opacity-40" />
          <div className="relative z-10 mt-[320px] px-6">
            <p>Cleaning | On Demand</p>
            <h2 className="text-2xl font-bold">{service.title}</h2>
          </div>
        </div>
      ))}
    </section>
  );
};
