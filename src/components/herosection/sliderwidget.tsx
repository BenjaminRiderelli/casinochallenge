import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Icon from "../icon";

type SliderWidgetProps = {
  icon: StaticImport;
  alt: string;
};
const SliderWidget = ({ icon, alt }: SliderWidgetProps) => {
  return (
    <div className="flex whitespace-nowrap items-center justify-center rounded-full bg-s-btn-color py-4 px-12 gap-4 cursor-pointer">
      <Icon image={icon} alt={alt} height={30} width={30} />
      <p>{alt}</p>
    </div>
  );
};

export default SliderWidget;
