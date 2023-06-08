import {useState} from "react";
import ArchiveCard from "./part/ArchiveCard";
import {motion} from "framer-motion";
import Button from "./part/Button";

export default function Archive() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="min-h-screen bg-light2 px-6 dark:bg-dark2 mdl:px-0">
      <div className="mx-auto flex max-w-contentContainer flex-col content-center justify-center gap-4 py-10 md:px-6 mdl:px-24 lgl:gap-8 xl:px-4">
        <div className="flex w-full flex-col items-center">
          <h2 className="font-titleFont text-3xl font-semibold">
            Other Noteworthy Project
          </h2>
          <h3 className="font-titleFont text-sm text-textPrimary">
            view the archive
          </h3>
        </div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5}}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lgl:px-10 xl:grid-cols-3"
        >
          <ArchiveCard
            title="Integrating Algolia Search with Wordpress Multisite"
            des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
            listItem={["ReactJs", "Vercel"]}
            link="https://www.google.com"
            github="https://www.instagram.com"
          />
          <ArchiveCard
            title="Integrating Algolia Search with Wordpress Multisite"
            des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
            listItem={["ReactJs"]}
            link="https://www.google.com"
            github="https://www.instagram.com"
          />
          <ArchiveCard
            title="Integrating Algolia Search with Wordpress Multisite"
            des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
            listItem={["ReactJs"]}
            link="https://www.google.com"
            github="https://www.instagram.com"
          />
          <ArchiveCard
            title="Integrating Algolia Search with Wordpress Multisite"
            des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
            listItem={["ReactJs"]}
            link="https://www.google.com"
            github="https://www.instagram.com"
          />
          <ArchiveCard
            title="Integrating Algolia Search with Wordpress Multisite"
            des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
            listItem={["ReactJs"]}
            link="https://www.google.com"
            github="https://www.instagram.com"
          />
          <ArchiveCard
            title="Integrating Algolia Search with Wordpress Multisite"
            des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
            listItem={["ReactJs"]}
            link="https://www.google.com"
            github="https://www.instagram.com"
          />
          {showMore && (
            <>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.1}}
              >
                <ArchiveCard
                  title="Integrating Algolia Search with Wordpress Multisite"
                  des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
                  listItem={["ReactJs"]}
                  link="https://www.google.com"
                  github="https://www.instagram.com"
                />
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.2}}
              >
                <ArchiveCard
                  title="Integrating Algolia Search with Wordpress Multisite"
                  des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
                  listItem={["ReactJs"]}
                  link="https://www.google.com"
                  github="https://www.instagram.com"
                />
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.3}}
              >
                <ArchiveCard
                  title="Integrating Algolia Search with Wordpress Multisite"
                  des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
                  listItem={["ReactJs"]}
                  link="https://www.google.com"
                  github="https://www.instagram.com"
                />
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.4}}
              >
                <ArchiveCard
                  title="Integrating Algolia Search with Wordpress Multisite"
                  des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
                  listItem={["ReactJs"]}
                  link="https://www.google.com"
                  github="https://www.instagram.com"
                />
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.5}}
              >
                <ArchiveCard
                  title="Integrating Algolia Search with Wordpress Multisite"
                  des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
                  listItem={["ReactJs"]}
                  link="https://www.google.com"
                  github="https://www.instagram.com"
                />
              </motion.div>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.6}}
              >
                <ArchiveCard
                  title="Integrating Algolia Search with Wordpress Multisite"
                  des="Building a custom multisite compatible WordPress plugin to build global search with Algolia"
                  listItem={["ReactJs"]}
                  link="https://www.google.com"
                  github="https://www.instagram.com"
                />
              </motion.div>
            </>
          )}
        </motion.div>
        <div className="mt-16 flex w-full items-center justify-center">
          {showMore ? (
            <div onClick={() => setShowMore(false)}>
              <Button name="Show Less" />
            </div>
          ) : (
            <div onClick={() => setShowMore(true)}>
              <Button name="Show More" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
