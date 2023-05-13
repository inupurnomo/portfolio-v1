import {motion} from "framer-motion";
import {one, two, three} from "../../../public/assets";
import SectionTitle from "./part/SectionTitle";
import Image from "next/image";
import {TbBrandGithub} from "react-icons/tb";
import {RxOpenInNewWindow} from "react-icons/rx";
import Button from "./part/Button";

export default function Work() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-light2 px-12 dark:bg-dark2 mdl:px-0"
    >
      <div className="mx-auto flex max-w-contentContainer flex-col content-center justify-center gap-4 py-10 mdl:px-24 lgl:gap-8 xl:px-4">
        <SectionTitle title="Some Things I've Built" titleNo="03" />
        <div className="flex w-full flex-col items-center justify-between text-textLight mdl:text-textDark dark:mdl:text-textLight">
          {/* One */}
          <motion.div
            initial={{y: 10, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.1}}
            className="mt-10 flex w-full flex-col gap-28"
          >
            <div className="relative items-center justify-start gap-6 mdl:flex mdl:flex-row-reverse">
              <div className="top-150 relative right-0 z-20 flex w-full flex-col items-start px-10 py-10 text-left mdl:relative mdl:w-1/2 mdl:items-end mdl:px-0 mdl:py-0 mdl:text-right">
                <p className="tex-sm font-titleFont text-textPrimary">
                  Featured Project
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="duration-300 hover:text-textPrimary"
                >
                  <h3 className="mt-3 text-2xl font-bold">ReactBD</h3>
                </a>
                <p className="mb-5 mt-5 rounded-md text-left text-sm mdl:-ml-32 mdl:mb-0 mdl:mt-5 mdl:bg-light1 mdl:p-6 mdl:text-right mdl:dark:bg-dark1">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm. ’
                </p>
                <ul className="justify-left flex gap-2 py-5 font-titleFont text-sm text-light2 mdl:gap-5">
                  <li>NextJs</li>
                  <li>Typescript</li>
                  <li>Stripe</li>
                  <li>Next-auth</li>
                </ul>
                <div className="flex gap-4 text-2xl">
                  <a
                    className="duration-300 hover:text-textPrimary"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbBrandGithub />
                  </a>
                  <a
                    className="duration-300 hover:text-textPrimary"
                    href="#"
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
                  src={one}
                  alt="project1"
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-md bg-dark1 bg-opacity-90 duration-300 mdl:bg-textPrimary mdl:bg-opacity-50 mdl:hover:bg-opacity-0"></div>
              </a>
            </div>
          </motion.div>
          {/* Two */}
          <motion.div
            initial={{y: 10, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.1}}
            className="mt-10 flex w-full flex-col gap-28"
          >
            <div className="relative items-center justify-start gap-6 mdl:flex mdl:flex-row">
              <div className="top-150 relative right-0 z-20 flex w-full flex-col items-start px-10 py-10 text-left mdl:relative mdl:w-1/2 mdl:items-end mdl:px-0 mdl:py-0 mdl:text-right">
                <p className="tex-sm font-titleFont text-textPrimary">
                  Featured Project
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="duration-300 hover:text-textPrimary"
                >
                  <h3 className="mt-3 text-2xl font-bold">Spotify Profile</h3>
                </a>
                <p className="mb-5 mt-5 rounded-md text-left text-sm mdl:-mr-32 mdl:mb-0 mdl:mt-5 mdl:bg-light1 mdl:p-6 mdl:text-left mdl:dark:bg-dark1">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
                <ul className="justify-left flex gap-2 py-5 font-titleFont text-sm text-light2 mdl:gap-5">
                  <li>NextJs</li>
                  <li>Typescript</li>
                  <li>Stripe</li>
                  <li>Next-auth</li>
                </ul>
                <div className="flex gap-4 text-2xl">
                  <a
                    className="duration-300 hover:text-textPrimary"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbBrandGithub />
                  </a>
                  <a
                    className="duration-300 hover:text-textPrimary"
                    href="#"
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
                  src={two}
                  alt="project2"
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-md bg-dark1 bg-opacity-90 duration-300 mdl:bg-textPrimary mdl:bg-opacity-50 mdl:hover:bg-opacity-0"></div>
              </a>
            </div>
          </motion.div>
          {/* Three */}
          <motion.div
            initial={{y: 10, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.1}}
            className="mt-10 flex w-full flex-col gap-28"
          >
            <div className="relative items-center justify-start gap-6 mdl:flex mdl:flex-row-reverse">
              <div className="top-150 relative right-0 z-20 flex w-full flex-col items-start px-10 py-10 text-left mdl:relative mdl:w-1/2 mdl:items-end mdl:px-0 mdl:py-0 mdl:text-right">
                <p className="tex-sm font-titleFont text-textPrimary">
                  Featured Project
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="duration-300 hover:text-textPrimary"
                >
                  <h3 className="mt-3 text-2xl font-bold">
                    Build a Spotify Connected App
                  </h3>
                </a>
                <p className="mb-5 mt-5 rounded-md text-left text-sm mdl:-ml-32 mdl:mb-0 mdl:mt-5 mdl:bg-light1 mdl:p-6 mdl:text-right mdl:dark:bg-dark1">
                  Having struggled with understanding how the Spotify OAuth flow
                  works, I made the course I wish I could have had. Unlike
                  tutorials that only cover a few concepts and leave you with
                  half-baked GitHub repositories, this course covers everything
                  from explaining the principles of REST APIs to implementing
                  Spotify’s OAuth flow and fetching API data in a React app. By
                  the end of the course, you’ll have an app deployed to the
                  internet you can add to your portfolio.
                </p>
                <ul className="justify-left flex gap-2 py-5 font-titleFont text-sm text-light2 mdl:gap-5">
                  <li>NextJs</li>
                  <li>Typescript</li>
                  <li>Stripe</li>
                  <li>Next-auth</li>
                </ul>
                <div className="flex gap-4 text-2xl">
                  <a
                    className="duration-300 hover:text-textPrimary"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbBrandGithub />
                  </a>
                  <a
                    className="duration-300 hover:text-textPrimary"
                    href="#"
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
                  src={three}
                  alt="project3"
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-md bg-dark1 bg-opacity-90 duration-300 mdl:bg-textPrimary mdl:bg-opacity-50 mdl:hover:bg-opacity-0"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
