"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MegaMenu, Tooltip } from "flowbite-react";
import { TbPhoneCalling } from "react-icons/tb";
import { GrStatusInfo } from "react-icons/gr";

export default function BottomNavigationLandingPage() {
  return (
    <>
      <div className="sticky bottom-1 p-3 px-6 m-2 flex items-center justify-between   bg-gray-900 shadow-3xl text-gray-400 rounded-2xl cursor-pointer block lg:hidden">
        <div className="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
          <MegaMenuButton />
        </div>
        <div className="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
          <CallUsButton />
        </div>
        <div className="flex flex-col items-center  hover:text-blue-400 ">
          <CenterButton />
        </div>
        <div className="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
          <AboutUsButton />
        </div>
        <div className="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
          <LoginButton />
        </div>
      </div>
    </>
  );
}

const CenterButton = () => {
  return (
    <>
      <Link
        href="/"
        className="absolute bottom-2 shadow-2xl text-center flex items-center justify-center rounded-full border-4 text-3xl border-gray-50 hover:border-blue-500 bg-blue-500 w-14 h-14 p-2 text-white transition ease-in duration-200"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full border-2 opacity-50"></span>
        <FaHome />
      </Link>
    </>
  );
};

const MegaMenuButton = () => {
  return (
    <>
      <MegaMenu.Dropdown
        toggle={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              ></path>
            </svg>
          </>
        }
      >
        <ul className="grid grid-cols-3">
          <div className="space-y-2 p-2 border-e">
            <li className=" bg-gray-100 py-1 ps-1 rounded text-xs">
              <Link
                href="/entertainment"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                کنسرت
              </Link>
            </li>
            <li className=" bg-gray-100 py-1 ps-1 rounded text-xs">
              <Link
                href="/entertainment/concert"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                برنامه ها
              </Link>
            </li>
            <li className=" bg-gray-100 py-1 ps-1 rounded text-xs">
              <Link
                href="/entertainment//purchase-guide"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                راهنمای خرید
              </Link>
            </li>
            <li className=" bg-gray-100 py-1 ps-1 rounded text-xs">
              <Link
                href="/entertainment/blog"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                وبلاگ
              </Link>
            </li>
          </div>
          <div className="space-y-2 p-2 border-e">
            <li className=" bg-gray-100 py-1 ps-1 rounded text-xs">
              <Link
                href="/music"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                بخش موزیک
              </Link>
            </li>
            <li className=" bg-gray-100 py-1 ps-1 rounded text-xs">
              <Link
                href="/music/search"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                دانلود آهنگ
              </Link>
            </li>
            <li className=" bg-gray-100 py-1 ps-1 rounded text-xs">
              <Link
                href="/music/music-box"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                موزیک باکس
              </Link>
            </li>
            <li className=" bg-gray-100 py-1 ps-1 rounded text-xs">
              <Link
                href="/music/blog"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                وبلاگ بخش آهنگ
              </Link>
            </li>
          </div>
          {/* <div className="space-y-2 p-3">
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Playground
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                License
              </a>
            </li>
          </div>
          <div className="space-y-2 p-3">
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                Playground
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 dark:hover:text-primary-500"
              >
                License
              </a>
            </li>
          </div> */}
        </ul>
      </MegaMenu.Dropdown>
    </>
  );
};

const LoginButton = () => {
  return (
    <>
      <Tooltip content="ورود" placement="top">
        <Link href="/login-otp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </Link>
      </Tooltip>
    </>
  );
};

const CallUsButton = () => {
  return (
    <>
      <Tooltip content="تماس با ما" placement="top">
        <Link href="/contact-us">
          <TbPhoneCalling className="h-6 w-6" />
        </Link>
      </Tooltip>
    </>
  );
};

const AboutUsButton = () => {
  return (
    <>
      <Tooltip content="درباره ما" placement="top">
        <Link href="/about-us">
          <GrStatusInfo className="h-6 w-6" />
        </Link>
      </Tooltip>
    </>
  );
};
