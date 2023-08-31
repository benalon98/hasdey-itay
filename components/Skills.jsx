import React, { useEffect, useState } from "react";
//  useInView hook
import { useInView } from "react-intersection-observer";
// react circular
import { CircularProgressbar } from "react-circular-progressbar";
// react circular styles
import "react-circular-progressbar/dist/styles.css";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
const Skills = ({donations}) => {


  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [fullBody, setFullBody] = useState(0);
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 100) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 5) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 24000) {
          setFullColor(fullColor + 500);
        }
        if (temporary < 100) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, fullBody, piercing, fullBody, temporary]);

  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#EEEEEE",
    },
    text: {
      fill: "#111111",
      fontSize: "24px",
    },
  };

  return (
    <>
    <div classNameName="bg-black p-4 rounded-full w-1/2 mx-auto shadow-xl">      
    <h5 classNameName="text-center text-white  lg:text-6xl">התרומות האחרונות</h5>
</div>
      <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap space-y-6 -mx-1 lg:-mx-4">

{donations.map((donation)=> <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">

<article className="overflow-hidden rounded-2xl shadow-lg">

  

    <header className="flex items-center justify-center leading-tight px-2 md:p-6">
        <h1 className="text-xl font-black">
                {donation.ClientName}
        </h1>
  
  
    </header>
    <div classNameName="flex justify-center items-center">
<span classNameName="lg:text-4xl ">₪{donation.Amount}
</span></div>
    <footer className="flex items-center text-center justify-center leading-none h-20 p-2 md:p-6">
      
            <p className="ml-2 text-sm text-gray-400">
            {donation.Comments}

            </p>
     
    
    </footer>

</article>

</div>)}
        

      
        
    </div>
</div>
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      classNameName="section font-primary"
    >


      <div classNameName="container mx-auto">
        <div classNameName="flex flex-col xl:flex-row justify-between items-center gap-y-12">
          <div classNameName="w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={fullBody}
              maxValue={500}
              text={`${fullBody}+`}
            />
            <div classNameName="uppercase font-light tracking-[1.2px] text-center">
              מנות בכל יום
            </div>
          </div>
          <div classNameName="w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6">
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              maxValue={5}
              value={piercing}
              text={`${piercing}`}
            />
            <div classNameName="uppercase font-light tracking-[1.2px] text-center">
              ימים בשבוע
            </div>
          </div>
          <div classNameName="w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6">
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={fullColor}
              maxValue={60000}
              text={`${fullColor}+`}
            />
            <div classNameName="uppercase font-light tracking-[1.2px] text-center">
              מנות בשנה
            </div>
          </div>
          <div classNameName="w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6">
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={temporary}
              text={`${temporary}%`}
            />
            <div classNameName="uppercase font-light tracking-[1.2px] text-center">
              חסד ואהבת ישראל
            </div>
          </div>
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default Skills;
