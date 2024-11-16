import { BgStaticPages } from "@/components/client/partical/BackgroundInc";
import { BreadcrumbMenuHome } from "@/components/client/partical/inc";
import { MdChair } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { BsFillTicketPerforatedFill } from "react-icons/bs";

export default function StaticLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-[81px]">
        <section className="mb-32 relative">
          <BgStaticPages />
          <div className=" px-10 sm:container sm:mx-auto  w-full sm:w-1/2 -mt-[130px] absolute z-50 left-0 right-0">
            <BreadcrumbMenuHome />
          </div>

          <div className=" px-4 md:container md:mx-auto">
            <div className="block rounded-md bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              {/* <div className="w-full flex relative justify-between bg-white py-2 border px-4 rounded">
                <div className="flex flex-col items-center w-16 md:w-20">
                  <div className="rounded-full flex justify-center items-center h-7 w-7 md:w-6 md:h-6  text-white text-lg  md:text-base">
                    <span className="font-bold leading-none text-xs mt-0.5 rounded-full">
                      ۱
                    </span>
                  </div>
                  <span className="xs:whitespace-nowrap text-center mt-1  text-xs md:text-sm   text-accent-1 font-extrabold">
                    انتخاب سانس
                  </span>
                </div>
                <div className="flex flex-col items-center w-16 md:w-20">
                  <div className="rounded-full flex justify-center items-center h-7 w-7 md:w-6 md:h-6  text-white text-lg  md:text-base bg-accent-1">
                    <span className="font-bold leading-none mt-0.5">۲</span>
                  </div>
                  <span className="xs:whitespace-nowrap text-center mt-1  text-xs md:text-sm   text-accent-1 font-extrabold">
                    انتخاب صندلی
                  </span>
                </div>
                <div className="flex flex-col items-center w-16 md:w-20">
                  <div className="rounded-full flex justify-center items-center h-7 w-7 md:w-6 md:h-6  text-white text-lg  md:text-base bg-gray-4">
                    <span className="font-bold leading-none mt-0.5">۳</span>
                  </div>
                  <span className="xs:whitespace-nowrap text-center mt-1  text-xs md:text-sm   text-gray-4 font-medium">
                    تکمیل اطلاعات
                  </span>
                </div>
                <div className="flex flex-col items-center w-16 md:w-20">
                  <div className="rounded-full flex justify-center items-center h-7 w-7 md:w-6 md:h-6  text-white text-lg  md:text-base bg-gray-4">
                    <span className="font-bold leading-none mt-0.5">۴</span>
                  </div>
                  <span className="xs:whitespace-nowrap text-center mt-1  text-xs md:text-sm   text-gray-4 font-medium">
                    پرداخت
                  </span>
                </div>
                <div className="flex flex-col items-center w-16 md:w-20">
                  <div className="rounded-full flex justify-center items-center h-7 w-7 md:w-6 md:h-6  text-white text-lg  md:text-base bg-gray-4">
                    <span className="font-bold leading-none mt-0.5">۵</span>
                  </div>
                  <span className="xs:whitespace-nowrap text-center mt-1  text-xs md:text-sm   text-gray-4 font-medium">
                    دریافت بلیت
                  </span>
                </div>
              </div> */}
              <div>
                <ol className="items-center sm:flex">
                  <li key={1} className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg
                          className="w-4 h-4 text-blue-800 dark:text-blue-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        انتخاب سانس
                      </h3>
                      <span className="block mb-2 text-xs lg:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        سانس مورد نظر خود را انتخاب نمایید
                      </span>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </div>
                  </li>
                  <li key={2} className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <MdChair className="w-4 h-4 text-blue-800 dark:text-blue-300" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        انتخاب صندلی
                      </h3>
                      <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        صندلی مورد نظر خود را انتخاب نمایید
                      </span>
                    </div>
                  </li>
                  <li key={3} className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <BsFillInfoCircleFill className="w-4 h-4 text-blue-800 dark:text-blue-300" />
                      </div>

                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        تکمیل اطلاعات
                      </h3>
                      <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        اطلاعات خود را تایید را اطلاعات جدید را وارد نمایید
                      </span>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </div>
                  </li>
                  <li key={4} className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <MdPayments className="w-4 h-4 text-blue-800 dark:text-blue-300" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        پرداخت آنلاین
                      </h3>
                      <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        هزینه بلیت را به صورت آنلاین پرداخت نمایید
                      </span>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </div>
                  </li>
                  <li key={5} className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <BsFillTicketPerforatedFill className=" w-4 h-4 text-blue-800 dark:text-blue-300" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        دریافت بلیت
                      </h3>
                      <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        دریافت بلیت خریداری شده
                      </span>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </div>
                  </li>
                </ol>
              </div>
              {children}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
