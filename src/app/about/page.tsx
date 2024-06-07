"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();

  const handleRouter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    alert("GO HOME!! Come back in year 2050");
    router.push("/");
  };

  return (
    <div
      onClick={handleRouter}
      style={{cursor: "pointer" }}
      className="about-btn"
    >
      About me
    </div>
  );
};
export default AboutPage;
