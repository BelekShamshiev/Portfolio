import React, { useRef } from "react";
import s from "./Hero.module.scss";
import { motion, useAnimationFrame } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -14;
    ref.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 850)) * -20;
    ref2.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 1000)) * -20;
    ref3.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -10;
    ref5.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 850)) * -10;
    ref6.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 900)) * -10;
    ref7.current.style.transform = `translateY(${y}px) `;
  });
  return (
    <div className={s.container}>
      <div className={s.content}>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.podmobil}
        >
          <motion.a
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            href=""
          >
            <img src="/linkedin.svg" alt="in" />
          </motion.a>
          <motion.a
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            href=""
          >
            <img src="/githubHeader.png" alt="github" />
          </motion.a>
          <motion.a
            initial="hidden"
            transition={{ duration: 1 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            href=""
          >
            <img src="/behance.svg" alt="behance" />
          </motion.a>
        </motion.div>
        <div className={s.title}>
          <motion.button
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            👋 Привет
          </motion.button>
          <motion.h1
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            Shamshiev Belek
          </motion.h1>
          <motion.h2
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            Front-end developer
          </motion.h2>
          <div className={s.sotcial_network}>
            <motion.a
              ref={ref5}
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              href=""
            >
              <img src="/linkedin.svg" alt="in" />
            </motion.a>
            <motion.a
              ref={ref6}
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              href=""
            >
              <img src="/githubHeader.png" alt="github" />
            </motion.a>
            <motion.a
              ref={ref7}
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              href=""
            >
              <img src="/behance.svg" alt="behance" />
            </motion.a>
          </div>
        </div>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.5 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.images}
        >
          <img src="/hero.png" alt="hero_img" />
          <motion.div
            ref={ref}
            initial="hidden"
            transition={{ duration: 0.8 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.hero_stack}
          >
            <img src="/React.png" alt="react" />
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            transition={{ duration: 0.8 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.hero_stack}
          >
            <img src="/TypeScript.png" alt="ts" />
          </motion.div>
          <motion.div
            ref={ref3}
            initial="hidden"
            transition={{ duration: 0.9 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.hero_stack}
          >
            <img src="/Figma.png" alt="figma" />
          </motion.div>
        </motion.div>
        <div className={s.save_and_whatsapp}>
        </div>
      </div>
    </div>
  );
};

export default Hero;
