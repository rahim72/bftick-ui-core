import { BgStaticPages } from "@/components/Pages/Concert/client/inc/BackgroundInc";
import { BreadcrumbMenuHome } from "@/components/Pages/Concert/client/inc/inc";
export default function StaticLayout({
  children
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
              {children}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
