import Head from "next/head";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import {motion} from "framer-motion";
import Page404 from "./components/Page404";

export default function Custom404() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Page Not Found" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Page Not Found | INUPURNOMO</title>

        {/*
          - favicon
        */}
        <link
          rel="shortcut icon"
          href="./assets/icons/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <main className="w-full overflow-x-hidden overflow-y-hidden font-bodyFont text-textDark dark:text-textLight">
        <div className="w-full items-center justify-between gap-20 xl:flex">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.5}}
            className="fixed bottom-0 left-0 w-32 xl:inline-flex"
          >
            <LeftSide />
          </motion.div>
          <div className="mx-auto w-full">
            <Page404 />
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
