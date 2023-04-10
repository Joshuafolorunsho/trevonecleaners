import React from "react";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
}) => {
  return (
    <button
      className={clsx(
        "border-primary-100 font-open-sans rounded-full border px-6 py-3 font-semibold",
        variant === "primary" && "bg-primary-100 text-white",
        variant === "outline" && "text-gray-950",
        className
      )}
    >
      {children}
    </button>
  );
};
