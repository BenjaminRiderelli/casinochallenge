import React from "react";
import ImageSlider from "./imageslider";
import { imageArray } from "@/assets/tier1/tier1";
import { imageArray2 } from "@/assets/tier2/tier2";



const FeaturedSection = () => {

  const shuffledImageArray = [...imageArray, ...imageArray2]
  const shuffledImageArray2 = [ ...imageArray2, ...imageArray,]

  return (
    <section className="flex flex-col justify-center px-4 gap-8 min-h-[calc(100vh-5rem)] bg-dark-bg-color md:px-32 ">
      <ImageSlider title="Popular" images={shuffledImageArray} />
      <ImageSlider title="New games" images={shuffledImageArray2} />
      <ImageSlider title="Mega ways" images={shuffledImageArray} />
    </section>
  );
};

export default FeaturedSection;
