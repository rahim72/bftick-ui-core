"use client";

const ItemsComponent = (props: any) => {
  return (
    <>
      <div className="lg:pt-5 pt-2 w-full px-2 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-md rounded-md">
          <div className="px-4 py-2 lg:py-5 flex-auto">
            <div className="text-white p-2 lg:p-3 text-center inline-flex items-center mb-4 shadow-lg rounded-full bg-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-200"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16 4L9 8.04v7.92L16 20l7-4.04V8.04m-7-1.73l3.8 2.19l-3.8 2.19l-3.79-2.19M0 7v2h7V7m4 3.11l4 2.31v4.69l-4-2.3m10-4.7v4.7l-4 2.3v-4.69M2 11v2h5v-2m-3 4v2h3v-2"
                />
              </svg>
            </div>
            <h6 className="text-sm lg:text-lg font-semibold">{props.title}</h6>
            <p className="mt-2 mb-4 text-xs lg:text-sm text-gray-600">
              {props.description}
            </p>
            {/* <a
                                type="button"
                                target="_blank"
                                :href="route('home.shop')"
                                class="px-2 py-2 bg-blue-600 hover:bg-blue-700 cursor-pointer hover:text-white rounded-md text-white text-xs lg:text-sm"
                            >
                                فروشگاه
                            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsComponent;
