import {motion} from "framer-motion";
import Button from "./part/Button";
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-light1 px-12 py-16 dark:bg-dark1 mdl:px-0"
    >
      <motion.div
        initial={{y: 10, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.1}}
        className="mx-auto flex flex-col items-center justify-center gap-4 mdl:px-24 mdl:py-40 lgl:gap-8 xl:px-4"
      >
        <p className="flex items-center font-titleFont text-lg font-semibold tracking-wide text-textPrimary">
          04. What’s Next?
        </p>
        <div className="pt-26 flex flex-col gap-16 lgl:flex-row">
          <div className="flex w-full flex-col items-center gap-4 text-base font-medium">
            <h2 className="text-center font-titleFont text-5xl font-semibold">
              Get In Touch
            </h2>
            <p className="mx:max-w-[650px] mb-12 flex max-w-[630px] flex-col py-2 text-center text-base font-medium">
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
            <a href="mailto:contact@inupurnomo.com">
              <Button name="Say Hello" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
