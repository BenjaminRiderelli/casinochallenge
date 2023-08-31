"use client";
import { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
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
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? 1 : 0));
  const next = () =>
    setCurr((curr) => (curr === 1 ? 0 : 1));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex gap-4">
          <h3 className="cursor-pointer">
            <Link href="/">View more</Link>
          </h3>
          <div className="flex gap-2">
            <button
              // disabled={curr === 0}
              onClick={prev}
              className="hidden md:block  border w-[25px] rounded-full active:scale-95 active:bg-p-btn-color"
            >
              {"<"}
            </button>
            <button
              // disabled={curr >= 1}
              onClick={next}
              className="hidden md:block border w-[25px] rounded-full active:scale-95 active:bg-p-btn-color"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      {/* <div
        style={{ transform: `translateX(-${curr * 100}%)` }}
        className="flex gap-4 md:h-[200px] w-full overflow-x-scroll md:overflow-hidden relative"
      > */}
      <div className="overflow-x-scroll md:overflow-hidden no-scrollbar">
        <div
          className="flex w-full transition-transform ease-out duration-500 gap-4 "
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {images.map((image) => {
            const { src, alt } = image;
            return (
              <Image
                src={src}
                alt={alt}
                style={{
                  minHeight: "150px",
                  maxHeight: "250px",
                  maxWidth: "250px",
                  objectFit: "cover",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
//no-scrollbar
export default ImageSlider;
