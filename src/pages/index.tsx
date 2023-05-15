import Head from "next/head";
import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import {motion} from "framer-motion";
import Project from "./components/Project";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import Education from "./components/Education";
import BackToTop from "./components/part/BackToTop";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="I am Ilham Ibnu Purnomo, " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>INUPURNOMO</title>

        {/*
          - favicon
        */}
        <link
          rel="shortcut icon"
          href="./assets/icons/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <main className="w-full overflow-x-hidden overflow-y-hidden font-bodyFont text-textDark dark:text-textLight">
        <div className="w-full items-center justify-between gap-20 xl:flex">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.5}}
            className="fixed bottom-0 left-0 z-50 w-32 xl:inline-flex"
          >
            <LeftSide />
          </motion.div>
          <div className="mx-auto w-full">
            <Banner />
            <About />
            <Experience />
            <Education />
            <Project />
            <Archive />
            <Contact />
            <Footer />
            <BackToTop />
          </div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.5}}
            className="fixed -right-6 top-0 w-32 xl:inline-flex"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
