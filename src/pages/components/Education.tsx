import {motion} from "framer-motion";
import SectionTitle from "./part/SectionTitle";
// import {data} from "./data"
import { Personal } from "@/data";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-light1 px-6 text-textDark dark:bg-dark1 dark:text-textLight mdl:px-0"
    >
      <div className="mx-auto flex min-h-screen max-w-contentContainer flex-col content-center justify-center gap-2 md:px-6 mdl:px-24 lgl:gap-8 xl:px-4">
        <SectionTitle title="Education" />
        <motion.h2
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.1}}
          className="text-xl text-textLink"
        >
          Where I’ve Studied
        </motion.h2>
        <div className="flex w-full flex-col gap-4 pt-10 text-textLight mdl:flex-col">
          {Personal.School &&
            Personal.School.map(function (edu) {
              return (
                <motion.div
                  key={edu.id}
                  initial={{y: -10, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: 0.5, delay: 0.2}}
                >
                  <div className="group cursor-pointer rounded-md bg-dark3 p-8 transition-all duration-300 hover:translate-x-2">
                    <h1 className="text-2xl font-semibold text-textPrimary">
                      {edu.school}
                    </h1>
                    <div>{edu.major}</div>
                    <div>{edu.graduate}</div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
