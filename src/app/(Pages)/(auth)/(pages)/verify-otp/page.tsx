"use client";
import Link from "next/link";
import { useAuth } from "../../../../../hooks/auth";
import OTPInput from "@/components/Pages/Auth/OtpInput";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import AuthSessionStatus from '../../AuthSessionStatus'

export default function VerifyOtpFun() {
  const router = useRouter();

  const { VerifyOtp } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/"
  });

  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [otp_code, setOtpCode] = useState("");
  const [user_id, setUserId] = useState(1);

  const handleOtpComplete = (pin: string) => {
    setOtpCode(pin);
  };

  const submitForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    VerifyOtp({
      setErrors,
      otp_code,
      user_id
    });
  };

  return (
    <>
      {/* <AuthSessionStatus className="mb-4" status={status} /> */}
      {/* <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl"> */}
      <div className=" absolute top-2 -right-4 w-full bg-slate-500 py-2 px-8 rounded-s-md rounded-l-2xl border border-red-500 shadow-md">
        <p className=" text-sm text-white font-bold">ورود | ثبت نام</p>
      </div>
      <div className="mx-auto flex w-full max-w-md flex-col space-y-4 mt-8">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <div className="flex flex-row text-sm font-medium text-gray-400">
            <p> لطفا کد تایید ارسال شده به شماره خود را وارد کنید.</p>
          </div>
        </div>

        <div>
          <form onSubmit={submitForm}>
            <div className="flex flex-col space-y-4">
              <OTPInput length={5} onComplete={handleOtpComplete} />
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
                      <span className="text-[10px] mt-2">
                        ورود شما به معنای پذیرش
                        <a
                          type="button"
                          href="#"
                          className="inline-block text-[10px] pr-1 pl-1 text-blue-600"
                        >
                          قوانین و مقررات سایت بی اف تیکت
                        </a>
                        است
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
