import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {SlArrowUp} from "react-icons/sl";

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.classList.remove("text-textPrimary");
  });
};

export default function BackToTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.button
        className={`fixed bottom-5 right-5 rounded-full bg-textLink p-3 duration-300 hover:text-textPrimary ${
          scrollY > 900 ? "inline-block" : "hidden"
        }`}
        onClick={scrollToTop}
      >
        <SlArrowUp />
      </motion.button>
    </>
  );
}
