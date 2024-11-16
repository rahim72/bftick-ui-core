"use client";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { useState } from "react";

export default function MusicPage() {
  const Music = [
    {
      title: "دانلود آهنگ یه روز دوتایی از دست همشون در میریم",
      image: "/assets/images/gallery/4.jpg",
      created_at: "28 مرداد 1403",
      status: "new",
      category: "pop",
      singer: "میثم ابراهیمی",
      descreption: "",
      short_description: `<p>تو رویای من بودی تو منو گذاشتی تنها<br>باور نمیکردم الان بری با یکی..<br>دلم میگیره بدون تو تموم روزارو میبینم هرجا<br>باورش سخته ولی خب میدونی تموم روزارو درداش<br>من همه باورامو دادم زدم فریاد<br>کسی نمیدونه کجامو چرا تنهام<br>این رویا ماله منه این فقط مال منه<br>نزار که بازم بیاد و از تو بگذره<br>من موندم اینجا با سختی رویاهام</p>`
    },
    {
      title: "دانلود آهنگ یه روز دوتایی از دست همشون در میریم",
      image: "/assets/images/gallery/3.jpg",
      created_at: "28 مرداد 1403",
      status: "new",
      category: "pop",
      singer: "میثم ابراهیمی",
      descreption: "",
      short_description: `<p>تو رویای من بودی تو منو گذاشتی تنها<br>باور نمیکردم الان بری با یکی..<br>دلم میگیره بدون تو تموم روزارو میبینم هرجا<br>باورش سخته ولی خب میدونی تموم روزارو درداش<br>من همه باورامو دادم زدم فریاد<br>کسی نمیدونه کجامو چرا تنهام<br>این رویا ماله منه این فقط مال منه<br>نزار که بازم بیاد و از تو بگذره<br>من موندم اینجا با سختی رویاهام</p>`
    },
    {
      title: "دانلود آهنگ یه روز دوتایی از دست همشون در میریم",
      image: "/assets/images/gallery/3.jpg",
      created_at: "28 مرداد 1403",
      status: "new",
      category: "pop",
      singer: "میثم ابراهیمی",
      descreption: "",
      short_description: `<p>تو رویای من بودی تو منو گذاشتی تنها<br>باور نمیکردم الان بری با یکی..<br>دلم میگیره بدون تو تموم روزارو میبینم هرجا<br>باورش سخته ولی خب میدونی تموم روزارو درداش<br>من همه باورامو دادم زدم فریاد<br>کسی نمیدونه کجامو چرا تنهام<br>این رویا ماله منه این فقط مال منه<br>نزار که بازم بیاد و از تو بگذره<br>من موندم اینجا با سختی رویاهام</p>`
    },
    {
      title: "دانلود آهنگ یه روز دوتایی از دست همشون در میریم",
      image: "/assets/images/gallery/4.jpg",
      created_at: "28 مرداد 1403",
      status: "new",
      category: "pop",
      singer: "میثم ابراهیمی",
      descreption: "",
      short_description: `<p>تو رویای من بودی تو منو گذاشتی تنها<br>باور نمیکردم الان بری با یکی..<br>دلم میگیره بدون تو تموم روزارو میبینم هرجا<br>باورش سخته ولی خب میدونی تموم روزارو درداش<br>من همه باورامو دادم زدم فریاد<br>کسی نمیدونه کجامو چرا تنهام<br>این رویا ماله منه این فقط مال منه<br>نزار که بازم بیاد و از تو بگذره<br>من موندم اینجا با سختی رویاهام</p>`
    },
    {
      title: "دانلود آهنگ یه روز دوتایی از دست همشون در میریم",
      image: "/assets/images/gallery/5.jpg",
      created_at: "28 مرداد 1403",
      status: "new",
      category: "pop",
      singer: "میثم ابراهیمی",
      descreption: "",
      short_description: `<p>تو رویای من بودی تو منو گذاشتی تنها<br>باور نمیکردم الان بری با یکی..<br>دلم میگیره بدون تو تموم روزارو میبینم هرجا<br>باورش سخته ولی خب میدونی تموم روزارو درداش<br>من همه باورامو دادم زدم فریاد<br>کسی نمیدونه کجامو چرا تنهام<br>این رویا ماله منه این فقط مال منه<br>نزار که بازم بیاد و از تو بگذره<br>من موندم اینجا با سختی رویاهام</p>`
    }
  ];

  const Singer = [
    {
      name: "خواننده 1",
      image: "/assets/images/concert/1.jpg"
    },
    {
      name: "خواننده 1",
      image: "/assets/images/concert/2.jpg"
    },
    {
      name: "خواننده 1",
      image: "/assets/images/concert/3.jpg"
    },
    {
      name: "خواننده 1",
      image: "/assets/images/concert/4.jpg"
    },
    {
      name: "خواننده 1",
      image: "/assets/images/concert/5.jpg"
    },
    {
      name: "خواننده 1",
      image: "/assets/images/concert/6.jpg"
    },
    {
      name: "خواننده 1",
      image: "/assets/images/concert/7.jpg"
    },
    {
      name: "خواننده 1",
      image: "/assets/images/concert/8.jpg"
    },
    {
      name: "خواننده 1",
      image: "/assets/images/concert/9.jpg"
    },
    {
      name: "خواننده 1",
      image: "/assets/images/concert/10.jpg"
    }
  ];
  return (
    <>
      <div className=" mx-4 lg:container lg:mx-auto ">
        <div className=" mb-4">
          <div className=" border p-4 rounded"></div>
        </div>

        <div className=" w-full">
      
        </div>
        <div className=" flex flex-col lg:flex-row lg:gap-x-3">
          <div className=" border rounded  max-w-sm "></div>
          <div>
            <CardViews data={Music} />
          </div>
          <div className=" border rounded  max-w-sm "></div>
        </div>
      </div>
    </>
  );
}

const CardViews = ({ ...props }: any) => {
  return (
    <>
      <div className=" flex flex-col gap-y-2">
        {props.data.map((item: any, index: number) => (
          <CardView key={index} music={item} />
        ))}
      </div>
    </>
  );
};

const CardView = ({ music }: any) => {
  const [showModal, setShow] = useState(false);

  const handleMusicButton = () => setShow(true);

  return (
    <>
      <div className="flex flex-col relative items-center bg-white border border-gray-200 rounded-md lg:flex-row lg:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-sm">
        <Image
          src={music.image}
          alt={music.title}
          width={400}
          height={300}
          className="object-cover w-full rounded-t-lg h-[252px] md:w-[300px] md:rounded-none md:rounded-s-lg"
        />

        <div className="flex flex-col justify-between p-2 leading-normal w-full pr-2">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white mt-4">
            {music.title}
          </h5>
          <div className="text-sm line-clamp-3">
            {parse(music.short_description)}
          </div>
          <div className=" flex flex-col gap-y-1 w-1/2 mt-2">
            <Link
              href="#"
              className=" bg-blue-500 hover:bg-blue-600 text-gray-50 rounded py-2 px-4 text-xs flex flex-row justify-between text-center items-center"
            >
              <span>دانلود موزیک</span>
              <DonwloadMusic />
            </Link>
            <button
              type="button"
              onClick={handleMusicButton}
              className=" bg-purple-600 hover:bg-purple-800 text-gray-50 rounded py-2 px-4 text-xs flex flex-row justify-between text-center items-center"
            >
              <span>پخش آنلاین </span>
              <span>
                <PlayMusicIcon />
              </span>
            </button>
          </div>

          <div className="flex justify-end">
            <Link
              href=""
              className=" bg-blue-500 hover:bg-blue-600 text-gray-50 rounded py-2 px-4 text-xs bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-center me-2 mb-2"
            >
              مشاهده
            </Link>
          </div>
          <div className=" absolute top-2 left-2">
            <small className=" text-xs">{music.created_at}</small>
          </div>
        </div>
        {/* {showModal && <MusicBottomNavigation music={music} />} */}
      </div>
    </>
  );
};

const PlayMusicIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M15.987 3.016a1 1 0 0 0-1.285-.79l-7 2.187A1 1 0 0 0 7 5.368V13.5a2.5 2.5 0 1 0 1 2V8.368l7-2.188v2.843q.516.046 1 .184V3.18q0-.084-.013-.164M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.263-.435l-2.994-1.65a.5.5 0 0 0-.742.437v3.3a.5.5 0 0 0 .742.438l2.994-1.65a.5.5 0 0 0 0-.875"
        ></path>
      </svg>
    </>
  );
};

const DonwloadMusic = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
          <path
            fill="currentColor"
            d="M12 2a1 1 0 0 0-1 1v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-6V3a1 1 0 0 0-1-1m1 3v8.828L14.828 12a1 1 0 0 1 1.415 1.414l-3.36 3.359a1.25 1.25 0 0 1-1.767 0l-3.359-3.359A1 1 0 1 1 9.172 12L11 13.828V5z"
          ></path>
        </g>
      </svg>
    </>
  );
};
