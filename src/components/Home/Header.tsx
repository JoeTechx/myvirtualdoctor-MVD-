"use client";
import React from "react";
import AuthButton from "../button/AuthButton";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="h-full w-full bg-[#DFF4EF]">
      <>
        <section className="header-container">
          <div className="header_text-btn">
            <h1>
              Say <span className="text-[#01a69c]">Goodbye</span> To Long
              Waiting Times And Inconvenient{" "}
              <span className="text-[#01a69c]">Appointments</span>
            </h1>
            <p>
              At My Virtual Doctor, we're revolutionizing the way you access
              healthcare. our platform brings quality medical care right to your
              fingertips.
            </p>
            <AuthButton
              className="bg-[#46F1E7] px-[1rem] py-[0.3rem] font-medium rounded-[0.8rem] text-[0.9rem]"
              onClick={() => {}}
            >
              Chat Now
            </AuthButton>
          </div>
          <div className="header-image">
            <Image
              src="/images/home 1_layerstyle.png"
              width="634"
              height="488"
              alt="header-image"
            />
          </div>
        </section>
      </>
    </div>
  );
};
