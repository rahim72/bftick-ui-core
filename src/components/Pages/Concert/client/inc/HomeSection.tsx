"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/tools";
import localFont from "next/font/local";
import { PiMicrophoneStageFill } from "react-icons/pi";

type CardType = {
  title: string;
  image: string;
  status: number;
  slug: string;
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function CartSection(props: CardType) {
  const [HoverState, setHoverState] = useState(false);
  const [TitleTag, setTitleTag] = useState("");

  function TitleTagSelect(status: number) {
    let bgColor = "";
    let bgHover = "";
    let tagTitle = "";
    if (status === 0) {
      bgColor = `bg-green-500/90`;
      bgHover = `bg-green-700`;

      tagTitle = "تهیه بلیت";
    } else if (status === 1) {
      bgColor = ` bg-[#BC7FCD]`;
      bgHover = `bg-[#86469C]`;
      tagTitle = "به زودی";
    } else if (status === 2) {
      bgColor = `bg-green-500/90`;
      bgHover = `bg-green-700`;
      tagTitle = "تمدید شد";
    } else if (status === 3) {
      bgColor = `bg-slate-500/90`;
      bgHover = `bg-slate-700`;
      tagTitle = "لغو شد";
    } else if (status === 4) {
      bgColor = `bg-gray-500/90`;
      bgHover = `bg-gray-700`;
      tagTitle = "برگزار شد";
    }

    return (
      <>
        <div
          className={cn(
            `absolute top-0 left-0  z-10 px-2 py-1 rounded-br-md ${bgColor}`,
            HoverState ? bgHover : ""
          )}
        >
          <span
            className={cn(
              " text-gray-100 text-xs",
              HoverState ? `hover:text-gray-50` : ""
            )}
          >
            {tagTitle}
          </span>
        </div>
      </>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      key={props.title}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <div
        onMouseEnter={() => {
          setHoverState(true);
        }}
        onMouseLeave={() => {
          setHoverState(false);
        }}
        className={cn(
          "item max-w-sm shadow-sm cursor-pointer relative w-full bg-white border overflow-hidden border-gray-200 hover:shadow-[0_0_4px_-1px_rgba(0,0,0,0.3)] rounded-md transition ease-in-out hover:scale-[1.02] duration-100"
        )}
      >
        {TitleTagSelect(props?.status ?? 0)}
        <div className="flex items-center gap-x-2 absolute z-10 top-0 right-0 bg-[#003C43]/70 px-4 py-2 rounded-bl w-3/4">
          <PiMicrophoneStageFill className=" text-gray-200 w-4 h-4" />
          <span className="text-[9px] md:text-xs text-gray-100 line-clamp-1">
            کنسرت بهنام بانی
          </span>
        </div>

        <div className=" absolute bottom-10 right-4  z-10 bg-[#003C43]/70 w-full rounded-r-md">
          <div className=" flex flex-col gap-y-1 py-1 px-2">
            <div className="flex items-center gap-x-2">
              {DateIcon()}

              <span className="text-[9px] md:text-xs text-gray-100">
                دوشنبه 03 ادریبهشت
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              {LocationIcon()}
              <span className=" text-[9px] md:text-xs text-gray-100">
                تهران، سالن میلاد نمایشگاه بین المللی
              </span>
            </div>
          </div>
        </div>

        <Image
          src={props.image}
          alt={props.title}
          sizes="100vw"
          width={500}
          height={350}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "330px"
          }}
        />

        <div className=" flex items-center absolute bottom-0 w-full">
          <Link
            href={`/entertainment/concert/${props.slug}`}
            className={cn(
              "bg-green-600/70 text-white w-full text-center text-sm py-1",
              HoverState ? `bg-green-800/80` : ""
            )}
          >
            خرید بلیت
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function DateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=" h-4 w-4 md:h-5 md:w-5 text-gray-100"
      viewBox="0 0 36 36"
    >
      <path
        fill="currentColor"
        d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
        className="clr-i-solid--badged clr-i-solid-path-1--badged"
      ></path>
      <path
        fill="currentColor"
        d="M30 13.5A7.5 7.5 0 0 1 22.5 6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V12.34a7.45 7.45 0 0 1-4 1.16M10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
        className="clr-i-solid--badged clr-i-solid-path-2--badged"
      ></path>
      <circle
        cx={30}
        cy={6}
        r={5}
        fill="currentColor"
        className="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"
      ></circle>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=" h-4 w-4 md:h-5 md:w-5 text-gray-100"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V11h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zM18 14a2.75 2.75 0 0 0-2.75 2.75c0 1.252.735 2.454 1.615 3.422c.407.448.817.814 1.135 1.075c.318-.26.728-.627 1.135-1.075c.88-.968 1.615-2.17 1.615-3.422A2.75 2.75 0 0 0 18 14m0 9.701l-.555-.369l-.002-.001l-.004-.003l-.012-.008l-.04-.028a11.335 11.335 0 0 1-.603-.456a12.83 12.83 0 0 1-1.399-1.318c-.995-1.094-2.135-2.767-2.135-4.768a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a12.832 12.832 0 0 1-2.002 1.774l-.04.028l-.012.008l-.004.003h-.002zM16.75 16h2.5v2h-2.5z"
      ></path>
    </svg>
  );
}
