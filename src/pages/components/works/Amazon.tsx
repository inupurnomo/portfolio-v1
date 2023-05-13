import {motion} from "framer-motion";
import {AiOutlineCaretRight} from "react-icons/ai";

export default function Amazon() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.1}}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer <span className="text-textPrimary tracking-wide">@Amazon</span>
      </h3>
      <p className="text-sm mt-1 font-medium">
        Jan 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2">
          <span className="text-textPrimary mt-1">
            <AiOutlineCaretRight />
          </span>
          Deliver high-quality, robust production code for a diverse array of
          projects for clients including Harvard Business School, Everytown for
          Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The
          19th News, and more
        </li>
        <li className="text-base flex gap-2">
          <span className="text-textPrimary mt-1">
            <AiOutlineCaretRight />
          </span>
          Work alongside creative directors to lead the research, development,
          and architecture of technical solutions to fulfill business
          requirements
        </li>
        <li className="text-base flex gap-2">
          <span className="text-textPrimary mt-1">
            <AiOutlineCaretRight />
          </span>
          Collaborate with designers, project managers, and other engineers to
          transform creative concepts into production realities for clients and
          stakeholders
        </li>
        <li className="text-base flex gap-2">
          <span className="text-textPrimary mt-1">
            <AiOutlineCaretRight />
          </span>
          Provide leadership within engineering department through close
          collaboration, knowledge shares, and mentorship
        </li>
      </ul>
    </motion.div>
  );
}
