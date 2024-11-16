import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";
import "./globals.css";
import "animate.css";

export const metadata: Metadata = {
  title: "اپلیکیشن | بی اف تیک",
  description:
    " اپلیکیشن بی اف تیک، برگزار کننده کنسرت، همایش، نمایش و غیره و استعداد یابی خوانندگان و پخش موزیک و موزیک ویدیو، اخبار و فروشگاه تخصصی محصولات نور پردازی"
};

const myFont = localFont({ src: "../fonts/iraniansans.woff2" });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={twMerge(
          "bg-gray-50 dark:bg-gray-800 min-h-screen",
          myFont.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
