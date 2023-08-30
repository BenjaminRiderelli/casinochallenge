import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type IconProps = {
  onClick?: React.MouseEventHandler;
  image: StaticImport;
  alt: string;
  height?:number
  width?:number
};

const Icon = ({ image, alt, onClick, height=40, width=40}: IconProps) => {
  return (
    <Image onClick={onClick} alt={alt} width={width} height={height} src={image} />
  );
};

export default Icon;
