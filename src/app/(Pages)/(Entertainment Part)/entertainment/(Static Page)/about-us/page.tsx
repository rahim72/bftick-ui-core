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

  return <></>;
}
