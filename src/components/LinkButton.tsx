import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface LinkButtonProps {
  variant?: "primary" | "outline";
  classes?: string;
  children: React.ReactNode;
  href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant = "primary",
  classes,
  children,
  href,
}) => {
  return (
    <Link
      className={clsx(
        "border-primary-100 font-open-sans rounded-full border px-5 py-3 font-semibold",
        variant === "primary" && "bg-primary-100 text-white",
        variant === "outline" && "text-gray-950",
        classes
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
