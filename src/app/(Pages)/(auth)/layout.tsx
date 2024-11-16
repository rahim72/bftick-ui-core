import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "صحفه ورود",
  description:
    " اپلیکیشن بی اف تیک، برگزار کننده کنسرت، همایش، نمایش و غیره و استعداد یابی خوانندگان و پخش موزیک و موزیک ویدیو، اخبار و فروشگاه تخصصی محصولات نور پردازی"
};

export default async function RootAuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <main className=" relative">{children}</main>
      </div>
    </>
  );
}
