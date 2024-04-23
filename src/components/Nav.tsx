// @ts-nocheck
import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgGym } from "react-icons/cg";

const Nav = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };
  return (
    <header>
      <motion.nav
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className="py-5 bg-secondary-400 bg-opacity-50 w-full fixed top-0 z-50">
        <div className="container">
          <ul className="flex justify-center items-center lg:text-xl text-secondary-100 gap-x-4 lg:gap-x-10">
            <li className="nav-li">
              <a href="#about"> من نحن </a>
            </li>
            <li className="nav-li">
              <a href="#changes"> التغيرات </a>
            </li>
            <li>
              <CgGym className="text-6xl lg:text-7xl p-3 bg-white rounded-full text-primary-300 hover:scale-110 duration-300" />
            </li>
            <li className="nav-li">
              <a href="#services"> البرامج </a>
            </li>
            <li className="nav-li">
              <a href="contact"> اتصل بنا </a>
            </li>
          </ul>
        </div>
      </motion.nav>
    </header>
  );
};

export default Nav;
