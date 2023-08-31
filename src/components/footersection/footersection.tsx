import React from "react";
import { footerImagesArray } from "@/assets/footersection";
import certificateImg from "@/assets/footersection/squareimg.svg";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  const footerImagesElements = footerImagesArray.map((img) => {
    const { src, alt } = img;

    return (
      <div
        style={{
          width: "100%",
          height: "30px",
          position: "relative",
          zIndex: 0,
        }}
      >
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </div>
    );
  });

  return (
    <footer className="flex flex-col md:flex-row gap-8 px-8 py-8 md:py-0 mb-20 md:mb-0 pb-8 min-h-screen md:min-h-full bg-s-btn-color">
      <div className="flex justify-around gap-4 h-10 md:hidden">
        {footerImagesElements}
      </div>
      <div className="flex flex-col md:flex-row md:justify-around md:w-1/2 gap-8 md:p-8 h-full">
        <div className="flex flex-col gap-8">
          <h3 className="text-xl font-semibold">Information</h3>
          <ul className="flex flex-col md:gap-3">
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Payments</Link>
            </li>
            <li>
              <Link href="/">Support</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">How to crypto</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-xl font-semibold">Legal</h3>
          <ul className="flex flex-col md:gap-3">
            <li>
              <Link href="/">Terms and conditions</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Responsible Gaming</Link>
            </li>
            <li>
              <Link href="/">Registration Procedure</Link>
            </li>
            <li>
              <Link href="/">KYC Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:items-center rounded-lg w-full md:w-1/2 h-full md:h-1/2 md:gap-16 p-4 md:p-8 gap-4 border md:border-0">
        <div className="hidden md:flex w-full">
          {footerImagesElements}
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center">
          <div className="flex justify-center w-full">
            <Image src={certificateImg} alt="certification img" width={60} />
          </div>
          <p className="text-xs leading-2 tracking-wide">
            This website is operated by R&B Innovations N.V., a company
            registered and established under the laws of Curaçao, with
            registration number 156744 and registered address at Heelsumstraat
            51 E-Commerce Park, Willemstad, Curaçao. It wholly owns the
            subsidiary for payment processing, Double Down Interactive Ltd, a
            company registered under the laws of Cyprus, with registration
            number 419951 and registered address at Chytron, 30, 2nd floor,
            Flat/Office A22, 1075, Nicosia, Cyprus.R&B Innovations N.V. is
            licensed to conduct online gaming operations by the Government of
            Curacao, under Master License No. 8048,Sub-License JAZ2021-012.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
