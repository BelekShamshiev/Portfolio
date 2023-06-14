import React, { useRef } from "react";
import s from "./Experience.module.scss";
import { motion, useAnimationFrame } from "framer-motion";

const Experience = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -20;
    ref1.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 870)) * -25;
    ref2.current.style.transform = `translateY(${y}px) `;
  });


  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.cards}>
          <motion.div
            ref={ref1}
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.card}
          >
            <img src="/Programador.svg" alt="Programador" />
            <h2>1 год </h2>
            <h1>Програмист</h1>
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.card}
          >
            <img src="/Trabalhos.png" alt="Trabalhos" />
            <h2>1 год </h2>
            <h1>Обучения</h1>
          </motion.div>

        </div>
        <div
          className={s.category}
        >
          <motion.div
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
          className={s.category_title}>
            <h4>Desenvolvedor</h4>
            <h3>Front-end</h3>
          </motion.div>
          <motion.div
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
          className={s.category_title}>
            <h4>It academy</h4>
            <h3>Codifay</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
