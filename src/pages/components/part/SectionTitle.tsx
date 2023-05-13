import {motion} from "framer-motion";
interface Props {
  title: string;
  titleNo?: string;
}
export default function SectionTitle({title, titleNo}: Props) {
  return (
    <div className="mt-16">
      <motion.h2
        initial={{x: 10, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.1}}
        className="flex items-center font-titleFont text-2xl font-semibold"
      >
        {titleNo && (
          <span className="mr-2 text-base text-textPrimary md:text-lg">
            {titleNo}.
          </span>
        )}

        {title}
        <span className="ml-6 hidden h-[2px] bg-gray-700 dark:bg-slate-400 md:inline-flex md:w-48 lgl:w-72"></span>
      </motion.h2>
    </div>
  );
}
