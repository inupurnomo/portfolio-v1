import React, {useState} from "react";
import {motion} from "framer-motion";
import SectionTitle from "./part/SectionTitle";
import ReactBD from "./works/ReactBD";
import Google from "./works/Google";
import Apple from "./works/Apple";
import Splash from "./works/Splash";
import Amazon from "./works/Amazon";

export default function Experience() {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleApple = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleSplash = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };
  return (
    <section
      id="experience"
      className="bg-light2 px-12 text-textDark dark:bg-dark2 dark:text-textLight mdl:px-0"
    >
      <div className="mx-auto flex min-h-screen max-w-contentContainer flex-col content-center gap-4 px-0 py-10 mdl:px-28 lgl:gap-8 xl:px-52">
        <SectionTitle title="Where I've Worked" titleNo="02" />
        <div className="mb-10 mt-10 flex w-full flex-col gap-7 md:flex-row">
          <ul className="flex flex-col md:w-32">
            <motion.li
              initial={{y: -10, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.2, delay: 0.1, ease: "easeIn"}}
              onClick={handleReactbd}
              className={`${
                workReactbd
                  ? "border-l-textPrimary text-textPrimary"
                  : "border-l-textDark dark:border-l-textLight"
              } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-sm font-medium duration-300 hover:bg-hoverColor`}
            >
              ReactBD
            </motion.li>
            <motion.li
              initial={{y: -10, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.2, delay: 0.2, ease: "easeIn"}}
              onClick={handleGoogle}
              className={`${
                workGoogle
                  ? "border-l-textPrimary text-textPrimary"
                  : "border-l-textDark dark:border-l-textLight"
              } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-sm font-medium duration-300 hover:bg-hoverColor`}
            >
              Google
            </motion.li>
            <motion.li
              initial={{y: -10, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.2, delay: 0.3, ease: "easeIn"}}
              onClick={handleApple}
              className={`${
                workApple
                  ? "border-l-textPrimary text-textPrimary"
                  : "border-l-textDark dark:border-l-textLight"
              } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-sm font-medium duration-300 hover:bg-hoverColor`}
            >
              Apple
            </motion.li>
            <motion.li
              initial={{y: -10, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.2, delay: 0.4, ease: "easeIn"}}
              onClick={handleSplash}
              className={`${
                workSplash
                  ? "border-l-textPrimary text-textPrimary"
                  : "border-l-textDark dark:border-l-textLight"
              } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-sm font-medium duration-300 hover:bg-hoverColor`}
            >
              Splash
            </motion.li>
            <motion.li
              initial={{y: -10, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.2, delay: 0.5, ease: "easeIn"}}
              onClick={handleAmazon}
              className={`${
                workAmazon
                  ? "border-l-textPrimary text-textPrimary"
                  : "border-l-textDark dark:border-l-textLight"
              } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-sm font-medium duration-300 hover:bg-hoverColor`}
            >
              Amazon
            </motion.li>
          </ul>
          <motion.div
            initial={{x: 20, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.6, ease: "easeIn"}}
          >
            {workReactbd && <ReactBD />}
            {workGoogle && <Google />}
            {workApple && <Apple />}
            {workSplash && <Splash />}
            {workAmazon && <Amazon />}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
