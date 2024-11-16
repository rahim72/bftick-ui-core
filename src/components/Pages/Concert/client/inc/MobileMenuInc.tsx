"use client";

import { Button, Drawer, Sidebar, DarkThemeToggle } from "flowbite-react";
import { useState } from "react";
import { IoMdHelpCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { RecruitmentIcon } from "@/components/General/icons/ItemsIcon";
import Image from "next/image";
export default function MobileMenuInc() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handelShow = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header className="fixed z-[60] top-0 w-full lg:hidden bg-gray-200 p-2 items-center shadow">
        <div className="flex items-center justify-between relative">
          <div className="flex gap-2 items-center relative w-full">
            <div className="flex text-center">
              <div className="text-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-8 h-8 text-blue-600 hover:text-blue-700"
                  onClick={handelShow}
                  viewBox="0 0 24 24"
                >
                  <rect
                    width={18}
                    height={2}
                    x={3}
                    y={11}
                    fill="currentColor"
                    rx={0.95}
                    ry={0.95}
                  ></rect>
                  <rect
                    width={18}
                    height={2}
                    x={3}
                    y={16}
                    fill="currentColor"
                    rx={0.95}
                    ry={0.95}
                  ></rect>
                  <rect
                    width={18}
                    height={2}
                    x={3}
                    y={6}
                    fill="currentColor"
                    rx={0.95}
                    ry={0.95}
                  ></rect>
                </svg>
              </div>
            </div>
          </div>

          <div className="items-center justify-center text-center flex gap-x-4">
            <Image
              loading="lazy"
              width={40}
              height={32}
              alt="موسسه آوای ترانه فرزانه"
              src="/assets/Logo/logoAva.png"
              className="w-10 h-8"
            />

            {/* <DarkThemeToggle className=" w-10 h-8" /> */}
          </div>
        </div>
      </header>

      <Drawer
        edge={true}
        open={isOpen}
        onClose={handleClose}
        position="right"
        className={isOpen ? "block" : "hidden"}
      >
        <Drawer.Header
          className=" pt-10"
          title="منو اصلی"
          titleIcon={() => <></>}
        />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0 "
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={FaHome}>
                      صفحه اصلی
                    </Sidebar.Item>
                    <Sidebar.Item href="/purchase-guide" icon={IoMdHelpCircle}>
                      راهنمای خرید
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list" icon={FaBlogger}>
                      وبلاگ
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-in" icon={IoCall}>
                      تماس با ما
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up" icon={IoCall}>
                      درباره ما
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="/authentication/sign-up"
                      icon={RecruitmentIcon}
                    >
                      همکاری با ما
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  {/* <Sidebar.ItemGroup>
                    <Sidebar.Item
                      href="https://github.com/themesberg/flowbite-react/"
                      icon={HiClipboard}
                    >
                      Docs
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="https://flowbite-react.com/"
                      icon={HiCollection}
                    >
                      Components
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="https://github.com/themesberg/flowbite-react/issues"
                      icon={HiInformationCircle}
                    >
                      Help
                    </Sidebar.Item>
                  </Sidebar.ItemGroup> */}
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
        <div className=" absolute bottom-20 right-0">
          <div className=" flex gap-x-2 items-center text-center">
            <Image
              loading="lazy"
              width={48}
              height={40}
              alt="موسسه آوای ترانه فرزانه"
              src="/assets/Logo/logoAva.png"
              className="w-12 h-10"
            />
            <h2 className=" text-sm font-bold">
              موسسه فرهنگی هنری آوای ترانه فرزانه
            </h2>
          </div>
        </div>
      </Drawer>
    </>
  );
}
