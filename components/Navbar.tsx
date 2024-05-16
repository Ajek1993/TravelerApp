"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href={"/"}>
          <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={74} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map(({ href, key, label }) => (
            <Link
              href={href}
              key={key}
              className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
            >
              {label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => handleClick()}
        />
      </nav>
      {isNavOpen && <MobileNavbar />}
    </>
  );
}
