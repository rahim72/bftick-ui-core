"use client";
import { CartSection } from "@/components/Pages/Concert/client/inc/HomeSection";
import { DatePickerMenuFilter } from "@/components/Pages/Concert/client/inc/MenuFilterConcert";

export default function Concert() {
  return (
    <>
      <section className=" md:container lg:mx-10 md:mx-auto w-full p-2 mt-20 flex flex-col lg:gap-x-2">
        <div className="  mt-2 mb-2 w-full bg-gray-100 py-1 rounded-md border shadow flex items-center">
          {SearchInput()}
          <div className=" justify-end flex pl-4">
            <span className=" text-xs text-gray-700 dark:text-gray-300 ">
              تعداد کنسرت :
            </span>
            <span className=" text-xs text-gray-700 dark:text-gray-300 ">
              10
            </span>
          </div>
        </div>

        <div className="w-full flex lg:gap-x-4">
          <div className=" hidden lg:block">{DatePickerMenuFilter()}</div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 w-full">
            {CartLoop(10)}
          </div>
        </div>
      </section>
    </>
  );
}

function CartLoop(index: number) {
  let content = [];
  for (let i = 1; i < index; i++) {
    content.push(
      <CartSection
        title={`کنسرت ${i}`}
        image={`/assets/images/concert/${i}.jpg`}
        slug={`concert-${i}`}
        status={Math.floor(Math.random() * 5)}
      />
    );
  }

  return content;
}

function SearchInput() {
  return (
    <>
      <form className="flex items-center max-w-lg mx-auto w-full">
        <label htmlFor="simple-search" className="sr-only">
          جستجو
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="جستجو کنسرت ها ..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-1.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">جستجو</span>
        </button>
      </form>
    </>
  );
}

// function MenuFilter() {
//   return (
//     <>
//       <div className=" flex flex-col container mx-auto p-2">
//         <div className=" bg-gray-300 text-center rounded-md px-2 py-1">
//           <span className=" text-xs  ">انتخاب شهر</span>
//         </div>
//         <div className=" mt-2 px-4">{SelectCity()}</div>
//       </div>
//     </>
//   );
// }

// function SelectCity() {
//   return (
//     <>
//       <div className="max-w-sm">
//         {/* <div className="mb-2 block">
//           <Label htmlFor="countries" value="Select your country" />
//         </div> */}
//         {/* <Select id="countries" >
//           <option> همه شهرها </option>
//           <option> تهران</option>
//           <option>کرمان</option>
//           <option>کیش</option>
//           <option>آمل</option>
//           <option>شیراز</option>
//         </Select> */}

//         <select
//           id="city"
//           className="block w-full p-1.5 mb-4 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         >
//           <option selected> همه شهرها </option>
//           <option> تهران</option>
//           <option>کرمان</option>
//           <option>کیش</option>
//           <option>آمل</option>
//           <option>شیراز</option>
//         </select>
//       </div>
//     </>
//   );
// }

// function ButtonGroupComponent() {
//   return (
//     // <ButtonGroup>
//     //   <Button color="gray">
//     //     <HiUserCircle className="mr-3 h-4 w-4" />
//     //     Profile
//     //   </Button>
//     //   <Button color="gray">
//     //     <HiAdjustments className="mr-3 h-4 w-4" />
//     //     Settings
//     //   </Button>
//     //   <Button color="gray">
//     //     <HiCloudDownload className="mr-3 h-4 w-4" />
//     //     Messages
//     //   </Button>
//     // </ButtonGroup>
//     <div className=" flex flex-col rounded-md gap-y-2 px-2 " role="group">
//       <button
//         type="button"
//         className="inline-flex rounded-md text-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
//       >
//         <IoMdMicrophone className="me-2 h-5 w-5" />

//         <span> همه برنامه ها</span>
//       </button>
//       <button
//         type="button"
//         className="inline-flex rounded-md text-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
//       >
//         <BsFillTicketPerforatedFill className="me-2 h-5 w-5 text-green-600" />
//         <span> تهیه بلیت</span>
//       </button>
//       <button
//         type="button"
//         className="inline-flex rounded-md text-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
//       >
//         <BsFillTicketPerforatedFill className="me-2 h-5 w-5 text-blue-700" />
//         <span>بزودی</span>
//       </button>
//       <button
//         type="button"
//         className="inline-flex rounded-md text-center items-center  px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
//       >
//         <BsFillTicketPerforatedFill className=" me-2 h-5 w-5 text-purple-500" />
//         <span> در حال برگزاری</span>
//       </button>
//     </div>
//   );
// }
