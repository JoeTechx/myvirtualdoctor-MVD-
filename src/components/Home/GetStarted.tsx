'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthButton from "../button/AuthButton";

export const GetStarted = () => {
  return (
    <section className="getstarted-container">
      <div className="getstarted-flex">
        <h2 className="getstarted-text">Get Started Today</h2>
        <p className="getstarted-des">
          Take control of your health with My virtual Doctor.{" "}
          <Link href="" className="getstarted-des_link">
            Sign up
          </Link>{" "}
          now to access expert medical advice at your fingertips
        </p>
        <AuthButton
          className="getstarted-link_btn"
          onClick={() => {}}
        >
          Sign up
        </AuthButton>
      </div>
      <div className="getstarted-image">
        <Image
          src="/images/vecteezy_healthcare-professional-holding-a-stethoscope_2133122-removebg-preview 1.png"
          alt="image"
          width="904"
          height="474"
        />
      </div>
    </section>
  );
};
