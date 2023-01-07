import React from "react";
import { motion } from "framer-motion";
import {
  MdHighQuality,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { GiOppositeHearts } from "react-icons/gi";
import { TbSocial } from "react-icons/tb";
import { BsBrightnessHigh } from "react-icons/bs";
import Testimonials from "./Testimonials";

const ChooseCard = ({ color, title, icon, subtitle }) => (
  <div className="flex md:flex-col flex-row justify-start items-start glassmorphism p-3 md:p-3 md:my-3 m-1 cursor-pointer hover:shadow-xl md:rounded-full rounded-3xl lg:w-2/4 md:w-full w-full">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center md:m-4 ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Choose = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center py-10"
      >
        <h2 className="md:text-6xl text-2xl">Why Choose Us</h2>
      </motion.div>
      <motion.div className="mx-3">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <ChooseCard
            color="bg-[#2952E3]"
            title="Quality Products"
            icon={<MdHighQuality fontSize={21} className="text-red" />}
            subtitle=" Customers often choose brands that offer high-quality products that are built to last. If your brand is known for producing durable, well-made products, this can be a major selling point.
"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex justify-end"
        >
          <ChooseCard
            color="bg-[#2952E3]"
            title="Exceptional Customer Service"
            icon={<RiCustomerService2Line fontSize={21} className="text-red" />}
            subtitle="Providing excellent customer service can be a key factor in why customers choose your brand. If your company has a reputation for going above and beyond to help customers, this can be a major advantage."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        >
          <ChooseCard
            color="bg-[#2952E3]"
            title="Competitive Prices"
            icon={<BiDollar fontSize={21} className="text-red" />}
            subtitle="Customers are always looking for the best value for their money, so offering competitive pricing can be a major factor in why they choose your brand.
"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="flex justify-end "
        >
          <ChooseCard
            color="bg-[#2952E3]"
            title="Wide Product Selection"
            icon={
              <MdOutlineProductionQuantityLimits
                fontSize={21}
                className="text-red"
              />
            }
            subtitle="Customers may choose your brand if you offer a wide selection of products that meet their needs and interests.
.
"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        >
          <ChooseCard
            color="bg-[#2952E3]"
            title="Social responsibility"
            icon={<TbSocial fontSize={21} className="text-red" />}
            subtitle="Some customers may choose your brand if you are known for being socially responsible and making a positive impact on the world. This can include things like environmentally-friendly practices, charitable giving, and more.
.
.
"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="flex justify-end "
        >
          <ChooseCard
            color="bg-[#2952E3]"
            title="Positive Brand Reputation"
            icon={<GiOppositeHearts fontSize={21} className="text-red" />}
            subtitle="If your brand has a positive reputation in the market, this can be a major reason why customers choose to do business with you. A good reputation can be built through consistent high-quality products and excellent customer service.

.
"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        >
          <ChooseCard
            color="bg-[#2952E3]"
            title="Innovation"
            icon={<BsBrightnessHigh fontSize={21} className="text-red" />}
            subtitle="Customers may choose your brand if you are known for being an innovative company that is constantly introducing new and improved products.
"
          />
        </motion.div>
      </motion.div>
      <Testimonials />
    </div>
  );
};

export default Choose;
