import React from 'react';

import { LinkButton } from '.';
import Image from 'next/image';

interface ServiceProps {
  number: string;
  title: string;
  description: React.ReactNode;
  image: string;
  isTextLeft?: boolean;
}

export const Service: React.FC<ServiceProps> = ({ title, description, image, isTextLeft }) => {
  return (
    <section>
      <div>
        <h2 className="font-outline-2 font-lato text-[80px] font-bold text-white">01</h2>
        <h3 className="font-lato font-bold text-gray-950 text-4xl">Janitorial / General cleaning service</h3>
        <div className="my-6">{description}</div>
        <LinkButton href="/book" variant="outline">
          Book now
        </LinkButton>
      </div>
      <div>
    <Image src={image} width={598} height={500} alt=''  />
      </div>
    </section>
  );
};
