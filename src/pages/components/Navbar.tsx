import {logo} from "../../../public/assets";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {useRef, useState} from "react";
import {MdOutlineClose} from "react-icons/md";
import Button from "./part/Button";
import DarkMode from "./part/DarkMode";

export default function Navbar() {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // update the classname
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <div className="pt fixed top-0 z-50 h-20 w-full bg-light1 bg-opacity-90 text-textDark shadow-navbarShadow backdrop-blur-md dark:bg-bodyDark dark:text-textLight lg:h-20">
      <div className="mx-auto flex h-full w-full items-center justify-between px-12 py-1 font-titleFont text-2xl">
        <Link href={"/"}>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
          >
            <Image className="w-14" src={logo} alt="logo" priority={true} />
            {/* &lt;Dig/&gt; */}
          </motion.div>
        </Link>
        <div className="hidden items-center gap-7 mdl:inline-flex">
          <ul className="flex gap-7 text-[13px]">

            <Link
              onClick={handleScroll}
              href="#about"
              className="nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-textPrimary "
            >
              <motion.li
                initial={{y: -10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.1, delay: 0.1}}
              >
                <span className="text-textPrimary">01.</span> About
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#experience"
              className="nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-textPrimary"
            >
              <motion.li
                initial={{y: -10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.1, delay: 0.2}}
              >
                <span className="text-textPrimary">02.</span> Experience
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#projects"
              className="nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-textPrimary"
            >
              <motion.li
                initial={{y: -10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.1, delay: 0.3}}
              >
                <span className="text-textPrimary">03.</span> Work
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#contact"
              className="nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-textPrimary"
            >
              <motion.li
                initial={{y: -10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.1, delay: 0.4}}
              >
                <span className="text-textPrimary">04.</span> Contact
              </motion.li>
            </Link>
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{y: -10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.1, delay: 0.5}}
                className="h-full flex flex-col justify-center"
              >
                <Button name="Resume" size="small" />
              </motion.div>
            </a>
            <motion.div
              initial={{x: 20, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.6}}
              className="flex items-center text-xl"
            >
              <DarkMode />
            </motion.div>
          </ul>
        </div>
        <motion.div
          initial={{y: -10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.1}}
          onClick={() => setShowMenu(true)}
          className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-textPrimary mdl:hidden"
        >
          <span className="inline-flex h-[2px] w-full transform bg-textPrimary transition-all duration-300 ease-in-out group-hover:translate-x-2"></span>
          <span className="inline-flex h-[2px] w-full translate-x-3 transform bg-textPrimary transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="inline-flex h-[2px] w-full translate-x-1 transform bg-textPrimary transition-all duration-300 ease-in-out group-hover:translate-x-3"></span>
        </motion.div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute right-0 top-0 flex h-screen w-full flex-col items-end bg-black bg-opacity-50 mdl:hidden"
          >
            <motion.div
              initial={{x: 20, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.1}}
              className="scrollbarHide relative flex h-full w-[80%] flex-col items-center overflow-y-scroll bg-bodyLight px-4 py-10 text-textDark dark:bg-bodyDark dark:text-textLight"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="absolute right-4 top-4 cursor-pointer text-3xl text-textPrimary hover:text-red-500"
              />
              <div>
                <ul className="flex flex-col gap-7 text-[13px]">
                  <Link
                    onClick={handleScroll}
                    href="#home"
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-textPrimary"
                  >
                    <motion.li
                      initial={{x: 20, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration: 0.2, delay: 0.1, ease: "easeIn"}}
                    >
                      <span className="text-textPrimary">00.</span> Home
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#about"
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-textPrimary"
                  >
                    <motion.li
                      initial={{x: 20, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration: 0.1, delay: 0.1}}
                    >
                      <span className="text-textPrimary">01.</span> About
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#experience"
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-textPrimary"
                  >
                    <motion.li
                      initial={{x: 20, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration: 0.1, delay: 0.2}}
                    >
                      <span className="text-textPrimary">02.</span> Experience
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#projects"
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-textPrimary"
                  >
                    <motion.li
                      initial={{x: 20, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration: 0.1, delay: 0.3}}
                    >
                      <span className="text-textPrimary">03.</span> Work
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#contact"
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium duration-300 hover:text-textPrimary"
                  >
                    <motion.li
                      initial={{x: 20, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration: 0.1, delay: 0.4}}
                    >
                      <span className="text-textPrimary">04.</span> Contact
                    </motion.li>
                  </Link>
                  <a
                    href="#resume"
                    className="flex items-center justify-center "
                  >
                    <motion.div
                      initial={{x: 20, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      transition={{duration: 0.1, delay: 0.5}}
                    >
                      <Button name="Resume" size="small" />
                    </motion.div>
                  </a>
                  <motion.div
                    initial={{x: 20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.1, delay: 0.6}}
                    className="flex items-center justify-center text-3xl text-textLight duration-300 hover:text-textPrimary"
                  >
                    <DarkMode />
                  </motion.div>
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
