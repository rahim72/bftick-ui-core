"use client";
import { useEffect, useRef, useState } from "react";
import style from "@/styles/ConcertSection.module.css";
// import "@/styles/CardVIewStyle.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ConcertPage() {
  return (
    <>
      <div
        className=" h-full w-full "
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CreditCard />
      </div>
    </>
  );
}

function Card({ children }: any) {
  const cardRef: any = useRef(null);
  let bounds: any;

  useEffect(() => {
    // const rotateToMouse = (e: any) => {
    //   const mouseX = e.clientX;
    //   const mouseY = e.clientY;
    //   const leftX = mouseX - bounds.x;
    //   const topY = mouseY - bounds.y;
    //   const center = {
    //     x: leftX - bounds.width / 2,
    //     y: topY - bounds.height / 2
    //   };
    //   const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    //   cardRef.current.style.transform = `
    //     scale3d(1.07, 1.07, 1.07)
    //     rotate3d(
    //       ${center.y / 100},
    //       ${-center.x / 100},
    //       0,
    //       ${Math.log(distance) * 2}deg
    //     )
    //   `;

    //   cardRef.current.querySelector(".glow").style.backgroundImage = `
    //     radial-gradient(
    //       circle at
    //       ${center.x * 2 + bounds.width / 2}px
    //       ${center.y * 2 + bounds.height / 2}px,
    //       #ffffff55,
    //       #0000000f
    //     )
    //   `;
    // };

    // const handleMouseEnter = () => {
    //   bounds = cardRef.current.getBoundingClientRect();
    //   document.addEventListener("mousemove", rotateToMouse);
    // };

    // const handleMouseLeave = () => {
    //   document.removeEventListener("mousemove", rotateToMouse);
    //   cardRef.current.style.transform = "";
    //   cardRef.current.style.background = "";
    // };

    // cardRef.current.addEventListener("mouseenter", handleMouseEnter);
    // cardRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      //   cardRef.current.removeEventListener("mouseenter", handleMouseEnter);
      //   cardRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // ref={cardRef}
  return (
    <div
      className={`${style.card} overflow-hidden w-[300px] lg:w-[300px] h-[300px] lg:h-[400px] `}
    >
      <div className={`${style.glow} glow`}></div>
      {children}
    </div>
  );
}
const MouseTracker = ({ children }: any) => {
  const [mouse, setMouse] = useState({});

  const onMouseMove = (e: any) => {
    setMouse({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div onMouseMove={onMouseMove}>
      <pre>{JSON.stringify(mouse)}</pre>
      {children}
    </div>
  );
};

const CreditCard = () => {
  return (
    <>
      <div className="flex gap-x-6 relative w-full md:w-1/2 lg:w-1/3 justify-center items-center">
        <Link
          href="/entertainment"
          className=" text-white absolute -top-5 lg:-top-12 z-50 font-bold bg-gray-50/40  shadow-lg shadow-blue-400 text-xs lg:text-sm rounded-md flex-shrink-0 flex items-center gap-4 transition-all duration-500 drop-shadow-md bg-gradient-to-br from-gray-800/30 to-gray-400/30 hover:bg-slate-700 hover:shadow-glow hover:shadow-primary-dark"
        >
          <Image
            alt="کنسرت"
            loading="lazy"
            width="754"
            height="424"
            decoding="async"
            data-nimg="1"
            className="rounded-l-md drop-shadow-md max-w-full w-24 h-16 object-cover select-none"
            style={{ color: "transparent" }}
            src="/assets/images/gallery/1.jpg"
          />
          <div className="text-right w-32">
            <p className="text-sm font-semibold text-gray-100">کنسرت</p>
            <h2 className="font-bold text-left pl-1 text-white text-sm">
              Concert
            </h2>
          </div>
        </Link>

        <Card>
          <Link href="/entertainment">
            {/* <Image
              src="/assets/images/LandingPage/entertainment-background-8410817.jpg"
              alt="کنسرت"
              width={200}
              height={400}
              className=" w-full h-full"
            /> */}

            <div className=" grid grid-cols-1 mt-14 md:mt-10 gap-y-2 p-3 absolute z-60">
              <AnimatedStaticText
                text="خرید بلیط کنسرت"
                x={-40}
                className=" bg-blue-700 hover:bg-blue-600 focus:border-gray-50 focus:ring-2"
              />
              <AnimatedStaticText
                text="کنسرت های پاپ تهران"
                x={40}
                className=" bg-blue-700 hover:bg-blue-600 focus:border-gray-50 focus:ring-2"
              />
              <AnimatedStaticText
                text="همایش و نمایش "
                x={-40}
                className=" bg-blue-700 hover:bg-blue-600 focus:border-gray-50 focus:ring-2"
              />
              <AnimatedStaticText
                text="تئاتر، نمایش کمدی"
                x={40}
                className=" bg-blue-700 hover:bg-blue-600 focus:border-gray-50 focus:ring-2"
              />
              <AnimatedStaticText
                text="کنسرت های سنتی و کلاسیک"
                x={-40}
                className=" bg-blue-700 hover:bg-blue-600 focus:border-gray-50 focus:ring-2"
              />
              <AnimatedStaticText
                text="برنامه های جزیره کیش"
                x={40}
                className=" bg-blue-700 hover:bg-blue-600 focus:border-gray-50 focus:ring-2"
              />
            </div>
          </Link>
        </Card>
        {/* <AnimatedText
          text="خرید بلیط کنسرت"
          top="top-8"
          left="left-2"
          x={-40}
          className=" bg-purple-500"
        />
        <AnimatedText
          text="کنسرت های پاپ تهران"
          top="top-5"
          left="right-2"
          x={40}
          className=" bg-purple-500"
        />

        <AnimatedText
          text="همایش و نمایش "
          top="bottom-1"
          left="left-2"
          x={-40}
          className=" bg-purple-500"
        />

        <AnimatedText
          text="تئاتر، نمایش کمدی"
          top="bottom-8"
          left="right-2"
          x={40}
          className=" bg-purple-500"
        />

        <AnimatedText
          text="کنسرت های سنتی و کلاسیک"
          top="top-[55%]"
          left="left-2"
          className=" bg-purple-500"
          x={-40}
        />
        <AnimatedText
          text="برنامه های جزیره کیش"
          top="top-[40%]"
          left="right-2"
          x={40}
          className=" bg-purple-500"
        /> */}
      </div>
    </>
  );
};

function AnimatedText({
  text,
  top,
  left,
  x,
  className
}: // select
{
  text: string;
  top: string;
  left: string;
  x: number;
  className: string;
  // y: number;
  // select: string;
}) {
  const textVariants = {
    hidden: {
      opacity: 0,
      // y: 40
      x: x
    },
    visible: {
      opacity: 1,
      // y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  // bg-purple-600/85
  return (
    <>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className={`absolute ${className} px-4 py-1 lg:py-2 shadow-lg rounded cursor-pointer hover:shadow-[0_0_4px_-1px_rgba(0,0,0,0.3)] transition ease-in-out hover:scale-[1.02] duration-100 ${top} ${left}`}
      >
        <h3 className=" text-white text-xs md:text-sm lg:text-lg font-bold">
          {text}
        </h3>
      </motion.div>
    </>
  );
}

function AnimatedStaticText({
  text,
  x,
  className
}: // select
{
  text: string;

  x: number;
  className: string;
  // y: number;
  // select: string;
}) {
  const textVariants = {
    hidden: {
      opacity: 0,
      // y: 40
      x: x
    },
    visible: {
      opacity: 1,
      // y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  // bg-purple-600/85
  return (
    <>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className={` ${className} px-4 py-1 lg:py-2 shadow-sm rounded-tr-2xl rounded-bl-2xl cursor-pointer hover:shadow-[0_0_4px_-1px_rgba(0,0,0,0.3)] transition ease-in-out hover:scale-[1.12] duration-100`}
      >
        <h3 className=" text-white text-sm lg:text-lg font-bold">{text}</h3>
      </motion.div>
    </>
  );
}