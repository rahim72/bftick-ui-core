import { url } from "inspector";
import customStyle from "@/styles/staticPage.module.css";
import Image from "next/image";
import ItemsComponent from "@/components/Pages/Concert/client/inc/ItemsComponent";
export const metadata = {
  title: "درباره ما",
  description: ""
};

export default function AboutUs() {
  const Items = [
    {
      id: 1,
      title: "تست 1",
      description: "تست توضیحات 1",
      logo: ""
    },
    {
      id: 2,
      title: "تست 2",
      description: "تست توضیحات 2",
      logo: ""
    },
    {
      id: 3,
      title: "تست 3",
      description: "تست توضیحات 3",
      logo: ""
    },
    {
      id: 4,
      title: "تست 4",
      description: "تست توضیحات 4",
      logo: ""
    }
  ];

  return (
    <>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center font-iransans"
        style={{ minHeight: "75vh" }}
      >
        <div
          className={
            "absolute top-0 w-full h-full bg-center bg-cover bg-about-us"
          }
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-70 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className=" justify-end flex flex-wrap items-center">
            <div className="w-full lg:w-6/12 text-center">
              <div className="flex justify-center items-center flex-col gap-2">
                <h1 className="text-white font-semibold text-lg lg:text-2xl">
                  درباره ما
                </h1>
                <p className="mt-4 mx-2 text-xs md:text-sm lg:text-lg text-gray-300">
                  متن برای درباره ما
                </p>
                <Image
                  loading="lazy"
                  width={20}
                  height={60}
                  src="/logo.png"
                  className="w-20 h-10 lg:w-32 lg:h-10 animate__animated animate__backInRight"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 80"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-100 fill-current"
              points="2560 0 2560 100 0 120"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-12 lg:pb-20 bg-slate-100 -mt-24 font-iransans">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap  lg:flex-row ">
            {Items.map((item) => (
              <ItemsComponent
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center mt-5 lg:mt-6">
            <div className="w-full md:w-8/12 px-4 mr-auto ml-auto">
              <div className="flex items-center gap-x-2 align-middle text-sm mb-5">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-700"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M13 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-3 3.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v4.25h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V12h-.75a.75.75 0 0 1-.75-.75Z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12Z"
                    />
                  </svg>
                </div>
                درباره شرکت
              </div>

              <div className=" flex">
                <p className="text-xs lg:text-sm font-light leading-relaxed mt-2 mb-4 text-gray-700">
                  توسعه اینترنت روش‌های خرید ما را به کلی دگرگون کرده است. منافع
                  موجود در خرید اینترنتی هر روز تعداد بیشتری از مردم را به تجربه
                  آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می‏‌کند. امروز
                  دیگر افراد این روش خرید را بیشتر منطبق بر شرایط زندگی مدرن
                  می‏‏‏‌بینند. ویژگی‏‏‏‌ها و طبیعت خرید اینترنتی با روحیات و
                  نیازهای رو به رشد ما هماهنگ‏‏‌تر شده است. همه سخت در حال تلاش
                  برای توسعه اینترنتتوسعه اینترنت روش‌های خرید ما را به کلی
                  دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز تعداد
                  بیشتری از مردم را به تجربه آن و ایجاد تغییر در الگوهای متداول
                  خرید ترغیب می‏‌کند. امروز دیگر افراد این روش خرید را بیشتر
                  منطبق بر شرایط زندگی مدرن می‏‏‏‌بینند. ویژگی‏‏‏‌ها و طبیعت
                  خرید اینترنتی با روحیات و نیازهای رو به رشد ما هماهنگ‏‏‌تر شده
                  است. همه سخت در حال تلاش برای پیشرفت‏‏‌های شخصی و جمعی خود
                  هستیم.
                </p>
                <Image
                  width={400}
                  height={200}
                  src="/assets/images/about_us2.jpg"
                  alt="."
                />
              </div>

              <p className="text-xs lg:text-sm font-light leading-relaxed mt-0 mb-4 text-gray-700">
                امروزه بهای اوقات فراغت ما با وجود مشغله‏‌های روزانه بسیار
                گرانبها‌تر شده است. همه ما برای این اوقات برنامه ریزی فشرده‏‌تری
                داریم. دیگر صرف زمان‌هایی نسبتا طولانی در فعالیت‏‌های نه‌چندان
                با اهمیت مانند خرید و سفرهای شهری برای بسیاری از انسان‌ها اولویت
                خود را از دست داده است. هوشمندی انسان‌ها، آنها را مجاب می‏‌کند
                که با تغییر در الگوهای قدیمی و نا‏کارآمد زندگی، هوشمندانه‏‌تر و
                امروزی‏‌تر زندگی کنند. صرف اوقات فراغت برای تفریح، آموزش، ورزش،
                لذت بردن از علایق شخصی و رفع خستگی‏‏‌های روزانه اولویت بیشتری
                نسبت به فعالیت‌‏‏‏های وقت‌گیر و در عین حال کم اهمیت‏‏‏‌تر مانند
                خرید کردن دارند.
              </p>

              <p className="text-xs lg:text-sm font-light leading-relaxed mt-0 mb-4 text-gray-700">
                امروز دیگر برای بیشتر نیازهای روزمره راه‏ حل‏‏‏‌های جدیدتری وجود
                دارد، از جمله برای انتخاب و خرید کالا. دیگر کمتر کسی برای خرید
                کالا، بدون تحقیق و بررسی دقیق اقدام می‏‌کند. مشتریان پیشاپیش و
                قبل از خرید از حق انتخاب گسترده خود و اطلاعات موجود نهایت
                استفاده را می‏‌برند. مشتری در دنیای امروز حق انتخاب بیشتری را
                طلب می‏‌کند و مایل است دقیق‏‌تر و با قطعیت بیشتری انتخاب کند.
                زندگی امروزی بی‏‌گمان خرید به رو‏‌ش‌های نو‏تر، هوشمندانه‏‌تر و
                البته لذت‏‏ بخش‏‌تری را می‏‌طلبد. از همین روست که هر روز به
                تعداد استفاده‏ کنندگان سرویس‌های اینترنتی و مشتریان
                فروشگاه‏‏‌‏های اینترنتی افزوده می‌‏‏شود. روش‌های خرید ما را به
                کلی دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز تعداد
                بیشتری از مردم را به تجربه آن و ایجاد تغییر در الگوهای متداول
                خرید ترغیب می‏‌کند. امروز دیگر افراد این روش خرید را بیشتر منطبق
                بر شرایط زندگی مدرن می‏‏‏‌بینند. ویژگی‏‏‏‌ها و طبیعت خرید
                اینترنتی با روحیات و نیازهای رو به رشد ما هماهنگ‏‏‌تر شده است.
                همه سخت در حال تلاش برای پیشرفت‏‏‌های شخصی و جمعی خود هستیم.
                امروزه بهای اوقات فراغت ما با وجود مشغله‏‌های روزانه بسیار
                گرانبها‌تر شده است. همه ما برای این اوقات برنامه ریزی فشرده‏‌تری
                داریم. دیگر صرف زمان‌هایی نسبتا طولانی در فعالیت‏‌های نه‌چندان
                با اهمیت مانند خرید و سفرهای شهری برای بسیاری از انسان‌ها اولویت
                خود را از دست داده است. هوشمندی انسان‌ها، آنها را مجاب می‏‌کند
                که با تغییر در الگوهای قدیمی و نا‏کارآمد زندگی، هوشمندانه‏‌تر و
                امروزی‏‌تر زندگی کنند. صرف اوقات فراغت برای تفریح، آموزش، ورزش،
                لذت بردن از علایق شخصی و رفع خستگی‏‏‌های روزانه اولویت بیشتری
                نسبت به فعالیت‌‏‏‏های وقت‌گیر و در عین حال کم اهمیت‏‏‏‌تر مانند
                خرید کردن دارند.
              </p>
              <p className="text-xs lg:text-sm font-light leading-relaxed mt-0 mb-4 text-gray-700">
                امروز دیگر برای بیشتر نیازهای روزمره راه‏ حل‏‏‏‌های جدیدتری وجود
                دارد، از جمله برای انتخاب و خرید کالا. دیگر کمتر کسی برای خرید
                کالا، بدون تحقیق و بررسی دقیق اقدام می‏‌کند. مشتریان پیشاپیش و
                قبل از خرید از حق انتخاب گسترده خود و اطلاعات موجود نهایت
                استفاده را می‏‌برند. مشتری در دنیای امروز حق انتخاب بیشتری را
                طلب می‏‌کند و مایل است دقیق‏‌تر و با قطعیت بیشتری انتخاب کند.
                زندگی امروزی بی‏‌گمان خرید به رو‏‌ش‌های نو‏تر، هوشمندانه‏‌تر و
                البته لذت‏‏ بخش‏‌تری را می‏‌طلبد. از همین روست که هر روز به
                تعداد استفاده‏ کنندگان سرویس‌های اینترنتی و مشتریان
                فروشگاه‏‏‌‏های اینترنتی افزوده می‌‏‏شود.پیشرفت‏‏‌های شخصی و جمعی
                خود هستیم. امروزه بهای اوقات فراغت ما با وجود مشغله‏‌های روزانه
                بسیار گرانبها‌تر شده است. همه ما برای این اوقات برنامه ریزی
                فشرده‏‌تری داریم. دیگر صرف زمان‌هایی نسبتا طولانی در فعالیت‏‌های
                نه‌چندان با اهمیت مانند خرید و سفرهای شهری برای بسیاری از
                انسان‌ها اولویت خود را از دست داده است. هوشمندی انسان‌ها، آنها
                را مجاب می‏‌کند که با تغییر در الگوهای قدیمی و نا‏کارآمد زندگی،
                هوشمندانه‏‌تر و امروزی‏‌تر زندگی کنند. صرف اوقات فراغت برای
                تفریح، آموزش، ورزش، لذت بردن از علایق شخصی و رفع خستگی‏‏‌های
                روزانه اولویت بیشتری نسبت به فعالیت‌‏‏‏های وقت‌گیر و در عین حال
                کم اهمیت‏‏‏‌تر مانند خرید کردن دارند. امروز دیگر برای بیشتر
                نیازهای روزمره راه‏ حل‏‏‏‌های جدیدتری وجود دارد، از جمله برای
                انتخاب و خرید کالا. دیگر کمتر کسی برای خرید کالا، بدون تحقیق و
                بررسی دقیق اقدام می‏‌کند. مشتریان پیشاپیش و قبل از خرید از حق
                انتخاب گسترده خود و اطلاعات موجود نهایت استفاده را می‏‌برند.
                مشتری در دنیای امروز حق انتخاب بیشتری را طلب می‏‌کند و مایل است
                دقیق‏‌تر و با قطعیت بیشتری انتخاب کند. زندگی امروزی بی‏‌گمان
                خرید به رو‏‌ش÷‌های نو‏تر، هوشمندانه‏‌تر و البته لذت‏‏ بخش‏‌تری
                را می‏‌طلبد. از همین روست که هر روز به تعداد استفاده‏ کنندگان
                سرویس‌های اینترنتی و مشتریان فروشگاه‏‏‌‏های اینترنتی افزوده
                می‌‏‏شود. همچنین با شیوع ویروس کرونا در جهان این امر بیش از بیش
                مورد استقبال همگان برای فروش و ارائه خدمات قرار گرفت و می توان
                گفت که این شیوه از فروش به طور کلی و قطعی جایگزین روش های سنتی
                فروش خواهد شد.
              </p>
            </div>
            {/* <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-md">
                <img
                  alt="..."
                  loading="lazy"
                  src="@/assets/images/static/aboutus1.jpg"
                  className="w-full align-middle rounded-t-lg"
                />

                <blockquote className="relative p-8 mb-4 text-pink-800">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{ height: "95px", top: "-94px" }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-800/75 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-sm lg:text-lg font-bold">
                    چاپگرها و متون بلکه روزنامه
                  </h4>
                  <p className="text-xs lg:text-sm font-light mt-2 text-gray-800">
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    لازم است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    سطرآنچنان که لازم است
                  </p>
                </blockquote>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="relative py-12 lg:py-20 font-iransans bg-gray-50">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute border-none border-4 pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 95"
            x="0"
            y="0"
          >
            <polygon
              className="fill-gray-50 border-none"
              points="2560 0 2560 100 0 122"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4 py-4">
              <img
                loading="lazy"
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="@/assets/images/emailpage.png"
              />
            </div>
            <div className="w-full md:w-8/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="bg-pink-100 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full">
                  <img
                    loading="lazy"
                    className="w-12 h-12"
                    src="@/assets/images/static/zilonex-logo-tr.png"
                    alt="فروشگاه زینولکس"
                  />
                </div>
                <h3 className="text-xs lg:text-lg font-semibold">
                  فروشگاه زینولکس
                </h3>
                <p className="mt-4 text-xs lg:text-lg leading-relaxed text-gray-600">
                  با ارائه طیف گسترده ای از معتبرترین برند ها در زمینه فروش نوشت
                  افزار ، لوازم هنری ، لوازم اداری ، ماشین های اداری ، اسباب
                  بازی و بازی فکری و سرگرمی و با همکاری نزدیک با وارد‏کنندگان و
                  توزیع‏ کنندگان اصلی این کالاها در ایران، تلاش می‏‌کند تا
                  نیازهای متفاوت مشتریان با کاربری‏‌های متفاوت آنان را برآورده
                  سازد . زینولکس با درک اهمیت این موضوع برای مشتریان خود و با
                  بکارگیری نهایت توان و ابزارهای در دسترس در تعاملات خود با
                  تامین‏ کنندگان، می‏‏‌کوشد امکان ارائه پایین‏‏‌ترین قیمت‏‏‌ها و
                  بهترین خدمات را فراهم آورد. طرح‏‏‌های مشوق خرید همواره مورد
                  توجه مشتریان بوده و زینولکس نیز به منظور قدردانی از مشتریان
                  وفادار خود همواره تخفیف‏‌های قابل توجهی را در قالب طرح‌های
                  مختلف مشوق خرید برای آنان در نظر می‏‏‌گیرد. کیفیت و سهولت
                  استفاده از وب‏ سایت زینولکس و خدمات ارائه شده در آن، همواره
                  یکی از مهم‏‌ترین و با اولویت‌ترین موضوعات در زینولکس بوده است
                  و همه کارکنان فنی و تخصصی آن نهایت تلاش خود را به عمل می‌آورند
                  تا با ارائه با‏کیفیت‏‌ترین و به‏‌روز‏ترین سرویس‏‌های مبتنی بر
                  وب و تسهیل تمامی فرآیندهای بررسی، انتخاب و خرید کالا در وب
                  سایت زینولکس، خدماتی شایسته و تجربه‌ای خوشایند را برای مخاطبان
                  خود به ارمغان بیاورند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
