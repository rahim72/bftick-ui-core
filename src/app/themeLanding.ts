import { type CustomFlowbiteTheme } from "flowbite-react";

export const themeLanding: CustomFlowbiteTheme = {
  footer: {
    root: {
      base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
      container: "w-full p-6",
      bgDark: "bg-gray-800"
    },
    groupLink: {
      base: "flex flex-wrap  text-sm text-gray-500 dark:text-white",
      link: {
        base: "me-4 last:ml-0 md:mr-3",
        href: "hover:text-blue-700 "
      },
      col: "flex-col space-y-2"
    },
    icon: {
      base: "text-gray-500 dark:hover:text-white",
      size: "h-6 w-6"
    },
    title: {
      base: "mb-3 text-sm font-semibold uppercase text-gray-500 dark:text-white"
    },
    divider: {
      "base": "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
    },
    copyright: {
      base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
      href: "ml-1 hover:underline",
      span: "ml-1"
    },
    brand: {
      base: "mb-4 flex items-center sm:mb-0",
      img: "mr-3 h-8",
      span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
    },
  },
  modal: {
    body: {
      base: "",
    },
    
  },
  breadcrumb:{
    root: {
      base: "",
      list: " flex items-center"
    },
    item: {
      base: "group flex items-center",
      chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
      href: {
        "off": "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
        "on": "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      },
      icon: " me-2 h-5 w-5"
    }
  },
  drawer:{
    root: {
      base: "fixed z-40 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800",
      backdrop: "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80",
      edge: "bottom-16",
      position: {
        top: {
          on: "left-0 right-0 top-0 w-full transform-none",
          off: "left-0 right-0 top-0 w-full -translate-y-full"
        },
        right: {
          on: "right-0 top-0 h-screen w-80 transform-none",
          off: "right-0 top-0 h-screen w-80 translate-x-full"
        },
        bottom: {
          on: "bottom-0 left-0 right-0 w-full transform-none",
          off: "bottom-0 left-0 right-0 w-full translate-y-full"
        },
        left: {
        on: "left-0 top-0 h-screen w-80 transform-none",
          off: "left-0 top-0 h-screen w-80 -translate-x-full"
        }
      }
    },
    header: {
      inner: {
        closeButton: "absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        closeIcon: "h-4 w-4 hidden",
        titleIcon: "me-2.5 h-4 w-4",
        titleText: "mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
      },
      collapsed: {
        on: "hidden",
        off: "block"
      }
    },
    items: {
      base: ""
    }
  
  },
  navbar:{
    root: {
      base: "px-2 py-1 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
      rounded: {
        on: "rounded",
        off: ""
      },
      bordered: {
        on: "border",
        off: ""
      },
      inner: {
        base: "mx-auto flex flex-row-reverse justify-center sm:flex-wrap items-center lg:justify-between",
        fluid: {
          on: "",
          off: "container"
        }
      }
    },
    brand: {
      base: "flex items-center"
    },
    collapse: {
      base: "w-full lg:block md:w-auto",
      list: " flex space-x-2 xs:space-x-4 md:mt-0 flex-row sm:space-x-8 text-xs md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: ""
      }
    },
    link: {
      base: "block py-1 pl-2 pr-2 sm:pl-3 sm:pr-4 md:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: ""
      }
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0"
    },
  },
  megaMenu:{
    root: {
      base: "bg-white/70 px-2 py-2  dark:border-gray-700 dark:bg-gray-800",
      rounded: {
        on: "rounded",
        off: ""
      },
      bordered: {
        on: "border",
        off: ""
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container"
        }
      },
      
      
    },
    brand: {
      base: "flex items-center"
    },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: ""
      }
    },
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: ""
      }
    },
  toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0"
    },
    dropdown: {
      base: "",
      toggle: {
        arrowIcon: "ms-1 me-2 h-4 w-4",
        content: "py-1 focus:outline-none ",
        floating: {
          animation: "transition-opacity",
          arrow: {
            base: "absolute z-10 h-2 w-2 rotate-45",
            style: {
              dark: "bg-gray-900 dark:bg-gray-700",
              light: "bg-white",
              auto: "bg-white dark:bg-gray-700"
            },
            placement: "-4px"
          },
          base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none mt-2 block",
          content: "py-1 text-sm text-gray-500 dark:text-gray-400",
          divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
          header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
          hidden: "invisible opacity-0",
          item: {
            container: "",
            base: "flex w-full cursor-pointer bg-gray-100 items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
            icon: "mr-2 h-4 w-4"
          },
          style: {
            dark: "bg-gray-900 text-white dark:bg-gray-700",
            light: "border border-gray-200 bg-white text-gray-900",
            auto: "border border-gray-200 bg-white dark:border-none dark:bg-gray-700 text-gray-500 dark:text-gray-400"
          },
          target: "w-fit"
        },
        inlineWrapper: "flex w-full items-center justify-between"
      }
    },
    dropdownToggle: {
      base: "py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white flex w-full items-center justify-between"
    }
  }
};