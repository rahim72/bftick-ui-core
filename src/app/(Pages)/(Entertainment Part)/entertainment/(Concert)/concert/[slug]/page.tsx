import Image from "next/image";
import { TbClockHour10 } from "react-icons/tb";

export default function Page({ params }: any) {
  return (
    <>
      <div className="mt-8 flex flex-col gap-y-4">
        <div className="flex flex-col md:flex-row lg:gap-x-4 gap-y-4">
          <Image
            src="/assets/images/concert/1.jpg"
            width={150}
            height={200}
            alt=""
            className=" rounded-lg"
          />

          <div>
            <h1 className=" text-sm lg:text-lg font-bold dark:text-white mb-4">
              کنسرت حامیم
            </h1>
            <ul className="max-w-md space-y-1 text-gray-500  list-inside dark:text-gray-400">
              <li className=" flex gap-x-2">
                <span className=" font-semibold text-xs">
                  نام و نام خانوادگی:
                </span>
                <span className=" text-xs">تست تست</span>
              </li>
              <li className=" flex gap-x-2">
                <span className=" font-semibold text-xs">تاریخ تولد:</span>
                <span className=" text-xs">تست تست</span>
              </li>
              <li className=" flex gap-x-2">
                <span className=" font-semibold text-xs">حرفه:</span>
                <span className=" text-xs">تست تست</span>
              </li>
              <li className=" flex gap-x-2">
                <span className=" font-semibold text-xs">تخصص:</span>
                <span className=" text-xs">تست تست</span>
              </li>
              {/* <li className=" flex gap-x-2">
              <span className=" font-semibold text-xs">
                تعداد کنسرت های برگزار شده:
              </span>
              <span className=" text-xs">تست تست</span>
            </li> */}
            </ul>
          </div>
        </div>

        <div>
          <ul className=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li className=" text-xs md:text-sm">
              لطفا در انتخاب صندلی دقت فرمایید، پس از اتمام خرید امکان جابجایی
              یا کنسلی وجود ندارد.
            </li>
            <li className=" text-xs md:text-sm">
              توجه فرمایید برای کودکان 4 سال به بالا نیاز به دریافت بلیت میباشد.
            </li>
            <li className=" text-xs md:text-sm">
              جهت ورود به سالن، رعایت حجاب و شئونات اسلامی الزامی میباشد.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <CartTime key={item} />
          ))}
        </div>
      </div>
    </>
  );
}

function DateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=" h-4 w-4 md:h-5 md:w-5 text-gray-800  dark:text-gray-200"
      viewBox="0 0 36 36"
    >
      <path
        fill="currentColor"
        d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1"
        className="clr-i-solid--badged clr-i-solid-path-1--badged"
      ></path>
      <path
        fill="currentColor"
        d="M30 13.5A7.5 7.5 0 0 1 22.5 6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V12.34a7.45 7.45 0 0 1-4 1.16M10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
        className="clr-i-solid--badged clr-i-solid-path-2--badged"
      ></path>
      <circle
        cx={30}
        cy={6}
        r={5}
        fill="currentColor"
        className="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"
      ></circle>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className=" h-4 w-4 md:h-5 md:w-5 text-gray-800 dark:text-gray-200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m9 1.842l6.074 3.544L22 2.5V11h-2V5.5l-4 1.667V11h-2V7.074l-4-2.333v12.185l1.868 1.09l-1.008 1.727l-1.934-1.129L2 21.5V5.926zM8 16.833V4.741L4 7.074V18.5zM18 14a2.75 2.75 0 0 0-2.75 2.75c0 1.252.735 2.454 1.615 3.422c.407.448.817.814 1.135 1.075c.318-.26.728-.627 1.135-1.075c.88-.968 1.615-2.17 1.615-3.422A2.75 2.75 0 0 0 18 14m0 9.701l-.555-.369l-.002-.001l-.004-.003l-.012-.008l-.04-.028a11.335 11.335 0 0 1-.603-.456a12.83 12.83 0 0 1-1.399-1.318c-.995-1.094-2.135-2.767-2.135-4.768a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a12.832 12.832 0 0 1-2.002 1.774l-.04.028l-.012.008l-.004.003h-.002zM16.75 16h2.5v2h-2.5z"
      ></path>
    </svg>
  );
}

function CartTime() {
  return (
    <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" flex flex-col gap-y-1 py-1 px-2 mb-6">
        <div className="flex items-center gap-x-2">
          {DateIcon()}

          <span className=" text-sm text-gray-700 dark:text-gray-200">
            دوشنبه 03 ادریبهشت
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          {LocationIcon()}
          <span className=" text-sm text-gray-700 dark:text-gray-200">
            تهران، سالن میلاد نمایشگاه بین المللی
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <TbClockHour10 className=" h-4 w-4 md:h-5 md:w-5 text-gray-800  dark:text-gray-200" />
          <span className=" text-sm text-gray-700 dark:text-gray-200">
            20:15
          </span>
        </div>
      </div>
      <a
        href="/concert/concert7/time1"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        خرید بلیت
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
