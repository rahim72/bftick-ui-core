import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { FaHome } from "react-icons/fa";
import { BsInfoSquareFill } from "react-icons/bs";
import { RiContactsBookFill } from "react-icons/ri";
import localFont from "next/font/local";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
// const itemIds = [0, 1, 2, 3, 4];
// const fontNas = localFont({ src: "../../fonts/IranNastaliq.woff2" });

const items = [
  {
    id: 0,
    title: "صفحه اصلی",
    link: "/",
    IconCard: FaHome
  },
  {
    id: 1,
    title: "درباره ما",
    link: "/about-us",
    IconCard: BsInfoSquareFill
  },
  {
    id: 2,
    title: "تماس با ما",
    link: "/contact-us",
    IconCard: RiContactsBookFill
  }
];
export const Navigation = () => (
  <>
    <motion.ul
      variants={variants}
      className=" p-[25px] top-[100px] w-[230px] absolute"
    >
      {items.map((item: any, index: number) => (
        <MenuItem key={index} i={index} item={item}>
          <item.IconCard className=" w-6 h-6 " />
        </MenuItem>
      ))}
    </motion.ul>
  </>
);
