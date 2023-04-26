import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './Button';

export const Footer = () => {
  const aboutLinks = [
    {
      title: 'About Us',
      href: '#'
    },
    {
      title: 'Our Team',
      href: '#'
    },
    {
      title: 'Our Services',
      href: '#'
    },
    {
      title: 'Testimonials',
      href: '#'
    },
    {
      title: 'Contact Us',
      href: '#'
    }
  ];
  const servicesLinks = [
    {
      title: 'Janitorial / General Cleaning',
      href: '#'
    },
    {
      title: 'Carpet & Upholstery Cleaning',
      href: '#'
    },
    {
      title: 'Industrial Cleaning',
      href: '#'
    },
    {
      title: 'Floor Restoration & Cleaning',
      href: '#'
    },
    {
      title: 'Fumigation & Pest Control',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: '/assets/icons/facebook.svg',
      title: 'Facebook',
      href: '#'
    },
    {
      icon: '/assets/icons/twitter.svg',
      title: 'Twitter',
      href: '#'
    },
    {
      icon: '/assets/icons/instagram.svg',
      title: 'Instagram',
      href: '#'
    }
  ];
  return (
    <footer className="border-t border-t-gray-750 pb-6 pt-12">
      <div className="container mx-auto">
        <div className="justify-center text-center sm:grid sm:grid-cols-3 sm:text-left lg:grid-cols-5">
          <div className="mb-4 grid justify-center sm:justify-start">
            <Image src="/assets/logo.png" width={164} height={64} alt="trevone logo" />
          </div>
          <div className="col-span-2 grid justify-center gap-y-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
            <div className="order-2 sm:order-1">
              <h3 className="text-lg font-bold">About</h3>
              <ul className="mt-4 space-y-3">
                {aboutLinks.map(({ href, title }, index) => (
                  <li key={index}>
                    <Link href={href} className="text-gray-850 hover:text-gray-900">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-3 sm:order-2">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="mt-4 space-y-3">
                {servicesLinks.map(({ href, title }, index) => (
                  <li key={index}>
                    <Link href={href} className="text-gray-850 hover:text-gray-900">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-4 sm:order-3">
              <h3 className="text-lg font-bold">Help</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-gray-850 hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-850 hover:text-gray-900">
                    Get in Touch
                  </Link>
                </li>
              </ul>
              <ul className="mt-3 flex items-center justify-center space-x-3 sm:justify-start">
                {socialLinks.map(({ href, title, icon }, index) => (
                  <li key={index}>
                    <Link href={href} title={title}>
                      <Image src={icon} width={28} height={28} alt={title} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 sm:order-4">
              <h3 className="text-lg font-bold">Make your booking</h3>
              <p className="mt-4 text-gray-850">We have a dedicated team of specialists for you.</p>
              <Button className="mt-4 w-full px-6 hover:bg-primary-300">Book Cleaning</Button>
              <p className="mt-4 flex items-center justify-center space-x-2 sm:justify-start">
                <span>Call Us:</span>
                <Image src="/assets/icons/phone.svg" width={24} height={24} alt="phone" />
                <a
                  href="tel:+2349030179104"
                  className="font-bold text-gray-850 hover:text-gray-900"
                >
                  +234 90 3017 9104
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <p className="text-center text-gray-850">© 2023 Trevone Nigeria. All rights reserved</p>
      </div>
    </footer>
  );
};
