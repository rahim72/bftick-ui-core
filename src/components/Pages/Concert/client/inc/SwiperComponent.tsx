"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import style from "@/styles/swiperMainPage.module.css";
import styleArtist from "@/styles/swiperArtistSlider.module.css";

// import "./style.css";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export function MainSliderComponent() {
  return (
    <>
      <Swiper
        dir="rtl"
        navigation={true}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        className={(style.swiper, "w-full")}
      >
        <SwiperSlide className={style.swiperSlide}>
          <Image
            src="/assets/images/slider/1.webp"
            height={600}
            width={1920}
            sizes="(max-width: 768px) 100vw "
            quality={80}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Image
            src="/assets/images/slider/2.webp"
            height={600}
            width={1920}
            sizes="(max-width: 768px) 100vw "
            quality={80}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Image
            src="/assets/images/slider/4.png"
            height={600}
            width={1920}
            sizes="(max-width: 768px) 100vw "
            quality={80}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export function ArtistComponent() {
  return (
    <>
      <Swiper
        dir="rtl"
        effect="window"
        grabCursor={true}
        navigation={true}
        loop={true}
        breakpointsBase="container"
        slidesPerView={10}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          340: {
            width: 640,
            slidesPerView: 1
          },
          640: {
            width: 640,
            slidesPerView: 2
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3
          },
          1024: {
            width: 1024,
            slidesPerView: 5
          },
          1280: {
            width: 1280,
            slidesPerView: 7
          },
          1536: {
            width: 1536,
            slidesPerView: 9
          },
          1920: {
            width: 1920,
            slidesPerView: 11
          }
        }}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 2,
          stretch: 0,
          depth: 180,
          modifier: 1,
          slideShadows: false
        }}
        className={(styleArtist.swiper, "w-full mb-10")}
      >
        <SwiperSlide className={styleArtist.swiperSlide}>
          <div>
            <Link
              href="#"
              className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 ..."
            >
              <Image
                width={100}
                height={100}
                className="bg-transparent object-cover rounded-md"
                alt=""
                src="/assets/images/concert/5.jpg"
              />

              <h4 className="mt-2 mb-2 text-xs text-center font-semibold text-gray-800 dark:text-gray-200">
                نام و نام خانوادگی
              </h4>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styleArtist.swiperSlide}>
          <div>
            <Link
              href="#"
              className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 ..."
            >
              <Image
                width={100}
                height={100}
                className="rounded-md bg-transparent object-cover"
                alt=""
                src="/assets/images/concert/1.jpg"
              />

              <h4 className="mt-2 mb-2 text-xs text-center font-semibold text-gray-800 dark:text-gray-200">
                نام و نام خانوادگی
              </h4>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styleArtist.swiperSlide}>
          <div>
            <Link
              href="#"
              className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 ..."
            >
              <Image
                width={100}
                height={100}
                className="rounded-md bg-transparent object-cover"
                alt=""
                src="/assets/images/concert/2.jpg"
              />

              <h4 className="mt-2 mb-2 text-xs  text-center font-semibold text-gray-800 dark:text-gray-200">
                نام و نام خانوادگی
              </h4>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styleArtist.swiperSlide}>
          <div>
            <Link
              href="#"
              className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 ..."
            >
              <Image
                src="/assets/images/concert/3.jpg"
                width={100}
                height={100}
                className="rounded-md bg-transparent object-cover"
                alt=""
              />

              <h4 className="mt-2 mb-2 text-xs  text-center font-semibold text-gray-800 dark:text-gray-200">
                نام و نام خانوادگی
              </h4>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styleArtist.swiperSlide}>
          <div>
            <Link
              href="#"
              className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 ..."
            >
              <Image
                width={100}
                height={100}
                className="rounded-md bg-transparent object-cover"
                alt=""
                src="/assets/images/concert/4.jpg"
              />

              <h4 className="mt-2 mb-2 text-xs  text-center font-semibold text-gray-800 dark:text-gray-200">
                نام و نام خانوادگی
              </h4>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styleArtist.swiperSlide}>
          <div>
            <Link
              href="#"
              className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 ..."
            >
              <Image
                width={100}
                height={100}
                className="rounded-md bg-transparent object-cover"
                alt=""
                src="/assets/images/concert/4.jpg"
              />

              <h4 className="mt-2 mb-2 text-xs  text-center font-semibold text-gray-800 dark:text-gray-200">
                نام و نام خانوادگی
              </h4>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styleArtist.swiperSlide}>
          <div>
            <Link
              href="#"
              className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 ..."
            >
              <Image
                width={100}
                height={100}
                className="rounded-md bg-transparent object-cover"
                alt=""
                src="/assets/images/concert/4.jpg"
              />

              <h4 className="mt-2 mb-2 text-xs  text-center font-semibold text-gray-800 dark:text-gray-200">
                نام و نام خانوادگی
              </h4>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styleArtist.swiperSlide}>
          <div>
            <Link
              href="#"
              className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 ..."
            >
              <Image
                width={100}
                height={100}
                className="rounded-md bg-transparent object-cover"
                alt=""
                src="/assets/images/concert/4.jpg"
              />

              <h4 className="mt-2 mb-2 text-xs  text-center font-semibold text-gray-800 dark:text-gray-200">
                نام و نام خانوادگی
              </h4>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styleArtist.swiperSlide}>
          <div>
            <Link
              href="#"
              className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 ..."
            >
              <Image
                width={100}
                height={100}
                className="rounded-md bg-transparent object-cover"
                alt=""
                src="/assets/images/concert/4.jpg"
              />

              <h4 className="mt-2 mb-2 text-xs  text-center font-semibold text-gray-800 dark:text-gray-200">
                نام و نام خانوادگی
              </h4>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styleArtist.swiperSlide}>
          <div>
            <Link
              href="#"
              className="cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 ..."
            >
              <Image
                width={100}
                height={100}
                className="rounded-md bg-transparent object-cover"
                alt=""
                src="/assets/images/concert/4.jpg"
              />

              <h4 className="mt-2 mb-2 text-xs  text-center font-semibold text-gray-800 dark:text-gray-200">
                نام و نام خانوادگی
              </h4>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
