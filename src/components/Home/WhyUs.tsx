import Image from "next/image";
import { PlayAndStopCard } from "../card/PlayAndStopCard";

export const WhyUs = () => {
  return (
    <section className="why-us_container">
      <div className="why-us-details">
        <div className="why-us_image">
          <Image
            src="/images/1627_U1RVRElPIEtBVCAzNjItNzg-removebg-preview 1.png"
            width="353"
            height="296"
            alt="activity arrow"
          />
        </div>
        <div className="why-us_card">
          <h1>Why Choose My Virtual Doctor?</h1>
          <PlayAndStopCard />
        </div>
      </div>
      <div className="why-us_arrow">
        <Image
          src="/images/Arrow 1 (1).png"
          width="362"
          height="203"
          alt="activity arrow"
        />
      </div>
    </section>
  );
};
