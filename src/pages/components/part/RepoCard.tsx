import React, {useEffect, useState} from "react";
import {BiGitRepoForked, BiStar} from "react-icons/bi";
import RepoSkeleton from "./RepoSkeleton";
import SectionTitle from "./SectionTitle";
import {motion} from "framer-motion";

export default function RepoCard({repos}: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (repos) {
      setTimeout(() => {
        setLoading(false);
      }, 1100);
    }
  }, [repos]);
  return (
    <section className="min-h-screen bg-light2 px-12 text-textDark dark:bg-dark2 dark:text-textLight mdl:px-0">
      <div className="xl:px-4l mx-auto flex min-h-screen max-w-contentContainer flex-col content-center justify-center gap-4 py-10 mdl:px-24 lgl:gap-8">
        <SectionTitle title="Open Source" />
        <motion.h2
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2}}
          className="text-center font-titleFont font-semibold text-textPrimary"
        >
          Some open source repositories I’ve published or contributed to
        </motion.h2>
        <div
          className="mt-3 grid w-full grid-cols-1 gap-4 px-12 mdl:grid-cols-2 mdl:px-0"
        >
          {repos &&
            repos
              .sort(
                (
                  a: {stargazers_count: number},
                  b: {stargazers_count: number}
                ) => {
                  if (a.stargazers_count > b.stargazers_count) return -1;
                  else if (a.stargazers_count < b.stargazers_count) return 1;
                  return 0;
                }
              )
              .map(
                (item: {
                  id: React.Key | null | undefined;
                  html_url: string | undefined;
                  name:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | null
                    | undefined;
                  stargazers_count:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | null
                    | undefined;
                  forks_count:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | null
                    | undefined;
                  description:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | null
                    | undefined;
                  topics: any[];
                }) => {
                  return loading ? (
                    <RepoSkeleton key={item.id} />
                  ) : (
                    <div
                      key={item.id}
                      className="transform rounded-lg border-2 border-dark2 bg-dark1 p-6 text-textLight transition-transform ease-in hover:scale-[1.02] hover:shadow-lg"
                    >
                      <article>
                        <header className="mb-2 flex items-center justify-between">
                          <a
                            href={item.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sh-blue hover:text-sh-blue-500 inline-block text-lg font-bold transition ease-in hover:text-textLink"
                          >
                            {item.name}
                          </a>
                          <div className="flex cursor-default items-center gap-2">
                            <div className="flex items-center">
                              <BiStar />
                              <span className="ml-1">
                                {item.stargazers_count}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <BiGitRepoForked />
                              <span className="ml-1">{item.forks_count}</span>
                            </div>
                          </div>
                        </header>

                        <p className="text-sh-white-500 h-12 overflow-hidden">
                          {item.description}
                        </p>

                        <p className="mt-3 flex cursor-default gap-2">
                          {item.topics.slice(0, 3).map((topic, index) => (
                            <span
                              className="overflow-hidden truncate rounded-3xl bg-dark2 px-2 text-sm"
                              key={index}
                            >
                              {topic}
                            </span>
                          ))}
                        </p>
                      </article>
                    </div>
                  );
                }
              )}
        </div>
      </div>
    </section>
  );
}
