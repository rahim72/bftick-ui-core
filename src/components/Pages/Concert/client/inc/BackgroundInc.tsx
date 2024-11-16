"use client";
import { useSelectedLayoutSegment } from "next/navigation";

const SelectBg = () => {
  const segment: any = useSelectedLayoutSegment();
  console.log(segment);
  let details: any = {
    bg: "",
    title: "",
    description: ""
  };

  switch (segment) {
    case "contact-us":
      details = {
        bg: "bg-[url(/assets/images/StaticPage/contact-us-background.jpg)]",
        title: "تماس با ما",
        description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
      };
      return details;
      break;
    case "work-with-us":
      details = {
        bg: "bg-[url(/assets/images/StaticPage/work-with-us-background.jpg)]",
        title: "همکاری با ما",
        description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
      };
      return details;
      break;
    case "about-us":
      details = {
        bg: "bg-[url(/assets/images/StaticPage/about-us-background.jpg)]",
        title: "درباره ما",
        description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
      };
      return details;
      break;
    case "purchase-guide":
      details = {
        bg: "bg-[url(/assets/images/StaticPage/purchase-guide-background.jpg)]",
        title: "راهنمای خرید",
        description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
      };
      return details;
      break;
    case "blog":
      details = {
        bg: "bg-[url(/assets/images/StaticPage/purchase-guide-background.jpg)]",
        title: "وبلاگ",
        description:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
      };
      return details;
      break;

    default:
      details = {
        bg: "bg-[url(/assets/images/StaticPage/purchase-guide-background.jpg)]",
        title: "",
        description: ""
      };
      return details;
      break;
  }
};
export function BgStaticPages() {
  return (
    <>
      <div className="relative h-[600px] overflow-hidden flex content-center items-center justify-center">
        <div
          className={`absolute top-0 w-full h-full bg-center bg-cover ${
            SelectBg()?.bg
          }`}
        >
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>

        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full text-center lg:w-6/12 ">
              <div className="">
                <h1 className="text-white font-semibold text-lg lg:text-2xl">
                  {SelectBg()?.title}
                </h1>
                <p className="mt-4 px-1 text-xs md:text-sm lg:text-lg text-gray-300">
                  {SelectBg()?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

