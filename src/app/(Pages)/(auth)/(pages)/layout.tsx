import Image from "next/image";

export default async function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-12 bg-back4 bg-no-repeat">
        <div className="flex flex-col justify-center items-center mb-4">
          <Image
            src="/assets/Logo/logoAva.png"
            width={80}
            height={60}
            alt="BF Ticket"
            className="animate__animated animate__backInDown"
          />
          <h1 className=" font-bold text-xs lg:text-sm animate__animated animate__flip">
            موسسه فرهنگی هنری آواری ترانه فرزانه
          </h1>
        </div>
        <div className=" animate__animated  animate__bounceInRight relative bg-gray-100 px-6 pt-10 pb-9 shadow-lg mx-auto w-full rounded-md max-w-xs lg:max-w-sm border-b border-red-400/60">
          {children}
        </div>

        <div className=" absolute bottom-2 text-center right-0 left-0">
          <h5 className=" text-blue-600 font-bold text-xs cursor-pointer hover:text-blue-700">
            طراحی و توسعه تیم برنامه نویسی بی اف تیکت
          </h5>
        </div>
      </div>
    </>
  );
}
