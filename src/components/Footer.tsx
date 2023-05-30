import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LinkButton } from './LinkButton';

export const Footer = () => {
  const aboutLinks = [
    {
      title: 'About Us',
      href: '/about'
    },
    {
      title: 'Our Team',
      href: '/about/#team'
    },
    {
      title: 'Our Services',
      href: '/services'
    },
    {
      title: 'Testimonials',
      href: '/#testimonials'
    },
    {
      title: 'Contact Us',
      href: '/contact'
    }
  ];
  const servicesLinks = [
    {
      title: 'Janitorial / General Cleaning',
      href: '/services/#janitorial'
    },
    {
      title: 'Carpet & Upholstery Cleaning',
      href: '/services/#carpet'
    },
    {
      title: 'Industrial Cleaning',
      href: '/services/#industrial'
    },
    {
      title: 'Floor Restoration & Cleaning',
      href: '/services/#floor'
    },
    {
      title: 'Fumigation & Pest Control',
      href: '/services/#fumigation'
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
    <footer className="border-t border-t-gray-750 bg-white pb-6 pt-12">
      <div className="container mx-auto">
        <div className="justify-between text-center sm:grid sm:grid-cols-3 sm:text-left lg:grid-cols-5">
          <div className="mb-4 grid justify-center sm:justify-start">
            <Image src="/assets/logo.png" width={164} height={64} alt="trevone logo" />
          </div>
          <div className="col-span-2 grid gap-y-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-6">
            <div className="order-2 sm:order-1">
              <h3 className="text-xl font-bold">About</h3>
              <ul className="mt-4 space-y-3">
                {aboutLinks.map(({ href, title }, index) => (
                  <li className="py-1 text-lg" key={index}>
                    <Link href={href} className="text-gray-850 hover:text-gray-900">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-3 sm:order-2 lg:col-span-2">
              <h3 className="text-xl font-bold">Services</h3>
              <ul className="mt-4 space-y-3">
                {servicesLinks.map(({ href, title }, index) => (
                  <li className="py-1 text-lg" key={index}>
                    <Link href={href} className="text-gray-850 hover:text-gray-900">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-4 sm:order-3 lg:ml-2">
              <h3 className="text-xl font-bold">Help</h3>
              <ul className="mt-4 space-y-3">
                <li className="py-1 text-lg">
                  <Link href="/#faq" className="text-gray-850 hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
                <li className="py-1 text-lg">
                  <Link href="/contact" className="text-gray-850 hover:text-gray-900">
                    Get in Touch
                  </Link>
                </li>
              </ul>
              <ul className="mt-3 flex items-center justify-center space-x-3 sm:justify-start">
                {socialLinks.map(({ href, title, icon }, index) => (
                  <li className="py-1 text-lg" key={index}>
                    <Link href={href} title={title}>
                      <Image src={icon} width={28} height={28} alt={title} />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="pb-1 pt-2 font-open-sans font-semibold text-gray-850 hover:text-gray-900">
                @trevonenigeria
              </p>
            </div>
            <div className="order-1 sm:order-4 lg:col-span-2 lg:pl-8">
              <h3 className="text-xl font-bold">Make your booking</h3>
              <p className="mt-4 text-lg text-gray-850">
                We have a dedicated team of specialists for you.
              </p>
              <LinkButton
                href="/book"
                className="mt-6 w-full max-w-md px-6 text-center text-lg hover:bg-primary-300"
              >
                Book Cleaning
              </LinkButton>
              <p className="mt-5 flex items-center justify-center space-x-2 font-open-sans text-lg sm:justify-start lg:mt-12">
                <span>Call Us:</span>
                <Image src="/assets/icons/phone.svg" width={24} height={24} alt="phone" />
                <a
                  href="tel:+2348161165391"
                  className="font-bold text-gray-850 hover:text-gray-900"
                >
                  +234 816 116 5391
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <p className=" text-center font-open-sans text-lg text-gray-850">
          <span className="mr-2 inline-block align-middle">
            <svg
              width="41"
              height="38"
              viewBox="0 0 41 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9961 24.1953C20.0326 24.1953 19.1829 23.9967 18.4473 23.5996C17.7116 23.2025 17.1387 22.597 16.7285 21.7832C16.3184 20.9694 16.1133 19.944 16.1133 18.707C16.1133 17.4115 16.3281 16.3535 16.7578 15.5332C17.194 14.7064 17.793 14.0944 18.5547 13.6973C19.3164 13.3001 20.1823 13.1016 21.1523 13.1016C21.6862 13.1016 22.2005 13.1569 22.6953 13.2676C23.1966 13.3717 23.6068 13.5052 23.9258 13.668L23.4375 15.0254C23.112 14.8952 22.7344 14.778 22.3047 14.6738C21.8815 14.5697 21.4844 14.5176 21.1133 14.5176C20.3711 14.5176 19.7526 14.6771 19.2578 14.9961C18.7695 15.3151 18.4017 15.7839 18.1543 16.4023C17.9134 17.0208 17.793 17.7826 17.793 18.6875C17.793 19.5534 17.9102 20.2923 18.1445 20.9043C18.3854 21.5163 18.7402 21.985 19.209 22.3105C19.6842 22.6296 20.2767 22.7891 20.9863 22.7891C21.5527 22.7891 22.0638 22.7305 22.5195 22.6133C22.9753 22.4896 23.3887 22.3464 23.7598 22.1836V23.6289C23.4017 23.8112 23.0013 23.9512 22.5586 24.0488C22.1224 24.1465 21.6016 24.1953 20.9961 24.1953Z"
                fill="#485356"
              />
              <rect x="0.5" y="0.5" width="40" height="37" rx="18.5" stroke="#485356" />
            </svg>
          </span>{' '}
          2023 Trevone Nigeria. All rights reserved
        </p>
      </div>
    </footer>
  );
};
