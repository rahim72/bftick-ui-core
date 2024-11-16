"use client";

import { Footer, Button } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter
} from "react-icons/bs";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const FooterPart = () => {
  const [phone_number, setPhoneNumber] = useState("");

  return (
    <>
      <Footer container>
        <div className="w-full container mx-auto">
          <div className=""></div>
          <Footer.Divider />
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0">
            {/* <div>
              <Footer.Brand
                href="https://flowbite.com"
                src="/logo.png"
                alt="Flowbite Logo"
                name="BFTicket"
              />
            </div> */}
            <div
              dir="ltr"
              className=" flex flex-col justify-center items-center "
            >
              <div className=" flex flex-col gap-y-2 text-center">
                <h3 className=" text-sm text-blue-700">عضویت در خبرنامه</h3>
                <div className="flex flex-row items-center justify-center gap-x-2">
                  <PhoneInput
                    defaultCountry="ir"
                    value={phone_number}
                    onChange={(phone_number) => setPhoneNumber(phone_number)}
                  />
                  <Button size="xs" gradientDuoTone="purpleToBlue">
                    ثبت درخواست
                  </Button>
                </div>
              </div>

              <div dir=" rtl" className=" mt-2">
                <p className=" text-xs font-normal mt-2 text-center text-gray-600">
                  برای عضویت در خبرنامه شماره همراه خود را وارد نمایید
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="ارتباط با ما" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/entertainment/about-us">
                    درباره ما
                  </Footer.Link>
                  <Footer.Link href="/entertainment/contact-us">
                    تماس با ما
                  </Footer.Link>
                  <Footer.Link href="/entertainment/work-with-us">
                    همکاری با ما
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="">
                <Footer.Title title="برنامه ها" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">کنسرت ها</Footer.Link>
                  <Footer.Link href="#">سینما</Footer.Link>
                  <Footer.Link href="#">تفریحی</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="قوانین و مقررات" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/entertainment/purchase-guide">
                    راهنمای خرید
                  </Footer.Link>
                  <Footer.Link href="/entertainment/terms">
                    قوانین و مقررات
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-y-2">
              <h3 className="text-sm  text-gray-700 dark:text-gray-100 tracking-tight">
                درباره ما
              </h3>
              <p className=" text-xs md:text-sm text-gray-700 dark:text-gray-100 leading-3 tracking-tight">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>
            <div className="w-full flex justify-end">
              <Image src="/logo.png" width={80} height={80} alt="" />
              <Image src="/logo.png" width={80} height={80} alt="" />
              <Image src="/logo.png" width={80} height={80} alt="" />
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="BF-Ticket" year={1403} />

            <div className="mt-4 flex gap-x-4 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};
export default FooterPart;
