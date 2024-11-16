"use client";
import React from "react";
import { Breadcrumb, Button, Timeline } from "flowbite-react";
import { HiHome, HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { useSelectedLayoutSegment } from "next/navigation";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const SetHref = () => {
  const segment: any = useSelectedLayoutSegment();
  let res: any = {
    title: "",
    link: null
  };
  switch (segment) {
    case "contact-us":
      res = {
        title: "تماس با ما",
        link: segment
      };
      return res;
      break;
    case "work-with-us":
      res = {
        title: "همکاری با ما",
        link: segment
      };
      return res;
      break;
    case "about-us":
      res = {
        title: "درباره ما",
        link: segment
      };
      return res;
      break;
    case "purchase-guide":
      res = {
        title: "راهنمای خرید",
        link: segment
      };
      return res;

    case "blog":
      res = {
        title: "وبلاگ",
        link: segment
      };
      return res;

      break;
  }
};

export function BreadcrumbMenuHome(...props: any) {
  return (
    <Breadcrumb
      aria-label="Solid background breadcrumb example"
      className="rounded bg-[hsla(0,0%,100%,0.8)] px-5 py-1 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 backdrop-blur-[30px]"
    >
      <Breadcrumb.Item href="/" icon={HiHome}>
        خانه
      </Breadcrumb.Item>
      <Breadcrumb.Item href={SetHref()?.link}>
        {SetHref()?.title}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export function TimeLine(...props: any) {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

export function ItemsComponent(props: any) {
  return (
    <>
      <div className="w-full px-2 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-md rounded-md">
          <div className="px-4 py-2 lg:py-5 flex-auto">
            <div className="text-white p-2 lg:p-3 text-center inline-flex items-center mb-4 shadow-lg rounded-full bg-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-200"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16 4L9 8.04v7.92L16 20l7-4.04V8.04m-7-1.73l3.8 2.19l-3.8 2.19l-3.79-2.19M0 7v2h7V7m4 3.11l4 2.31v4.69l-4-2.3m10-4.7v4.7l-4 2.3v-4.69M2 11v2h5v-2m-3 4v2h3v-2"
                />
              </svg>
            </div>
            <h6 className="text-sm lg:text-lg font-semibold">{props.title}</h6>
            <p className="mt-2 mb-4 text-xs lg:text-sm text-gray-600">
              {props.description}
            </p>
            {/* <a
                                type="button"
                                target="_blank"
                                :href="route('home.shop')"
                                class="px-2 py-2 bg-blue-600 hover:bg-blue-700 cursor-pointer hover:text-white rounded-md text-white text-xs lg:text-sm"
                            >
                                فروشگاه
                            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export function DatePickerComponent() {
  // animations={[transition({ duration: 800, from: 35 })]}
  return (
    <DatePicker
      range
      plugins={[<DatePanel key={"hh"} position="left" />]}
      calendar={persian}
      locale={persian_fa}
      dateSeparator=" تا "
      calendarPosition="bottom-right"
    />
  );
}
