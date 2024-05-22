"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import  { navLinks } from "../../../constant/index";
import AuthButton from "@/components/button/AuthButton";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const route = usePathname();

  return (
    <div className="bg-[#DFF4EF]">
      <div className="nav-width flex justify-between items-center pt-4">
        <div>
          <Image src="/images/logo.png" height="70" width="70" alt="Logo" />
        </div>
        <div className="flex justify-between flex-col items-center">
          <nav className="center-nav">
            <ul className="flex">
              {navLinks.map((link) => (
                <li key={link.route} className="mx-4">
                  <Link href={link.route}>
                    <p className={route === link.route ? "active" : ""}>
                      {link.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2 auth-button">
          <Button
            className="bg-transparent hover:bg-transparent border-none text-[#000000] font-medium text-[1rem]"
            onClick={() => {}}
          >
            Log In
          </Button>
          <AuthButton
            className="bg-[#46F1E7] px-[1rem] py-[0.3rem] font-medium rounded-[0.8rem] text-[0.9rem]"
            onClick={() => {}}
          >
            Chat Now
          </AuthButton>
        </div>
      </div>
    </div>
  );
};
