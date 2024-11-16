"use client";
import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/utils/use-dimensions";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import style from "@/styles/MotionNav.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height + 200}px at calc(100% - 40px) 40px)`,
    // clipPath: `circle(${height * 4 + 200}px at 40px 40px)`,

    // clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
    opacity: 0.9,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 20,
      restDelta: 2
    },
    boxShadow: "-10px 10px 0 rgba(0, 0, 0, 0.2)"
  }),
  closed: {
    // clipPath: "circle(25px at 40px 40px)",
    clipPath: "circle(25px at calc(100% - 40px) 40px)",

    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function MotionNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef: any = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className={`absolute top-0 right-0  bottom-0 w-[250px] block lg:hidden ${
          isOpen === true ? "z-[1001]" : ""
        } `}
        ref={containerRef}
      >
        <motion.div className={style.backgroundMotion} variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
}
