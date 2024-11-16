import Footer from "@/components/LandingPage/footer";
import { Flowbite } from "flowbite-react";
import { themeLanding } from "../themeLanding";
import MotionNav from "@/components/LandingPage/MotionNav";
import BottomNavigationLandingPage from "@/components/LandingPage/BottomNavigationLandingPage";
import Link from "next/link";
import Image from "next/image";
export default function RootLayoutLandingPage({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" h-screen overflow-hidden p-0 m-0 relative">
        <Flowbite theme={{ theme: themeLanding }}>
          <MotionNav />
          <MenuNavigation />
          <div className=" h-screen">{children}</div>
          <div className="hidden lg:flex justify-center bg-transparent">
            <Footer />
          </div>
          <BottomNavigationLandingPage />
        </Flowbite>
      </div>
    </>
  );
}

function MenuNavigation() {
  return (
    <>
      <div className=" absolute top-20 right-4 w-[200px] bg-slate-100 h-[300px] z-50 rounded-md hidden lg:block shadow-md">
        <div className="flex justify-center items-center mt-4">
          <Image
            src="/assets/Logo/bflogoblack.png"
            width={150}
            height={65}
            className=" animate__animated  animate__backInRight h-[37px] w-[150px]"
            alt="لوگو بی اف تیک"
          />
        </div>
        <div className=" p-3 flex flex-col gap-y-2 align-middle mt-4 border shadow bg-gray-200 mx-2">
          <Link
            href="/"
            className=" bg-blue-500 hover:bg-blue-600 px-2 flex gap-x-2 text-white rounded-md py-1 shadow-sm"
          >
            خانه
          </Link>
          <Link
            href="/"
            className=" bg-blue-500 hover:bg-blue-600 px-2 flex gap-x-2 text-white rounded-md py-1 shadow-sm"
          >
            درباره ما
          </Link>

          <Link
            href="/"
            className=" bg-blue-500 hover:bg-blue-600 px-2 flex gap-x-2 text-white rounded-md py-1 shadow-sm"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </>
  );
}
