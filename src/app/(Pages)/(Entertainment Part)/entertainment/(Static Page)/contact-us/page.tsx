import { HiMail } from "react-icons/hi";
import ContactForm from "@/components/Pages/Concert/client/form/ContactForm";
import { BoxInfo } from "@/components/Pages/Concert/client/inc/ParticalInc";

export const metadata = {
  title: "تماس با ما",
  description: ""
};

const BoxInfoText = [
  {
    id: 1,
    title: "پشتیبانی فنی",
    subTitle: "برای پشتیبانی فنی میتوانید با شماره زیر تماس بگیرید",
    Icon: HiMail
  },
  {
    id: 2,
    title: "پشتیبانی فنی",
    subTitle: "برای پشتیبانی فنی میتوانید با شماره زیر تماس بگیرید",
    Icon: HiMail
  },
  {
    id: 3,
    title: "پشتیبانی فنی",
    subTitle: "برای پشتیبانی فنی میتوانید با شماره زیر تماس بگیرید",
    Icon: HiMail
  },
  {
    id: 4,
    title: "پشتیبانی فنی",
    subTitle: "برای پشتیبانی فنی میتوانید با شماره زیر تماس بگیرید",
    Icon: HiMail
  },
  {
    id: 5,
    title: "پشتیبانی فنی",
    subTitle: "برای پشتیبانی فنی میتوانید با شماره زیر تماس بگیرید",
    Icon: HiMail
  },
  {
    id: 6,
    title: "پشتیبانی فنی",
    subTitle: "برای پشتیبانی فنی میتوانید با شماره زیر تماس بگیرید",
    Icon: HiMail
  }
];

export default function ContactUs() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <ContactForm />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex flex-wrap">
            {BoxInfoText.map((item) => (
              <BoxInfo
                key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                Icon={item.Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
