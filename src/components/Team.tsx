import Image from 'next/image';
import React from 'react';

export const Team = () => {
  const teams = [
    {
      name: 'John Doe',
      position: 'CEO',
      image: '/assets/about/team-1.png',
      twitterUrl: '#',
      facebookUrl: '#',
      instagramUrl: '#'
    },
    {
      name: 'Joseph Doe',
      position: 'CEO',
      image: '/assets/about/team-2.png',
      twitterUrl: '#',
      facebookUrl: '#',
      instagramUrl: '#'
    },
    {
      name: 'Obadina Abiola',
      position: 'CEO',
      image: '/assets/about/team-3.png',
      twitterUrl: '#',
      facebookUrl: '#',
      instagramUrl: '#'
    },
    {
      name: 'Joshua Doe',
      position: 'CEO',
      image: '/assets/about/team-4.png',
      twitterUrl: '#',
      facebookUrl: '#',
      instagramUrl: '#'
    }
  ];
  return (
    <div className="container mx-auto">
      <div className="mt-6  flex flex-wrap sm:mt-12">
        {teams.map(({ name, position, image, twitterUrl, facebookUrl, instagramUrl }) => (
          <div key={name} className="mb-8 w-full px-4 md:w-1/2 lg:w-1/4">
            <Image src={image} width={360} height={360} alt={name} />
            <h3 className="mt-4 text-primary-300 font-bold">{name}</h3>
            <p className="my-2 text-gray-750">{position}</p>
            <ul className="flex items-center space-x-2">
              <li>
                <a href={twitterUrl}>
                  <Image src="/assets/icons/twitter.svg" width={28} height={28} alt="twitter" />
                </a>
              </li>
              <li>
                <a href={facebookUrl}>
                  <Image src="/assets/icons/facebook.svg" width={28} height={28} alt="facebook" />
                </a>
              </li>
              <li>
                <a href={instagramUrl}>
                  <Image src="/assets/icons/instagram.svg" width={28} height={28} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
