import {motion} from "framer-motion";
import SectionTitle from "./part/SectionTitle";
import Image from "next/image";
import {TbBrandGithub} from "react-icons/tb";
import {RxOpenInNewWindow} from "react-icons/rx";
import {Projects} from "@/data";

export default function Project() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-light2 px-12 dark:bg-dark2 mdl:px-0"
    >
      <div className="mx-auto flex max-w-contentContainer flex-col content-center justify-center gap-4 py-10 mdl:px-24 lgl:gap-8 xl:px-4">
        <SectionTitle title="Some Things I've Built" titleNo="03" />
        <div className="flex w-full flex-col items-center justify-between text-textLight mdl:text-textDark dark:mdl:text-textLight">
          {Projects &&
            Projects.map(function (proj) {
              return (
                <motion.div
                  key={proj.id}
                  initial={{y: 10, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: 0.5, delay: 0.1}}
                  className="mt-10 flex w-full flex-col gap-28"
                >
                  <div
                    className={`relative items-center gap-6 mdl:flex ${
                      proj.id % 2 == 0 ? "mdl:flex-row-reverse" : "mdl:flex-row"
                    }`}
                  >
                    <div
                      className={`top-150 relative right-0 z-20 flex w-full flex-col items-start px-10 py-10 mdl:relative mdl:w-1/2 mdl:px-0 mdl:py-0 ${
                        proj.id % 2 == 0 ? "mdl:items-end" : "mdl:items-start"
                      }`}
                    >
                      <p className="tex-sm font-titleFont text-textPrimary">
                        Featured Project
                      </p>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="duration-300 hover:text-textPrimary"
                      >
                        <h3 className="mt-3 text-2xl font-bold">
                          {proj.title}
                        </h3>
                      </a>
                      <p
                        className={`mb-5 mt-5 rounded-md text-left text-sm mdl:mb-0 mdl:mt-5 mdl:bg-light1 mdl:p-6 mdl:dark:bg-dark1 ${
                          proj.id % 2 == 0
                            ? "mdl:-ml-32 mdl:text-right"
                            : "mdl:-mr-32 mdl:text-left"
                        }`}
                      >
                        {proj.desc}
                      </p>
                      <ul className="justify-left flex gap-2 py-5 font-titleFont text-sm text-light2 mdl:gap-5">
                        {proj.category &&
                          proj.category.map(function (cat, i) {
                            return (
                              <li key={i} className="cursor-pointer">
                                {cat}
                              </li>
                            );
                          })}
                      </ul>
                      <div className="flex gap-4 text-2xl">
                        <a
                          className="duration-300 hover:text-textPrimary"
                          href={proj.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TbBrandGithub />
                        </a>
                        <a
                          className="duration-300 hover:text-textPrimary"
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <RxOpenInNewWindow />
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="group absolute left-0 top-0 h-full w-full mdl:relative mdl:w-1/2"
                    >
                      <Image
                        className="h-full w-full rounded-md object-cover"
                        src={proj.image}
                        alt={`project${proj.id}`}
                      />
                      <div className="absolute left-0 top-0 h-full w-full rounded-md bg-dark1 bg-opacity-90 duration-300 mdl:bg-textPrimary mdl:bg-opacity-50 mdl:hover:bg-opacity-0"></div>
                    </a>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
