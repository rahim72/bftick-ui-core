import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ item, children }: any) => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <>
      <motion.li
        variants={variants}
        key={item.id}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className=" list-none m-[20px] flex items-center cursor-pointer p-0"
      >
        <Link
          href={item.link}
          className=" px-4 py-1 bg-gray-100 rounded flex items-center  gap-x-2 shadow-sm"
        >
          {children}
          <span className=" text-sm">{item.title}</span>
        </Link>
      </motion.li>
    </>
  );
};
