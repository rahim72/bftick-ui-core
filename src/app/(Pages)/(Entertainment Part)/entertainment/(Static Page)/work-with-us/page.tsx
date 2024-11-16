import { WorkToUsForm } from "@/components/Pages/Concert/client/form/Forms";
import { ItemsComponent } from "@/components/Pages/Concert/client/inc/inc";

export default function WorkWithUs() {
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
  return (
    <>
      <div className=" px-2 md:container md:mx-auto">
        <div className=" mb-8">
          <p className=" text-xs md:text-sm text-gray-700 leading-6 dark:text-gray-200 indent-8	whitespace-normal tracking-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          {Items.map((item) => (
            <ItemsComponent
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className=" mt-8">
          <p className=" text-xs md:text-sm text-gray-700 leading-6 dark:text-gray-200 indent-8	whitespace-normal tracking-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <WorkToUsForm />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex flex-wrap"></div>
        </div>
      </div>
    </>
  );
}
