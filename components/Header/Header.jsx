import React from "react";
import s from "./Header.module.scss";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <a href="#">
          {" "}
          <motion.img
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.header_logo}
            src="/Logo.svg"
            alt="logo"
          />
        </a>

        <ul>
          <motion.li
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            <a href="#">Home</a>
          </motion.li>


          <motion.li
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            <a href="#skill">Skills</a>
          </motion.li>
         
         
          <motion.li
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            <a href="#contact">Contato</a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
