import React from "react";
import { footerData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  // destructure footer data
  const { about, links, program, newsletter } = footerData;
  return (
    <footer className="bg-dark section">
      <div className="container mx-auto">
        {/* grid */}
        <motion.div
          variants={staggerContainer}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col lg:flex-col lg:justify-center items-center text-white gap-x-5 gap-y-14"
        >
          {/* about */}
          <motion.div
            variants={fadeIn("up")}
            className="flex-1 flex flex-col gap-y-6"
          >
            {/* title */}
            <div className="font-primary text-xl uppercase tracking-[0.08em]">
              {about.title}
            </div>
            {/* subtitle */}
        
            {/* address & phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold text-[#DBDBDB]">
              {/* address */}
              <div className="flex items-center gap-x-[10px]">
                <div>{about.address.icon}</div>
                <div>{about.address.name}</div>
              </div>
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <div>{about.phone.icon}</div>
                <div>{about.phone.number}</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
