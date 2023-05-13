import SectionTitle from "./part/SectionTitle";
import Image from "next/image";
import {profileImg} from "../../../public/assets";
import {
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiNextdotjs,
} from "react-icons/si";
import {motion} from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-light2 px-12 text-textDark dark:bg-dark2 dark:text-textLight mdl:px-0"
    >
      <div className="mx-auto flex min-h-screen max-w-contentContainer flex-col content-center justify-center gap-4 py-10 mdl:px-24 lgl:gap-8 xl:px-4">
        <SectionTitle title="Who is this guy?" titleNo="01" />
        <div className="mr-10 flex flex-col gap-16 pt-10 mdl:flex-row">
          <div className="flex w-full flex-col gap-4 text-base font-medium mdl:w-2/3">
            <motion.div
              initial={{y: 10, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.1}}
            >
              <p>
                Hello! My name is Ilham Ibnu Purnomo and I enjoy creating things
                that live on the internet. My interest in web development
                started back in 2012 when I decided to try editing custom Tumblr
                themes — turns out hacking together a custom reblog button
                taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>
              <p>Tech Stack:</p>
            </motion.div>
            <motion.div
              initial={{y: 10, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.5}}
              className="mt-3 flex w-full flex-wrap gap-2 text-sm lg:px-5"
            >
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiCss3 className="text-textPrimary" /> CSS3
              </div>
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiHtml5 className="text-textPrimary" /> HTML5
              </div>
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiJavascript className="text-textPrimary" /> JavaScript
              </div>
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiMysql className="text-textPrimary" /> MySQL
              </div>
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiNodedotjs className="text-textPrimary" /> NodeJs
              </div>
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiPhp className="text-textPrimary" /> PHP
              </div>
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiPostgresql className="text-textPrimary" /> PostgreSQL
              </div>
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiTailwindcss className="text-textPrimary" /> Tailwindcss
              </div>
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiNextdotjs className="text-textPrimary" /> NextJs
              </div>
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiPython className="text-textPrimary" /> Python
              </div>
              <div className="flex transform cursor-default items-center gap-2 rounded-lg border-2 border-textPrimary px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
                <SiLinux className="text-textPrimary" /> Linux
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{y: 10, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.6}}
            className="group relative mx-auto flex h-full w-full items-center justify-center text-center mdl:w-1/3 "
          >
            <div>
              <div className="relative z-20 flex transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <Image
                  className="h-full w-full rounded-lg"
                  src={profileImg}
                  alt="profileImg"
                  priority={true}
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-md bg-textPrimary/60 duration-300 group-hover:bg-transparent lgl:inline-block"></div>
              </div>
            </div>
            <div className="absolute left-2 top-2 h-full w-full rounded-md border-2 border-textPrimary transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 lgl:inline-flex"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
