import Image from "next/image";
import { PlayAndStopCard } from "../card/PlayAndStopCard";

export const WhyUs = () => {
  return (
    <section className="why-us_container">
      <div className="why-us_image">
        <Image
          src="/images/1627_U1RVRElPIEtBVCAzNjItNzg-removebg-preview 1.png"
          width="348"
          height="205"
          alt="activity arrow"
        />
      </div>
          <div className="why-us_card">
              <PlayAndStopCard />
      </div>
    </section>
  );
}
