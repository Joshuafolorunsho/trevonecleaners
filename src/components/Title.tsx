import React from 'react';
import clsx from 'clsx';

interface TitleProps {
  classes?: string;
  subTitle?: string;
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ classes, subTitle, children }) => {
  return (
    <div className={clsx('mx-auto max-w-3xl text-center text-gray-950', classes)}>
      <h3 className="font-lato text-3xl font-semibold sm:text-4xl">{children}</h3>
      {subTitle && <p className="mt-2 font-open-sans">{subTitle}</p>}
    </div>
  );
};
