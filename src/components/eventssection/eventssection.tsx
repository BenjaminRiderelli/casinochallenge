import React from "react";
import EventCard from "./eventcard";
import cardOneImage from "@/assets/cards/card1.jpg";
import cardTwoImage from "@/assets/cards/card2.png"

const EventsSection = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-baseline pt-8  px-4 md:px-32 gap-8 min-h-screen md:min-h-full pb-16 bg-dark-bg-color">
      <EventCard
        title="Grand casino battle"
        description="It's time to hunt for the casino Multiplier"
        img={cardOneImage}
        price="15000"
      />
      <EventCard
        title="Grand casino battle"
        description="It's time to hunt for the casino Multiplier"
        img={cardTwoImage}
        price="15000"
      />
    </section>
  );
};

export default EventsSection;
