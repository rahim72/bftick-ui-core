"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../../../../../hooks/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthSessionStatus from "../../AuthSessionStatus";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
const LoginOtp = () => {
  const router = useRouter();

  const { registerOtp } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/"
  });

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [phone_number, setPhoneNumber] = useState("");
  // const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  // const [value, setValue] = useState();
  // useEffect(() => {
  //   if (router.reset?.length > 0 && errors.length === 0) {
  //     setStatus(atob(router.reset));
  //   } else {
  //     setStatus(null);
  //   }
  // });

  const submitForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    registerOtp({
      setErrors,
      phone_number
    });
  };

  return (
    <>
      <AuthSessionStatus className="mb-4" status={status} />

      <div className=" absolute top-2 -right-4 w-full bg-slate-500 py-2 px-8 rounded-s-md rounded-l-2xl border border-red-500 shadow-md">
        <p className=" text-sm text-white font-bold">ورود | ثبت نام</p>
      </div>
      <div className=" absolute top-2 -right-4  bg-red-600 z-10 w-10"> </div>
      <div className="flex flex-col items-center justify-center text-center space-y-1 mb-6"></div>
      <div>
        <form onSubmit={submitForm}>
          {/* phone_number */}
          <div>
            {/* <Label htmlFor="phone_number">شماره همراه</Label> */}
            <div
              dir="ltr"
              className=" flex flex-col justify-center items-center "
            >
              <PhoneInput
                defaultCountry="ir"
                value={phone_number}
                onChange={(phone_number) => setPhoneNumber(phone_number)}
              />
              <div dir=" rtl" className=" mt-2">
                <p className=" text-xs font-normal mt-2 text-center text-gray-600">
                  لطفا شماره خود را وارد کنید| در صورتی که شماره شما در سایت ثبت
                  نشده باشد به صحفه ثبت نام هدایت خواهید شد.
                </p>
              </div>
            </div>

            {/* <InputError messages={errors.phone_number} className="mt-2" /> */}
          </div>
          <div className="flex flex-col mt-4">
            <div className=" flex flex-col gap-y-2 justify-center items-center">
              <button
                type="submit"
                className="flex flex-row items-center justify-center text-center w-1/2 border rounded-md outline-none py-2 bg-blue-700 border-none text-white text-sm shadow-sm"
              >
                ارسال کد یکبار مصرف
              </button>

              <div>
                <Link href="/">
                  <span className="text-xs mt-2">
                    ورود شما به معنای پذیرش
                    <button
                      type="button"
                      className="inline-block text-xs pr-1 pl-1 text-blue-600"
                    >
                      قوانین و مقررات سایت بی اف تیکت
                    </button>
                    است
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </form>
        {/* </div> */}
      </div>
    </>
  );
};

export default LoginOtp;
