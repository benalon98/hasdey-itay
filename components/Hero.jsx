import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import VideoModal from './VideoModal';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = ({heading, message}) => {
  return (
<section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover"  src="/videoBg.mp4" type="video/mp4" autoPlay muted loop></video>
    </div>
    <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="container video-content mx-auto min-h-[40vh]  lg:h-full  flex items-center justify-center xl:justify-center"
      >
        {/* text & btn */}
        <div className="text-white  text-center lg:text-left lg:max-w-[640px]">
          <motion.h1 variants={fadeIn("down")} className="h1 font-black">
            {heading}
          </motion.h1>
          <motion.p
            variants={fadeIn("down")}
            className="mb-8 text-center lg:mb-16 max-w-lg opacity-20 leading-relaxed"
          >
        {message}
          </motion.p>
          <motion.div className="" variants={fadeIn("down")}>
          <VideoModal videoId="mOHgi9PQ-_8" />

          </motion.div>
     
        </div>
      </motion.div>
</section>

  );
};

export default Hero;
