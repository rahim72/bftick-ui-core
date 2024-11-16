export function BoxInfo({ Icon, ...props }: any) {
  return (
    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
            <Icon />
          </div>
        </div>
        <div className="ms-6 grow">
          <p className="mb-2 font-bold dark:text-white"> {props.title} </p>
          <p className="text-neutral-500 dark:text-neutral-200">
            {props.subTitle}
          </p>
          <p className="text-neutral-500 dark:text-neutral-200">
            {props.details}
          </p>
        </div>
      </div>
    </div>
  );
}
