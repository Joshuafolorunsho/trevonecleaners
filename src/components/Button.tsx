import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children }) => {
  return (
    <button
      className={clsx(
        'rounded-full border border-primary-100 px-6 py-3 font-open-sans font-semibold',
        variant === 'primary' && 'bg-primary-100 text-white',
        variant === 'primary' && 'hover:bg-primary-300',
        variant === 'outline' && 'text-gray-950',
        variant === 'outline' && ' hover:bg-primary-300 hover:text-white',
        className
      )}
    >
      {children}
    </button>
  );
};
