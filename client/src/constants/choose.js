import { BiDollar } from "react-icons/bi";
import { BsBrightnessHigh } from "react-icons/bs";
import { GiOppositeHearts } from "react-icons/gi";
import {
  MdHighQuality,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbSocial } from "react-icons/tb";

export const choose = [
  {
    id: 1,
    name: "Quality Products",
    desc: "Customers often choose brands that offer high-quality products that are built to last. If your brand is known for producing durable, well-made products, this can be a major selling point.",
    icon: <MdHighQuality />,
  },
  {
    id: 2,
    name: "Exceptional Customer Service",
    desc: "Providing excellent customer service can be a key factor in why customers choose your brand. If your company has a reputation for going above and beyond to help customers, this can be a major advantage.",
    icon: <RiCustomerService2Line />,
  },
  {
    id: 3,
    name: "Competitive Prices",
    desc: "Customers are always looking for the best value for their money, so offering competitive pricing can be a major factor in why they choose your brand.",
    icon: <BiDollar />,
  },
  {
    id: 4,
    name: "Wide Product Selection",
    desc: "Customers may choose your brand if you offer a wide selection of products that meet their needs and interests.",
    icon: <MdOutlineProductionQuantityLimits />,
  },
  {
    id: 5,
    name: "Social responsibility",
    desc: "Some customers may choose your brand if you are known for being socially responsible and making a positive impact on the world. This can include things like environmentally-friendly practices, charitable giving, and more.",
    icon: <TbSocial />,
  },
  {
    id: 6,
    name: "Positive Brand Reputation",
    desc: "If your brand has a positive reputation in the market, this can be a major reason why customers choose to do business with you. A good reputation can be built through consistent high-quality products and excellent customer service.",
    icon: <GiOppositeHearts />,
  },
  {
    id: 7,
    name: "Innovation",
    desc: "Customers may choose your brand if you are known for being an innovative company that is constantly introducing new and improved products.",
    icon: <BsBrightnessHigh />,
  },
];
