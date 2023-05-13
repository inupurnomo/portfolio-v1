import {motion} from "framer-motion";
import {AiOutlineStar} from "react-icons/ai";
import {BiGitBranch} from "react-icons/bi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-light1 py-5 font-bodyFont text-[13px] dark:bg-dark1">
      <motion.div
        initial={{y: 10, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.1}}
        className="flex flex-col items-center"
      >
        <div className="flex flex-row gap-1 py-7">
          © {new Date().getFullYear()}
          <Link
            href="https://inupurnomo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 hover:text-textPrimary"
          >
            inupurnomo
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex gap-2">
            <li className="flex gap-1 text-sm">
              <span className="mt-1 text-textPrimary">
                <AiOutlineStar />
              </span>
              6,214
            </li>
            <li className="flex gap-1 text-sm">
              <span className="mt-1 text-textPrimary">
                <BiGitBranch />
              </span>
              7,176
            </li>
          </ul>
        </div>
      </motion.div>
    </footer>
  );
}
