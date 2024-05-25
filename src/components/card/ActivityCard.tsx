import Image from "next/image";
import Link from "next/link";

export const ActivityCard = () => {
  return (
    <div className="activity-flex_card">
      <div className="activity-card">
        <div className="activit-card_img">
          <Image src="/images/Group 54.png" alt="card image" width="102" height="114" />
        </div>
        <h4>Virtual Consultations:</h4>
        <p>
          This includes the ability for patients to describe their symptoms and
          many more via chat
        </p>
        <Link href="">Chat Now </Link>
      </div>
      <div className="activity-card">
        {" "}
        <div className="activit-card_img">
          <Image src="/images/Group 55.png" alt="card image" width="94" height="113" />
        </div>
        <h4>Symptom Assessment:</h4>
        <p>
          Offer a symptom assessment tool to help patients evaluate their
          symptoms and assess medical urgency.
        </p>
        <Link href="">Chat Now </Link>
      </div>
      <div className="activity-card">
        {" "}
        <div className="activit-card_img">
          <Image src="/images/Group 56.png" alt="card image" width="94" height="114" />
        </div>
        <h4>Prescription Services:</h4>
        <p>
          conveniently access necessary medications without the need for
          in-person visits to a healthcare provider.
        </p>
        <Link href="">Chat Now</Link>
      </div>
    </div>
  );
};
