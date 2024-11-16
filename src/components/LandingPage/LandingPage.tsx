"use client";
import { Suspense, useEffect, useState } from "react";
import LoadingPart from "./LoadingPart";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "animate.css";
import Link from "next/link";
import { PreLoader1 } from "@/components/LandingPage/PreLoader";
import ConcertPage from "@/components/LandingPage/Pages/ConcertPage";
import MusicPage from "@/components/LandingPage/Pages/MusicPage";
import NewsPage from "@/components/LandingPage/Pages/NewsPage";
import ShopPage from "@/components/LandingPage/Pages/ShopPage";
import style3d from "@/styles/Logo3dView.module.css";

const fontNas = localFont({ src: "../../fonts/iraniansans.woff2" });
const textColor = [
  "text-black/80",
  "text-black/80",
  "text-black/80",
  "text-black/80",
  "text-black/80"
];

export default function LandingPages() {
  const [position, setPosition] = useState(0);
  const topBgSelect = 0;
  const entertemantImg =
    "/assets/images/LandingPage/entertainment-background-8410817.jpg";

  const [size, setSize]: any = useState({ width: 0, height: 0 });
  const [SelectStage, setSelectStage]: any = useState("concert");
  const [loading, setLoading] = useState(false);

  const handleSelectStage = (stage: any) => {
    setLoading(true);

    setTimeout(() => {
      setSelectStage(stage);
      setLoading(false);
    }, 1000);
  };

  const HandelNextButton = () => {
    if (SelectStage === "concert") {
      return "music";
    } else if (SelectStage === "music") {
      return "news";
    } else if (SelectStage === "news") {
      return "shop";
    } else if (SelectStage === "shop") {
      return "concert";
    }
  };
  const HandelPrevButton = () => {
    if (SelectStage === "concert") {
      return "shop";
    } else if (SelectStage === "shop") {
      return "news";
    } else if (SelectStage === "news") {
      return "music";
    } else if (SelectStage === "music") {
      return "concert";
    }
  };

  let touchStartX = 0;
  let touchEndX = 0;
  const handleTouchStart = (e: any) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: any) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipeGesture();
  };
  const handleSwipeGesture = () => {
    if (touchEndX < touchStartX) {
      setPosition(position - 1);
      setSelectStage(HandelPrevButton());
    } else if (touchEndX > touchStartX) {
      setPosition(position + 1);
      setSelectStage(HandelNextButton());
    }
  };

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <>
      <Suspense fallback={<LoadingPart />}>
        <div className=" relative w-full bg-[#dee2e6]">
          <LogoAndTextComponent topBgSelect={topBgSelect} />
          <MenuButton
            onTextChange={handleSelectStage}
            SelectStageText={SelectStage}
          />

          <NavigationButtonComponent
            onTextChange={handleSelectStage}
            selectStage={SelectStage}
          />
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className=" h-[54%] sm:h-[60%] flex justify-center items-center relative z-[20]"
          >
            {loading && <PreLoader1 />}

            {!loading && SelectStage === "concert" && <ConcertPage />}
            {!loading && SelectStage === "music" && <MusicPage />}
            {!loading && SelectStage === "news" && <NewsPage />}
            {!loading && SelectStage === "shop" && <ShopPage />}
          </div>
        </div>
      </Suspense>
    </>
  );
}

function MenuButton({ onTextChange, SelectStageText }: any) {
  return (
    <>
      <div className="absolute left-0 bottom-14 right-0 flex flex-col items-center justify-center gap-4 flex-wrap pb-4 transition-all delay-1000 duration-1000 ">
        <p
          className="text-white italic"
          style={{
            willChange: "auto",
            opacity: 0,
            transform: "translateY(20px)"
          }}
        >
          بر روی گزینه های مورد نظر کلیک کنید
        </p>

        <div className="relative w-full flex justify-center">
          <div className="absolute top-0 left-0 bottom-0 w-12 lg:w-40 bg-gradient-to-r from-dark lg:via-dark/70 to-dark/0 z-40 pointer-events-none transition-opacity duration-1000 "></div>
          <div className="absolute top-0 right-0 bottom-0 w-12 lg:w-40 bg-gradient-to-l from-dark lg:via-dark/70 to-dark/0 z-40 pointer-events-none duration-1000 "></div>

          <div className="flex flex-row gap-4 p-4  overflow-x-auto no-scrollbar max-w-full select-none">
            <button
              type="button"
              onClick={() => onTextChange("concert")}
              className={`rounded-md flex-shrink-0 flex items-center gap-4 transition-all duration-500 drop-shadow-md bg-gradient-to-br from-gray-800/30 to-gray-400/30 hover:bg-slate-700 hover:shadow-glow hover:shadow-primary-dark ${
                SelectStageText === "concert" ? "bg-slate-700" : ""
              }`}
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
            </button>

            <button
              type="button"
              onClick={() => onTextChange("music")}
              className={`rounded-md flex-shrink-0 flex items-center gap-4 transition-all duration-500 drop-shadow-md bg-gradient-to-br from-gray-800/30 to-gray-400/30 hover:bg-slate-700 hover:shadow-glow hover:shadow-primary-dark ${
                SelectStageText === "music" ? "bg-slate-700" : ""
              }`}
            >
              <Image
                alt="موزیک"
                loading="lazy"
                width="754"
                height="424"
                decoding="async"
                data-nimg="1"
                className="rounded-l-md drop-shadow-md max-w-full w-24 h-16 object-cover select-none"
                style={{ color: "transparent" }}
                src="/assets/images/gallery/2.jpg"
              />
              <div className="text-right w-32">
                <p className="text-sm font-semibold text-gray-100">موزیک</p>
                <h2 className="font-bold text-left pl-1 text-white text-sm">
                  Music
                </h2>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onTextChange("news")}
              className={`rounded-md flex-shrink-0 flex items-center gap-4 transition-all duration-500 drop-shadow-md bg-gradient-to-br from-gray-800/30 to-gray-400/30 hover:bg-slate-700 hover:shadow-glow hover:shadow-primary-dark ${
                SelectStageText === "news" ? "bg-slate-700" : ""
              }`}
            >
              <Image
                alt="اخبار"
                loading="lazy"
                width="754"
                height="424"
                decoding="async"
                data-nimg="1"
                className="rounded-l-md drop-shadow-md max-w-full w-24 h-16 object-cover select-none"
                style={{ color: "transparent" }}
                src="/assets/images/gallery/3.jpg"
              />
              <div className="text-right w-32">
                <p className="text-sm font-semibold text-gray-100">اخبار</p>
                <h2 className="font-bold text-left pl-1 text-white text-sm">
                  News
                </h2>
              </div>
            </button>
            <button
              type="button"
              onClick={() => onTextChange("shop")}
              className={`rounded-md flex-shrink-0 flex items-center gap-4 transition-all duration-500 drop-shadow-md bg-gradient-to-br from-gray-800/30 to-gray-400/30 hover:bg-slate-700 hover:shadow-glow hover:shadow-primary-dark ${
                SelectStageText === "shop" ? "bg-slate-700" : ""
              }`}
            >
              <Image
                alt="فروشگاه"
                loading="lazy"
                width="754"
                height="424"
                decoding="async"
                data-nimg="1"
                className="rounded-l-md drop-shadow-md max-w-full w-24 h-16 object-cover select-none"
                style={{ color: "transparent" }}
                src="/assets/images/gallery/4.jpg"
              />
              <div className="text-right w-32">
                <p className="text-sm font-semibold text-gray-100">فروشگاه</p>
                <h2 className="font-bold text-left pl-1 text-white text-sm">
                  Shop
                </h2>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function LogoAndTextComponent({ ...props }) {
  const ActiveFunc = () => {
    const pathname = usePathname();
    let res: any = {
      active: false
    };
    if (pathname === "/") {
      res = {
        active: false
      };
      return res;
    } else {
      res = {
        active: true
      };
      return res;
    }
  };
  return (
    <>
      {/* <div
        className={`${
          ActiveFunc()?.active === true
            ? "hidden animate__animated animate__fadeOut "
            : "block "
        }  absolute bottom-[38%] sm:bottom-1/3 left-0 right-0 z-50  text-center text-2xl font-bold text-nowrap ${
          fontNas.className
        } ${textColor[props.topBgSelect]}`}
      >
        موسسه فرهنگی هنری آوای ترانه فرزانه
      </div> */}
      <div
        className={`${
          ActiveFunc()?.active === true ? "hidden  " : "block "
        } absolute bottom-[25%] sm:bottom-[18%] xs:left-[72%] sm:left-[71%] md:left-[65%] lg:left-[59%] xl:left-[59%] 2xl:left-[56%] z-50 `}
      >
        <Link href="/">
          <Image
            src="/assets/Logo/drf.png"
            className={`${
              ActiveFunc()?.active === true ? "hidden  " : "block "
            } lg:animate__animated lg:animate__backInRight w-[95px] h-[95px] sm:w-[135px] sm:h-[135px] lg:w-[140px] lg:h-[140px] bg-transparent  shadow-blue-500  cursor-pointer ${
              style3d.image3d
            }`}
            width={320}
            height={320}
            alt="لوگو دفتر نور تهران"
            loading="lazy"
          />
        </Link>
      </div>
      <div className=" absolute bottom-[27%] sm:bottom-[21%] left-[30%] sm:left-[37%] md:left-[42%] lg:left-[43%]  xl:left-[46%] z-50">
        <Link href="/">
          <Image
            src="/assets/Logo/logoNoor.png"
            className={` ${
              ActiveFunc()?.active === true ? "hidden " : "block "
            } lg:animate__animated lg:animate__bounceInDown w-[150px] h-[60px] sm:w-[170px] sm:h-[80px] bg-transparent ${
              style3d.image3d
            }`}
            width={200}
            height={120}
            alt="لوگو دفتر نور تهران"
            loading="lazy"
          />
        </Link>
      </div>
      <div
        className={`${
          ActiveFunc()?.active === true ? "hidden  " : "block "
        }  absolute left-1 bottom-[25%] sm:bottom-[18%]  sm:left-[7%] md:left-[23%] lg:left-[29%] xl:left-[34%] 2xl:left-[37%] z-50 `}
      >
        <Link href="/">
          <Image
            src="/assets/Logo/logoAva.png"
            className={` animate__animated lg:animate__backInLeft w-[110px] h-[90px] sm:w-[150px] sm:h-[130px] lg:w-[160px] lg:h-[140px] bg-transparent ${style3d.image3d}`}
            width={180}
            height={160}
            alt="لوگو دفتر نور تهران"
            loading="lazy"
          />
        </Link>
      </div>
    </>
  );
}

function NavigationButtonComponent({
  onTextChange,
  selectStage
}: {
  onTextChange: any;
  selectStage: string;
}) {
  const HandelNextButton = () => {
    if (selectStage === "concert") {
      return "music";
    } else if (selectStage === "music") {
      return "news";
    } else if (selectStage === "news") {
      return "shop";
    } else if (selectStage === "shop") {
      return "concert";
    }
  };
  const HandelPrevButton = () => {
    if (selectStage === "concert") {
      return "shop";
    } else if (selectStage === "shop") {
      return "news";
    } else if (selectStage === "news") {
      return "music";
    } else if (selectStage === "music") {
      return "concert";
    }
  };
  return (
    <>
      <div>
        <button
          onClick={() => onTextChange(HandelNextButton())}
          className="rounded-full bg-transparent hover:bg-white/90 p-4 text-white hover:text-black transition-colors duration-500 pointer-events-auto absolute top-[45%] lg:top-[53%] left-[50%] z-[1000]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600 rotate-180"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            >
              <path d="m13 19l-6-7l6-7"></path>
              <path d="m17 19l-6-7l6-7" opacity={0.5}></path>
            </g>
          </svg>
        </button>

        <button
          onClick={() => onTextChange(HandelPrevButton())}
          className="rounded-full bg-transparent hover:bg-white/90 p-4 text-white hover:text-black transition-all duration-500 pointer-events-auto absolute top-[45%] lg:top-[53%] right-[50%] z-[1000]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            >
              <path d="m13 19l-6-7l6-7"></path>
              <path d="m17 19l-6-7l6-7" opacity={0.5}></path>
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}
