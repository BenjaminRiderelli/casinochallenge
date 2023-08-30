import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type EventCardProps = {
  img: StaticImport;
  title: string;
  price: string;
  description: string;
};

const EventCard = ({ title, description, img, price }: EventCardProps) => {
  return (
    <div className="rounded-xl">
      <Image
        src={img}
        alt="event-image"
        style={{
          borderTopRightRadius: "0.75rem",
          borderTopLeftRadius: "0.75rem",
        }}
      />
      <div className="flex flex-col gap-8 p-4 text-center bg-s-btn-color rounded-b-xl">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl">{title}</h2>
          <h2 className="text-3xl">${price}</h2>
          <p className=" text-md">{description}</p>
        </div>
        <button className="w-full rounded-lg bg-p-btn-color p-4">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
