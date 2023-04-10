import Image from 'next/image';
import React from 'react';

import { Button, CheckMark, Team, Testimonials, Title } from '~/components';

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
      <section className="bg-hero-about bg-cover bg-no-repeat py-8 text-white sm:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1
              style={{ backdropFilter: 'blur(4px)' }}
              className="rounded-full border border-white bg-primary-300/40 px-6 py-3 text-4xl font-bold"
            >
              About Us
            </h1>
          </div>
        </div>
      </section>

      <section className="py-10  sm:py-16">
        <div className="container mx-auto">
          <div className="flex items-center lg:space-x-20">
            <div className="flex-1">
              <h2 className="font-lato text-3xl font-bold text-primary-300 sm:text-5xl xl:text-6xl">
                Our achievements over the years as a cleaning <span>service</span>
              </h2>
              <div className="my-4 space-y-4 text-gray-850">
                <p>
                  Welcome to <span className="font-bold">Trevone Nigeria</span> , where we believe
                  in delivering exceptional cleaning services that meet the needs of our clients. We
                  are a team of experienced and dedicated cleaning professionals who take pride in
                  providing top-quality services to commercial and industrial clients across Lagos
                  and all over Nigeria.
                </p>

                <p>
                  Our <span>mission</span> is to make the lives of our clients easier by taking care
                  of their cleaning needs, so they can focus on their core business. We understand
                  that every space is unique and requires a tailored approach, which is why we work
                  closely with our clients to understand their specific cleaning needs and provide
                  customized services to meet those needs.
                </p>
                <div className="flex space-x-8">
                  <div className="flex items-center space-x-1">
                    <CheckMark />
                    <p className="text-lg">Get 24/7 on-demand care</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckMark />
                    <p className="text-lg">Easily book cleaning</p>
                  </div>
                </div>
              </div>
              <Button>Book us online now</Button>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/about/man-cleaning-the-top.png"
                width={522}
                height={564}
                alt="man cleaning top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="container mx-auto">
          <div className="flex items-center space-x-10">
            <div className="flex-1">
              <h2 className="max-w-sm font-lato text-[64px] font-extrabold leading-[77px] text-primary-300">
                Our Mission Vision & Values.
              </h2>
              <p className="mt-4 text-gray-850">
                <span className="font-bold">Our vision</span> is to be the leading cleaning and
                janitorial services provider in Lagos and all over Nigeria. We strive to establish
                long-lasting relationships with our clients by consistently delivering high-quality
                services that exceed their expectations. Our aim is to be recognized as a trusted
                and reliable cleaning partner for commercial and industrial clients.
              </p>
            </div>
            <div className="flex-1 text-gray-850">
              <p>
                At Trevone Nigeria, <span>our mission</span> is to provide top-quality cleaning
                services that meet the needs of our clients. We aim to make the lives of our clients
                easier by taking care of their cleaning needs, so they can focus on their core
                business. Our goal is to deliver exceptional cleaning services that are customized
                to meet the unique needs of each client.
              </p>
              <p className="mt-6">
                At Trevone Nigeria, we believe in providing honest, transparent, and professional
                services. We are committed to delivering high-quality services that are tailored to
                meet the needs of our clients. Our <span className="font-bold">core values</span>{' '}
                include:
              </p>
              <ul className="col-span-2 mt-3 grid max-w-2xl grid-cols-2 gap-2">
                {coreValues.map((value) => (
                  <li className="flex space-x-2 text-lg">
                    <CheckMark />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-200 py-10 sm:py-16">
        <div className="container mx-auto">
          <Testimonials />
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="container mx-auto">
          <Title subTitle="Get to Know the Remarkable People Behind the Scenes at Trevone Nigeria">
            Our fast, friendly, professional, house-cleaning team is up for every job.{' '}
          </Title>
        </div>
        <Team />
      </section>
    </>
  );
};

export default Index;
