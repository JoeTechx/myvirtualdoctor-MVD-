import Image from "next/image";
import { ActivityCard } from "../card/ActivityCard";

export const OurActivity = () => {
    return (
      <>
        <section className="activity-container">
          <div className="activity-flex">
            <div className="activity-title">
              <h1>Our Activities</h1>
              <p>
                Facilitate consultations with globally-trained family medicine
                doctors and specialists.
              </p>
            </div>
            <div className="activity-line_image">
              <Image
                src="/images/Arrow 1.png"
                width="348"
                height="205"
                alt="activity arrow"
              />
            </div>
          </div>
          <div className="card">
        <ActivityCard />
          </div>
        </section>
      </>
    );
}