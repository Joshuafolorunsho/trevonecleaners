import React from "react";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "outline";
  classes?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  classes,
  children,
}) => {
  return (
    <button
      className={clsx(
        "border-primary-100 font-open-sans rounded-full border px-5 py-3 font-semibold",
        variant === "primary" && "bg-primary-100 text-white",
        variant === "outline" && "text-gray-950",
        classes
      )}
    >
      {children}
    </button>
  );
};
