"use client";

import { Avatar, Dropdown } from "flowbite-react";
import Link from "next/link";
import { MdManageAccounts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";

import { useAuth } from "@/hooks/auth";

const LoginLinks = () => {
  const { user, logout } = useAuth({ middleware: "guest" });

  return (
    <div className=" hidden lg:block">
      {user ? (
        <Dropdown
          className=" w-56"
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <div className=" flex flex-col items-center gap-y-1">
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
              <span className="block text-sm border w-full text-center rounded-md py-1 px-2 font-bold bg-gray-50">
                {user?.first_name + " " + user?.last_name}
              </span>
              <span className="block truncate text-sm  border w-full text-center rounded-md py-1 px-2 font-bold bg-gray-50">
                {user?.phone_number}
              </span>
            </div>
          </Dropdown.Header>
          <hr className=" h-1 mx-auto my-1 bg-gray-100 border-0 rounded dark:bg-gray-700" />

          <Dropdown.Item
            href="#"
            icon={MdManageAccounts}
            className="[&>svg]:me-2 [&>svg]:w-5 [&>svg]:h-5"
          >
            پنل مدیریت
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            icon={CgProfile}
            className="[&>svg]:me-2 [&>svg]:w-5 [&>svg]:h-5"
          >
            پنل کاربری
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            icon={SlBasket}
            className="[&>svg]:me-2 [&>svg]:w-5 [&>svg]:h-5"
          >
            سفارش ها
          </Dropdown.Item>
          <hr className=" h-1 mx-auto my-1 bg-gray-100 border-0 rounded dark:bg-gray-700" />

          <Dropdown.Item
            onClick={logout}
            icon={IoIosLogOut}
            className="[&>svg]:me-2 [&>svg]:w-5 [&>svg]:h-5"
          >
            خروج از حساب کاربری
          </Dropdown.Item>
        </Dropdown>
      ) : (
        <>
          <Link
            href="/login-otp"
            className="text-sm text-gray-50 bg-blue-600 px-2 py-1 rounded hover:bg-blue-700 hover:text-gray-200"
          >
            ثبت نام | ورود
          </Link>
        </>
      )}
    </div>
  );
};

export default LoginLinks;
