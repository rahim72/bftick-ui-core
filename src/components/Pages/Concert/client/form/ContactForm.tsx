"use client";

import { Label, TextInput } from "flowbite-react";
import { HiMail, HiPhone } from "react-icons/hi";

export default function ContactForm(props: any) {
  return (
    <div className="max-w-md flex flex-col gap-y-2">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-1">
        <div>
          <div className="mb-1 block">
            <Label htmlFor="first_name" value="نام" />
          </div>
          <TextInput id="first_name" type="text" placeholder="نام" required />
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="last_name" value="نام خانوادگی" />
          </div>
          <TextInput
            id="last_name"
            type="text"
            placeholder="نام خانوادگی"
            required
          />
        </div>
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="phone_number" value="شماره همراه" />
        </div>
        <TextInput
          id="phone_number"
          type="phone_number"
          icon={HiPhone}
          placeholder=""
          dir="ltr"
          required
        />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="email" value="آدرس پست الکترونیکی" />
        </div>
        <TextInput
          id="email"
          type="email"
          icon={HiMail}
          placeholder="name@flowbite.com"
          dir="ltr"
          required
        />
      </div>
    </div>
  );
}
