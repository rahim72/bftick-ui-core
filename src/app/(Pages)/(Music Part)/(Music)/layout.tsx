import type { Metadata } from "next";
import Script from "next/script";
import { Flowbite } from "flowbite-react";
import { ThemeMusic } from "./ThemeMusic";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

const myFont = localFont({ src: "../../../../fonts/iraniansans.woff2" });

export const metadata: Metadata = {
  title: "فرزانه تیکت | موزیک، موزیک ویدیو",
  description: " سایت فرزانه تیکت | دانلود موزیک و موزیک ویدیو"
};

export default async function RootMusicLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Flowbite theme={{ theme: ThemeMusic }}>
        <div
          className={twMerge("bg-gray-50 dark:bg-gray-900", myFont.className)}
        >
          <main>{children}</main>
          <Script src="./_gofti.js"></Script>
        </div>
      </Flowbite>
    </>
  );
}
