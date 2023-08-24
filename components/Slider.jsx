import React from "react";
import { aboutData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const { title, subtitle1, subtitle2 } = aboutData;
  return (
    <section className="lg:py-16 xl:pb-[60px] bg-gray-100 about-section text-right">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
          {/* numbers */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col lg:flex-row flex-1"
          >
            <div className="text-[260px] xl:text-[520px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-left-top bg-clip-text text-transparent">
              10
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 h-full xl:mt-48 " 
          >
            <div className="flex flex-col items-end">

            <h2 className="h2 font-bold">{title}</h2>
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle1}</p>
                <p className="mb-9 opacity-50">{subtitle2}</p>
              </div>
            </div>
            <a href="https://www.matara.pro/nedarimplus/online/?mosad=7002417" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
<span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
</span>
<span className="relative text-white">לחץ לתרומה</span>
</a>
<div className="flex flex-col py-6 items-end">
  <div className="max-w-[530px] text-grey">
    <p className="mb-6 font-black">לתרומה - בביט: 
052-810-5744
</p>
  </div>
</div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
