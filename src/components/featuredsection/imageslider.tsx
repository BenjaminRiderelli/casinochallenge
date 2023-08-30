import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type imageObj = {
  src: StaticImport;
  alt: string;
};

type ImageSliderProps = {
  images: imageObj[];
  title: string;
};

const ImageSlider = ({ images, title }: ImageSliderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <h3>View more</h3>
      </div>
      <div className="flex gap-4 h-[150px] w-full overflow-x-scroll no-scrollbar">
        {images.map((image) => {
          const { src, alt } = image;
          return (
              <Image
                src={src}
                alt={alt}
                style={{ height: "150px", width: "150px", objectFit: "cover" }}
              />
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
