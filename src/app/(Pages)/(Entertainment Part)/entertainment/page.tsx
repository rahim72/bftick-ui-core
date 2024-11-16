import {
  MainSliderComponent,
  ArtistComponent
} from "@/components/Pages/Concert/client/inc/SwiperComponent";
import { CartSection } from "@/components/Pages/Concert/client/inc/HomeSection";
import { cn } from "@/utils/tools";
import localFont from "next/font/local";
// const myFontNas = localFont({ src: "../../../../fonts/IranNastaliq.woff2" });

export const metadata = {
  title: "بی اف تیکت | خرید بلیت کنسرت"
};

function CartLoop(index: number) {
  let content = [];
  for (let i = 1; i < index; i++) {
    content.push(
      <CartSection
        key={i}
        title={`کنسرت ${i}`}
        image={`/assets/images/concert/${i}.jpg`}
        slug={`concert-${i}`}
        status={Math.floor(Math.random() * 5)}
      />
    );
  }

  return content;
}

export default function Home() {
  return (
    <>
      <div>
        {/* mt-[50px] lg:mt-20 */}
        <main className=" mt-[50px] lg:mt-12 mb-16">
          <section className=" flex flex-col xs:h-[170px] sm:h-[280px] md:h-[400px] lg:flex-row lg:h-[600px]">
            <MainSliderComponent />
            {/* <HomeSlider /> */}
          </section>

          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700" />

          <section className=" lg:container  lg:mx-auto w-full p-6">
            <div
              className={cn(
                "flex items-center animate__animated animate__bounceInRight mb-4 w-full bg-gray-200 px-2 py-1 rounded-md text-gray-700 shadow-gray-300 dark:text-gray-100 dark:bg-gray-700 shadow-sm dark:shadow-gray-500"
              )}
            >
              <h2 className=" text-lg text-nowrap font-bold ">کنسرت ها</h2>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
              {CartLoop(10)}
            </div>
          </section>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700" />
          <section className=" lg:container lg:mx-auto w-full p-6">
            <div
              className={cn(
                " flex items-center animate__animated animate__bounceInRight mb-4 w-full bg-gray-200 px-2 py-1 rounded-md text-gray-700 shadow-gray-300 dark:text-gray-100 dark:bg-gray-700 shadow-sm dark:shadow-gray-500"
              )}
            >
              <h2 className=" text-lg text-nowrap font-bold ">کنسرت ها</h2>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
              {CartLoop(10)}
            </div>
          </section>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700" />
          <section className=" lg:container  lg:mx-auto w-full p-6">
            <div
              className={cn(
                "flex items-center mb-4 w-full bg-gray-200 px-2 py-1 rounded-md text-gray-700 shadow-gray-300 dark:text-gray-100 dark:bg-gray-700 shadow-sm dark:shadow-gray-500"
              )}
            >
              <h2 className=" text-lg text-nowrap font-bold ">کنسرت ها</h2>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
              {CartLoop(10)}
            </div>
          </section>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700" />

          <section className=" flex flex-wrap justify-center  lg:mx-6 relative z-10 bg-slate-100 dark:bg-slate-700 md:rounded-bl-3xl  md:rounded-tr-3xl  md:rounded-tl  md:rounded-br">
            <section className=" lg:container mx-10 lg:mx-auto w-full p-2">
              <div
                className={cn(
                  "flex items-center mb-4 w-full bg-gray-200 px-2 py-1 rounded-md text-gray-700 shadow-gray-300 dark:text-gray-100 dark:bg-gray-700 shadow-sm dark:shadow-gray-500"
                )}
              >
                <h2 className=" text-lg text-nowrap font-bold ">هنرمندان</h2>
              </div>
              <div>
                <ArtistComponent />
              </div>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}
