import React from "react";
import clsx from "clsx";

interface TitleProps {
  classes?: string;
  subTitle?: string;
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ classes, subTitle, children }) => {
  return (
    <div
      className={clsx("mx-auto max-w-3xl text-center text-gray-950", classes)}
    >
      <h3 className="font-lato text-4xl font-semibold">
       {children}
      </h3>
      {subTitle && <p className="font-open-sans mt-2">{subTitle}</p>}
    </div>
  );
};
