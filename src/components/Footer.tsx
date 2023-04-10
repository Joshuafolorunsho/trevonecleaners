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
    <footer className="pt-12 border-t-2 border-t-gray-750 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-5">
          <div>
            <Image src="/assets/logo.png" width={164} height={64} alt="trevone logo" />
          </div>
          <div>
            <h3 className="text-lg font-bold">About</h3>
            <ul className="mt-4 space-y-3">
              {aboutLinks.map(({ href, title }) => (
                <li>
                  <Link href={href} className="text-gray-850 hover:text-gray-900">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="mt-4 space-y-3">
              {servicesLinks.map(({ href, title }) => (
                <li>
                  <Link href={href} className="text-gray-850 hover:text-gray-900">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
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
            <ul className="mt-3 flex items-center space-x-3">
              {socialLinks.map(({ href, title, icon }) => (
                <Link href={href} title={title}>
                  <Image src={icon} width={28} height={28} alt={title} />
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Make your booking</h3>
            <p className="mt-4 text-gray-850">
              We have a dedicated team of professionals who are ready to help you with your cleaning
              needs.
            </p>
            <Button className="mt-4 px-6 sm:px-12">Book Cleaning</Button>
            <p className="mt-4 flex items-center space-x-2">
              <span>Call Us:</span>
              <Image src="/assets/icons/phone.svg" width={24} height={24} alt="phone" />
              <a href="tel:+2349030179104" className="font-bold text-gray-850 hover:text-gray-900">
                +234 90 3017 9104
              </a>
            </p>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <p className="text-center text-gray-850">© 2023 Trevone Nigeria. All rights reserved</p>
      </div>
    </footer>
  );
};
