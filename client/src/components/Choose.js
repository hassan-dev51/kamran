import React from "react";
import { motion } from "framer-motion";
import about from "./m 1.png";
import Testimonials from "./Testimonials";
const About = () => {
  return (
    <>
      <div className="bg-[#F9D342] rounded-tr-[100px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center py-10"
        >
          <h2 className="md:text-6xl text-2xl">About Us</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 md:px-6 px-4 gap-3">
          <p className="text-justify text-xl">
            Welcome to ArrBase sports! We are a team of dedicated professionals
            who are passionate about bringing you the best products at
            affordable prices. Our mission is to provide our customers with a
            seamless and enjoyable shopping experience, whether they are looking
            for the latest fashion trends or everyday essentials. <br />
            <br /> We carefully create our product selection to ensure that we
            offer a wide variety of high-quality products that cater to a
            diverse customer base. From home decor to clothing to beauty
            products, we have something for everyone.We value our customers and
            strive to provide excellent customer service. If you have any
            questions or concerns, please don't hesitate to reach out to us. We
            are always happy to help.Thank you for choosing us as your go-to
            destination for all your shopping needs. We look forward to serving
            you and hope you have a great experience on our website. <br />
            <br />
            In a space where there are hundreds of manufacturers providing the
            same services, what makes us{" "}
            <strong className="uppercase">unique</strong> is the mechanisms
            we’ve built over time to ensure providing the best services
            continuously. Our monitor & Reward program encourages our staff in
            giving out their best each day. This approach helped us in
            maintaining a high performance standard through which we built long
            term relations with our clients. It is the confidence we have on the
            capacity of our team.
          </p>
          <div className="flex justify-center items-center">
            <img src={about} alt="about" />
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default About;
