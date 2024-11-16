"use client";
import { MegaMenu, Navbar } from "flowbite-react";
import Link from "next/link";


export default function Footer() {
  return (
    <>
      <footer className=" bg-white/70  shadow  dark:bg-gray-800/70 z-[100] lg:w-1/2 lg:rounded-md fixed hidden -mt-20 lg:block">
        <div className=" file:w-full mx-auto max-w-screen-xl p-1  justify-center flex gap-x-2">
          <MegaMenu className=" bg-none shadow dark:bg-gray-800/70 w-full">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between md:space-x-8">
              <Navbar.Collapse className=" bg-transparent">
                <Navbar.Link>
                  <MegaMenu.Dropdown
                    toggle={
                      <>
                        <div className=" bg-gray-100 px-4 rounded py-1 shadow">
                          کنسرت
                        </div>
                      </>
                    }
                  >
                    <ul className="grid grid-cols-3">
                      <div className="space-y-2 p-3">
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/entertainment"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            کنسرت
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/entertainment/concert"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            برنامه ها
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/entertainment//purchase-guide"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            راهنمای خرید
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/entertainment/blog"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            وبلاگ
                          </Link>
                        </li>
                      </div>
                      <div className="space-y-2 p-3">
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/entertainment/about-us"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            درباره ما
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/entertainment/contact-us"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            تماس با ما
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/entertainment/terms"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            قوانین و مقررات
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/entertainment/social-media"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            شبکه های اجتماعی
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </MegaMenu.Dropdown>
                </Navbar.Link>

                <Navbar.Link>
                  <MegaMenu.Dropdown
                    toggle={
                      <>
                        <div className=" bg-gray-100 px-4 rounded py-1 shadow">
                          موزیک
                        </div>{" "}
                      </>
                    }
                  >
                    <ul className="grid grid-cols-3">
                      <div className="space-y-2 p-3">
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/music"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            بخش موزیک
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/music/search"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            دانلود آهنگ
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/music/music-box"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            موزیک باکس
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/music/blog"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            وبلاگ
                          </Link>
                        </li>
                      </div>
                      <div className="space-y-2 p-3">
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/music/about-us"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            درباره ما
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/music/contact-us"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            تماس با ما
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/music/work-with-us"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            تماس با ما
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/music/terms"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            قوانین و مقررات
                          </Link>
                        </li>
                      </div>
                      <div className="space-y-2 p-3">
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/music/singer"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            خوانندگان
                          </Link>
                        </li>
                        <li className=" bg-gray-100 py-1 ps-1 rounded">
                          <Link
                            href="/music/social-media"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            شبکه های اجتماعی
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </MegaMenu.Dropdown>
                </Navbar.Link>
                {/* <Navbar.Link>
                  <MegaMenu.Dropdown toggle={<>بخش خبری </>}>
                    <ul className="grid grid-cols-3">
                      <div className="space-y-4 p-4">
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Library
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Resources
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Pro Version
                          </a>
                        </li>
                      </div>
                      <div className="space-y-4 p-4">
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Support Center
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Terms
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Blog
                          </a>
                        </li>
                      </div>
                      <div className="space-y-4 p-4">
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
                    </ul>
                  </MegaMenu.Dropdown>
                </Navbar.Link>
                <Navbar.Link>
                  <MegaMenu.Dropdown toggle={<> ارتباط با ما </>}>
                    <ul className="grid grid-cols-3">
                      <div className="space-y-4 p-4">
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            درباره ما
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Resources
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Pro Version
                          </a>
                        </li>
                      </div>
                    </ul>
                  </MegaMenu.Dropdown>
                </Navbar.Link> */}
              </Navbar.Collapse>
            </div>
          </MegaMenu>
       
        </div>
      </footer>
    </>
  );
}
