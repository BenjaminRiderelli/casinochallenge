import React from "react";
import ImageSlider from "./imageslider";
import { imageArray } from "@/assets/tier1/tier1";
import { imageArray2 } from "@/assets/tier2/tier2";



const FeaturedSection = () => {


  return (
    <section className="flex flex-col px-4 gap-8 min-h-[calc(100vh-5rem)] bg-dark-bg-color">
      <ImageSlider title="Popular" images={imageArray} />
      <ImageSlider title="New games" images={imageArray2} />
      <ImageSlider title="Mega ways" images={imageArray} />
    </section>
  );
};

export default FeaturedSection;
