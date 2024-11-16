"use client";

import { DatePickerComponent } from "./inc";
import { IoMdMicrophone } from "react-icons/io";
import { BsFillTicketPerforatedFill } from "react-icons/bs";

export function DatePickerMenuFilter() {
  return (
    <div className=" flex flex-col bg-gray-100 rounded-md w-72 border shadow shadow-gray-200 dark:bg-gray-800 dark:shadow-gray-800">
      {MenuFilter()}
      <hr className="w-48 h-1 mx-auto my-2 bg-gray-300 border-0 rounded md:my-4 dark:bg-gray-900" />
      {ButtonGroupComponent()}
      <hr className="w-48 h-1 mx-auto my-2 bg-gray-300 border-0 rounded md:my-4 dark:bg-gray-900" />
      {/* <Calendar calendar={persian} locale={persian_fa} /> */}
      <div className=" flex flex-col px-2 gap-y-1">
        <span className=" text-xs">انتخاب بازه زمانی</span>
        {DatePickerComponent()}
        <button
          type="button"
          className=" items-center mx-4 px-4 py-1 text-xs bg-blue-700 hover:bg-blue-800  dark:bg-blue-800 dark:hover:bg-blue-950 text-white rounded-md"
        >
          اعمال تغییر
        </button>
      </div>
    </div>
  );
}

function MenuFilter() {
  return (
    <>
      <div className=" flex flex-col container mx-auto p-2">
        <div className=" bg-gray-300 text-center rounded-md px-2 py-1">
          <span className=" text-xs  ">انتخاب شهر</span>
        </div>
        <div className=" mt-2 px-4">{SelectCity()}</div>
      </div>
    </>
  );
}

function SelectCity() {
  return (
    <>
      <div className="max-w-sm">
        {/* <div className="mb-2 block">
            <Label htmlFor="countries" value="Select your country" />
          </div> */}
        {/* <Select id="countries" >
            <option> همه شهرها </option>
            <option> تهران</option>
            <option>کرمان</option>
            <option>کیش</option>
            <option>آمل</option>
            <option>شیراز</option>
          </Select> */}

        <select
          id="city"
          className="block w-full p-1.5 mb-4 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected> همه شهرها </option>
          <option> تهران</option>
          <option>کرمان</option>
          <option>کیش</option>
          <option>آمل</option>
          <option>شیراز</option>
        </select>
      </div>
    </>
  );
}

function ButtonGroupComponent() {
  return (
    // <ButtonGroup>
    //   <Button color="gray">
    //     <HiUserCircle className="mr-3 h-4 w-4" />
    //     Profile
    //   </Button>
    //   <Button color="gray">
    //     <HiAdjustments className="mr-3 h-4 w-4" />
    //     Settings
    //   </Button>
    //   <Button color="gray">
    //     <HiCloudDownload className="mr-3 h-4 w-4" />
    //     Messages
    //   </Button>
    // </ButtonGroup>
    <div className=" flex flex-col rounded-md gap-y-2 px-2 " role="group">
      <button
        type="button"
        className="inline-flex rounded-md text-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <IoMdMicrophone className="me-2 h-5 w-5" />

        <span> همه برنامه ها</span>
      </button>
      <button
        type="button"
        className="inline-flex rounded-md text-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <BsFillTicketPerforatedFill className="me-2 h-5 w-5 text-green-600" />
        <span> تهیه بلیت</span>
      </button>
      <button
        type="button"
        className="inline-flex rounded-md text-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <BsFillTicketPerforatedFill className="me-2 h-5 w-5 text-blue-700" />
        <span>بزودی</span>
      </button>
      <button
        type="button"
        className="inline-flex rounded-md text-center items-center  px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <BsFillTicketPerforatedFill className=" me-2 h-5 w-5 text-purple-500" />
        <span> در حال برگزاری</span>
      </button>
    </div>
  );
}
