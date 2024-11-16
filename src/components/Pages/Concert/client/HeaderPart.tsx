"use client";

import { Navbar, DarkThemeToggle, useThemeMode } from "flowbite-react";

import Image from "next/image";
import LoginLinks from "@/components/Pages/Concert/client/inc/LoginLinks";
import Link from "next/link";
import mainStyle from "@/styles/mainStyle.module.css";
import InstagramIcon from "@/components/General/icons/InstagramIcon";
import TelegramIcon from "@/components/General/icons/TelegramIcon";
import WhatsAppIcon from "@/components/General/icons/WhatsAppIcon";
import { LogoAvaIcon } from "@/components/General/icons/LogoIcon";
import MobileMenuInc from "@/components/Pages/Concert/client/inc/MobileMenuInc";
import React, { useState, useEffect } from "react";

import { cn } from "@/utils/tools";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/Pages/Concert/client/inc/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "کنسرت",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "سینما",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "تفریحی",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
];

const HeaderPart = () => {
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  const { mode } = useThemeMode();

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <>
      <header className=" hidden lg:block">
        {/* <TopNavBarComponent header={header} /> */}
        <Navbar
          className={
            header
              ? " bg-white/80 dark:bg-gray-900/80 fixed w-full z-20 top-0 start-0 border-b border-gray-200/80 dark:border-gray-600/80 h-12 items-center justify-center flex "
              : " bg-white/80 dark:bg-gray-900 fixed  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 h-12 items-center justify-center flex "
          }
        >
          <Navbar.Brand href="/entertainment">
            {mode === "light" ? (
              <>
                <Image
                  src="/assets/Logo/bflogoblack.png"
                  width={150}
                  height={65}
                  className=" animate__animated  animate__backInRight h-[37px] w-[150px]"
                  alt="لوگو بی اف تیک"
                />
              </>
            ) : (
              <>
                <Image
                  src="/assets/Logo/bflogowhite.png"
                  width={150}
                  height={65}
                  className=" animate__animated  animate__backInRight h-[37px] w-[150px]"
                  alt="لوگو بی اف تیک"
                />
              </>
            )}

            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white animate__animated  animate__backInRight"></span>
          </Navbar.Brand>
          <div className="flex gap-x-2 items-center md:order-2">
            <DarkThemeToggle />
            <LoginLinks />
          </div>
          <Navbar.Collapse className=" items-center justify-center">
            <Navbar.Link href="/" className=" rtl:ml-6 rtl:text-right relative">
              <span className={mainStyle.menuAnime}> پرتال سایت</span>
            </Navbar.Link>
            <Navbar.Link
              href="/entertainment"
              className="  rtl:text-right relative"
            >
              <span className={mainStyle.menuAnime}> صفحه اصلی</span>
            </Navbar.Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={(mainStyle.menuAnime, "dark:text-gray-400")}
                  >
                    برنامه ها
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      dir="rtl"
                      className="grid gap-3 p-4 lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
                    >
                      <li key="menu-program" className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <LogoAvaIcon
                              width={150}
                              height={150}
                              className=""
                            />
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">
                              موسسه فرهنگی هنری آوای ترانه فرزانه
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground text-gray-800 dark:text-gray-200">
                              خرید بلیط کنسرت، سینما
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        className=" hover:bg-slate-300 dark:hover:bg-slate-500 hover:text-gray-200"
                        href="/concert"
                        title="کنسرت،جنگ،همایش و برنامه‌های هنری"
                      ></ListItem>
                      <ListItem
                        className=" hover:bg-slate-300 dark:hover:bg-slate-500 hover:text-gray-200"
                        href="/cinema"
                        title="سینما"
                      ></ListItem>
                      <ListItem
                        className=" hover:bg-slate-300 dark:hover:bg-slate-500 hover:text-gray-200"
                        href="#"
                        title="تفریحی و گردشگری"
                      ></ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Navbar.Link
              href="/entertainment/purchase-guide"
              className=" relative"
            >
              <span className={mainStyle.menuAnime}>راهنمای خرید</span>
            </Navbar.Link>
            <Navbar.Link href="/entertainment/blog" className=" relative">
              <span className={mainStyle.menuAnime}>وبلاگ</span>
            </Navbar.Link>
            <Navbar.Link href="/entertainment/about-us" className=" relative">
              <span className={mainStyle.menuAnime}>درباره ما</span>
            </Navbar.Link>
            <Navbar.Link href="/entertainment/contact-us" className=" relative">
              <span className={mainStyle.menuAnime}>تماس با ما</span>
            </Navbar.Link>
            <Navbar.Link
              href="/entertainment/work-with-us"
              className=" relative"
            >
              <span className={mainStyle.menuAnime}>همکاری با ما</span>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <div>
        <MobileMenuInc />
      </div>
    </>
  );
};
export default HeaderPart;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 bg-purple-100 dark:bg-gray-600 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-md",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-800 dark:text-gray-300">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-gray-800 dark:text-gray-300">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function TopNavBarComponent({ header }: any) {
  return (
    <>
      <nav
        className={
          header
            ? " hidden"
            : " px-5 hidden lg:block border-b h-8 bg-slate-100 border-blue-600  fixed z-20 top-0 w-full"
        }
      >
        <div className="container mx-auto flex justify-center h-full py-1 ">
          <div className=" w-full justify-start">
            <Link href="/" className="xl:rtl:ml-6 rtl:text-right relative">
              <span
                className={
                  (mainStyle.menuAnime,
                  "text-sm text-gray-700 font-bold hover:text-gray-800 tracking-tighter")
                }
              >
                موسسه فرهنگی و هنری آوای ترانه فرزانه
              </span>
            </Link>
          </div>
          <div className=" flex w-full justify-center">
            <div className=" flex justify-end gap-x-10 w-full">
              <div className=" flex gap-x-3 text-gray-700 text-sm w-full justify-end items-center tracking-tighter">
                {/* <div className=" flex justify-end gap-x-3 items-center"> */}
                <span className=" font-semibold">تماس با ما </span>
                <div>
                  <a
                    className=" text-gray-700 tracking-wider text-[15px] font-semibold font-sans"
                    href="tel:02133131410"
                  >
                    33131410 021
                  </a>
                </div>
              </div>
              <div className=" flex gap-x-3  justify-end">
                <InstagramIcon />
                <TelegramIcon />
                <WhatsAppIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
