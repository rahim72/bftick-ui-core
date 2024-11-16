"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Blog() {
  return (
    <>
      <section className=" md:container mx-10 md:mx-auto w-full p-2  flex flex-col gap-x-2">
        <div className="mt-2 mb-2 w-full bg-gray-100 py-1 rounded-md border shadow flex items-center">
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
        <div className="w-full flex gap-x-4">
          <div className=" flex flex-col bg-gray-100 rounded-md w-72 border shadow shadow-gray-200 dark:bg-gray-800 dark:shadow-gray-800"></div>
          <Suspense fallback={<p>Loading feed...</p>}>
            <div className="">{PostComponent()}</div>
          </Suspense>
        </div>
      </section>
    </>
  );
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
            placeholder="جستجو ..."
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

function PostComponent() {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
        <Link
          href="#"
          className="flex flex-col items-center relative bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className=" absolute top-0 left-2">
            <span className=" text-xs text-gray-800 dark:text-gray-100">
              1403/01/10
            </span>
          </div>
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            width={100}
            height={100}
            src="/assets/images/concert/1.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-lg line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white">
              ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </h5>
            <p className="mb-3 font-normal text-xs line-clamp-3 text-gray-700 dark:text-gray-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته
            </p>
          </div>

          <div className=" absolute  bottom-2 left-3">
            <button
              type="button"
              className=" bg-blue-700 hover:bg-blue-800 rounded-md  py-1 px-2"
            >
              <span className=" text-xs text-gray-100">مشاهده</span>
            </button>
          </div>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center relative bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className=" absolute top-0 left-2">
            <span className=" text-xs text-gray-800 dark:text-gray-100">
              1403/01/10
            </span>
          </div>
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            width={100}
            height={100}
            src="/assets/images/concert/1.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-lg line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white">
              ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </h5>
            <p className="mb-3 font-normal text-xs line-clamp-3 text-gray-700 dark:text-gray-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته
            </p>
          </div>

          <div className=" absolute  bottom-2 left-3">
            <button
              type="button"
              className=" bg-blue-700 hover:bg-blue-800 rounded-md  py-1 px-2"
            >
              <span className=" text-xs text-gray-100">مشاهده</span>
            </button>
          </div>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center relative bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className=" absolute top-0 left-2">
            <span className=" text-xs text-gray-800 dark:text-gray-100">
              1403/01/10
            </span>
          </div>
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            width={100}
            height={100}
            src="/assets/images/concert/1.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-lg line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white">
              ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </h5>
            <p className="mb-3 font-normal text-xs line-clamp-3 text-gray-700 dark:text-gray-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته
            </p>
          </div>

          <div className=" absolute  bottom-2 left-3">
            <button
              type="button"
              className=" bg-blue-700 hover:bg-blue-800 rounded-md  py-1 px-2"
            >
              <span className=" text-xs text-gray-100">مشاهده</span>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
