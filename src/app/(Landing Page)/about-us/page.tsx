import ContactForm from "@/components/client/forms/ContactForm";

export default function AboutUsLandingPage() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center align-middle gap-y-2 flex-col">
        <div className=" w-full lg:max-w-5xl flex items-center justify-center align-middle rounded bg-white shadow overflow-y-auto lg:overflow-hidden">
          <section>
            <div className="py-12">
              <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-52 lg:mt-0">
                <div className="lg:text-center">
                  <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                    چرا باید ما رو انتخاب کنید؟
                  </h2>
                  <p className="font-heading mt-2 text-lg leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  </p>
                  <p className="mt-4 max-w-2xl text-sm text-gray-500 lg:mx-auto">
                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </div>

                <div className="mt-10">
                  <dl
                    dir="rtl"
                    className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
                  >
                    <div className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                          <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                        </div>
                        <p className="font-heading ms-16 text-lg leading-6 font-bold text-gray-700">
                          Powerful API
                        </p>
                      </dt>
                      <dd className="mt-2 ms-16 text-base text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </dd>
                    </div>
                    <div className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                          <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                        </div>
                        <p className="font-heading ms-16 text-lg leading-6 font-bold text-gray-700">
                          Easy to integrate SDK
                        </p>
                      </dt>
                      <dd className="mt-2 ms-16 text-base text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </dd>
                    </div>
                    <div className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                          <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                        </div>
                        <p className="font-heading ms-16 text-lg leading-6 font-bold text-gray-700">
                          Low Transaction Cost
                        </p>
                      </dt>
                      <dd className="mt-2 ms-16 text-base text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </dd>
                    </div>
                    <div className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                          <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                        </div>
                        <p className="font-heading ms-16 text-lg leading-6 font-bold text-gray-700">
                          Powerful Dashboard
                        </p>
                      </dt>
                      <dd className="mt-2 ms-16 text-base text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
