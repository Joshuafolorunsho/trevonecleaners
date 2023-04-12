import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface LinkButtonProps {
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
  href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant = "primary",
  className,
  children,
  href,
}) => {
  return (
    <Link
      className={clsx(
        "border-primary-100 font-open-sans rounded-full border inline-block px-5 py-3 font-semibold",
        variant === "primary" && "bg-primary-100 text-white",
        variant === "outline" && "text-gray-950",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
