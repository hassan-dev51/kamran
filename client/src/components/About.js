import React from "react";
import { motion } from "framer-motion";
import About from "./Choose";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { choose } from "../constants/choose";

const Choose = () => {
  return (
    <>
      <div className="bg-[#F9F9F9]">
        <div className="text-center md:py-10 py-3">
          <h2 className="md:text-6xl text-2xl">Why US</h2>
          <p>Let's take a look at our Company </p>
        </div>
        <motion.div>
          <VerticalTimeline lineColor="rgba(225, 225, 225, 0.42)">
            {choose.map((item) => (
              <VerticalTimelineElement
                contentStyle={{
                  background: "transparent",
                  color: "rgba(0, 0, 0, 0.68)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  transparent",
                }}
                iconStyle={{
                  background: "#F9D342",
                  color: "#fff",
                }}
                icon={item.icon}
                key={item.id}
              >
                <h3 className="text-black">{item.name}</h3>

                <p>{item.desc} </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
      <About />
    </>
  );
};

export default Choose;
