import React from "react";
import { Button } from "./Button";

export const Header = () => {
  const navItems = [
    { name: "About", href: "/" },
    { name: "Our Services", href: "/" },
    { name: "Contact Us", href: "/" },
  ];

  return (
    <header className="container mx-auto flex h-24 items-center justify-between py-3">
      <a href="/">
        <img
          className="h-[64px] w-[164px]"
          src="/assets/logo.png"
          alt="trevone logo"
        />
      </a>
      <ul className="text-gray-850 flex items-center space-x-6 font-semibold">
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
        <Button>Book Now</Button>
        <Button variant="outline">
          +234 816 116 5891
        </Button>
      </ul>
    </header>
  );
};
