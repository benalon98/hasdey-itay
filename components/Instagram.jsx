// import data
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import Image from "next/image";


const Instagram = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
      <motion.div
    variants={fadeIn("right")}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.4 }}
    ref={ref}
className="w-[90%] shadow-2xl h-[80%] rounded-2xl py-4 my-20 mx-auto"> 

<Image
            src={"/points.webp"}
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
</motion.div>
  );
};

export default Instagram;
