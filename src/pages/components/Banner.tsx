import {motion} from "framer-motion";
import Button from "./part/Button";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import Link from "next/link";
import {AiOutlinePhone, AiOutlineMail} from "react-icons/ai";
import {MdOutlineSms} from "react-icons/md";
import TextHover from "./part/TextHover";

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({});
};

export default function Banner() {
  const [skills] = useTypewriter({
    words: [
      "Web Developer",
      "UI/UX Designer",
      "Full-Stack Developer",
      "Software Engineer",
    ],
    loop: 0,
  });
  return (
    <section id="home" className="bg-light1 px-12 dark:bg-bodyDark mdl:px-0">
      <div className="mx-auto flex min-h-screen max-w-contentContainer flex-col content-center justify-center gap-4 py-10 mdl:px-24 lgl:gap-8 xl:px-4">
        <motion.h3
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.6}}
          className="font-titleFont text-lg tracking-wide text-textPrimary mdl:py-5 "
        >
          Hi 👋🏾! my name is
        </motion.h3>
        <motion.h1
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.7}}
          className="flex flex-col font-descFont text-4xl font-semibold mdl:text-6xl"
        >
          Ilham Ibnu Purnomo.
          <span className="gap-2 lgl:mt-4">
            I’am a
            <div className="lg:4xl text-2xl text-textLink mdl:text-3xl">
              {skills}
              <Cursor cursorStyle="<" />
            </div>
          </span>
        </motion.h1>
        <motion.p
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.8}}
          className="mx:max-w-[650px] mb-12 text-base font-medium mdl:max-w-[600px] mdl:py-7"
        >
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products.{" "}
          <Link href={"#about"} onClick={handleScroll}>
            <TextHover text="Who is this guy?" />
          </Link>
        </motion.p>
        <motion.div
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.9}}
        >
          <Link href={"open-source"}>
            <Button name="Check out my open-source!" />
          </Link>
        </motion.div>
      </div>
      <div className="relative flex items-center justify-center gap-1 px-7 py-7 text-xs mdl:bottom-20 mdl:right-14 mdl:justify-end">
        <motion.div
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 1}}
        >
          hire me :
        </motion.div>
        <a href="mailto:contact@inupurnomo.com">
          <motion.div
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 1.1}}
            className="border border-textLink px-2 py-2 duration-300 hover:bg-hoverColor"
          >
            <AiOutlineMail />
          </motion.div>
        </a>
        <a href="#">
          <motion.div
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 1.2}}
            className="border border-textLink px-2 py-2 duration-300 hover:bg-hoverColor"
          >
            <AiOutlinePhone />
          </motion.div>
        </a>
        <a href="#">
          <motion.div
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 1.3}}
            className="border border-textLink px-2 py-2 duration-300 hover:bg-hoverColor"
          >
            <MdOutlineSms />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
