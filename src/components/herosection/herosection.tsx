import Image from "next/image";
import casinoGuy from "@/assets/herosection/casinoguy.svg";



import SliderWidget from "./sliderwidget";
import heartIcon from "@/assets/icons/heart.svg";
import rocket from "@/assets/icons/rocket.svg";
import slotIcon from "@/assets/icons/slots.svg";
import megawaysIcon from "@/assets/icons/megaways.svg";
import instantWin from "@/assets/icons/watch.svg";
import tableGamesIcon from "@/assets/icons/chips.svg";
import dropsAndWinsIcon from "@/assets/icons/cube.svg";
import booksIcon from "@/assets/icons/book.svg";

const HeroSection = () => {
  const widgetsArray = [
    { icon: slotIcon, alt: "Slots" },
    { icon: rocket, alt: "Jackpots" },
    { icon: megawaysIcon, alt: "Megaways" },
    { icon: instantWin, alt: "Instant Win" },
    { icon: tableGamesIcon, alt: "Table Games" },
    { icon: heartIcon, alt: "Popular" },
    { icon: dropsAndWinsIcon, alt: "Drops and wins" },
    { icon: booksIcon, alt: "Books" },
  ];

  return (
    <section className="flex flex-col justify-between md:justify-start pt-8 md:pt-0 min-h-[calc(100vh-10rem)] md:min-h-full ">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end px-10 min-h-full pt-4 md:pt-0 md:h-[calc(55vh)] md:px-12  lg:px-32 bg-[url('https://res.cloudinary.com/djcaqznth/image/upload/v1693423019/herobanner_vipogi.png')] bg-cover">
        <div className="flex flex-col items-center md:items-start md:justify-center md:h-full gap-8 md:w-2/5 ">
          <h3 className="text-2xl">The crypto thrill!</h3>
          <h2 className="text-3xl md:text-4xl font-black text-center md:text-start">
            100% UP TO $500 AND 200 FREE SPINS!
          </h2>
          <button className="rounded-md text-lg font-semibold bg-p-btn-color p-3 px-8 cursor-pointer active:scale-95">
            Join now!
          </button>
        </div>
          <Image src={casinoGuy} alt="guy" />
      </div>
      <div className="flex overflow-x-scroll items-center w-full pt-4 text-xl md:text-lg gap-4 px-4 pb-10 no-scrollbar md:px-12  lg:px-32 ">
        {widgetsArray.map((widget) => {
          const { icon, alt } = widget;
          return <SliderWidget icon={icon} alt={alt} />;
        })}
      </div>
    </section>
  );
};

export default HeroSection;
