import { type CustomFlowbiteTheme } from "flowbite-react";

export const ThemeMusicBox: CustomFlowbiteTheme = {
  footer: {
    root: {
      base: "flex flex-col",
    },
    brand: {
      base: "m-6 flex items-center",
    },
    groupLink: {
      base: "flex flex-col flex-wrap text-gray-500 dark:text-white",
      link: {
        base: "mb-4 last:mr-0 md:mr-6",
      },
    },
    icon: {
      base: "text-gray-400 hover:text-gray-900 dark:hover:text-white",
    },
  },
  modal: {
    root: {
      base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      show: {
        on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
        off: "hidden"
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        // _2xl: "max-w-2xl",
        // _3xl: "max-w-3xl",
        // _4xl: "max-w-4xl",
        // _5xl: "max-w-5xl",
        // _6xl: "max-w-6xl",
        // _7xl: "max-w-7xl"
      },
    positions: {
       topLeft: "items-start justify-start",
       topCenter: "items-start justify-center",
       topRight: "items-start justify-end",
       centerLeft: "items-center justify-start",
       center: "items-center justify-center",
       centerRight: "items-center justify-end",
       bottomRight: "items-end justify-end",
       bottomCenter: "items-end justify-center",
       bottomLeft: "items-end justify-start"
      
    },
  },
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner: "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
    },
    body: {
      base: "flex-1 overflow-auto p-6",
      popup: "pt-0"
    },
    header: {
      base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
      popup: "border-b-0 p-2",
      title: "text-lg font-medium text-gray-900 dark:text-white",
      close: {
        base: "mr-auto text-red-600 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm hover:bg-red-600  hover:text-gray-50 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5"
      }
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t"
    }
  },
  sidebar: {
    root: {
      base: "h-full bg-gray-50",
     collapsed: {
        on: "w-16",
        off: "w-56"
      },
      inner:
        "h-full overflow-y-auto overflow-x-hidden bg-white py-4 px-3 dark:bg-gray-900",
    },
    collapse: {
      button: "group flex w-full items-center gap-x-4 w-full rounded-lg p-2 text-sm font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group-hover:text-gray-900 dark:group-hover:text-white",
      list: "space-y-1 list-none text-right ps-4 hover:text-gray-800 dark:hover:text-white text-sm",
      label:{
        base: "rtl:text-right ltr:text-left w-full  ",
        icon: {
          base: "h-6 w-6 transition delay-0 ease-in-out flex-shrink-0",
          open: {
            on: "rotate-180",
            off: ""
          }
        }
      },
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        open: {
          off: "",
          on: "text-gray-900"
        }
      },
    },
    item: {
      base: "no-underline flex items-center rounded-lg p-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      active: "bg-gray-100 dark:bg-gray-700",
      content: {
        base: "flex-1 whitespace-nowrap px-3"
      },
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        active: "text-gray-700 dark:text-gray-100"
      },
      label: "",
      listItem: ""
    },
    itemGroup: {
      base: "list-none border-t border-gray-200 pt-2 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700 group-hover:text-gray-900",
    },
  },
  button: {
    color: {
      primary:
        "text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    },
    outline: {
      on: "transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit",
    },
    size: {
      md: "text-sm px-3 py-2",
    },
  },
  dropdown: {
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
      base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
      content: "py-1 text-sm text-gray-700 dark:text-gray-200",
      divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
      header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
      hidden: "invisible opacity-0",
      item: {
        container: "",
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
        icon: "mr-2 h-4 w-4"
      },
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-700",
        light: "border border-gray-200 bg-white text-gray-900",
        auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
      },
      target: "w-fit"
    },
  },
  textarea: {
    base: "block w-full text-sm p-4 rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
  },
  toggleSwitch: {
    toggle: {
      checked: {
        off: "!border-gray-200 !bg-gray-200 dark:!border-gray-600 dark:!bg-gray-700",
      },
    },
  },
  tooltip:{
    base: "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm  shadow-sm",
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
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
  table:{
    root: {
      base: "w-full text-right text-xs lg:text-sm text-gray-500 dark:text-gray-400",
    shadow: "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
    wrapper: "relative"
    },
    body: {
      base: "group/body",
      cell: {
        base: "px-6 text-center  text-xs lg:text-sm py-2 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
      }
  },
  head: {
    base: "group/head text-xs text-center uppercase text-gray-700 dark:text-gray-400",
    cell: {
      base: "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
    }
  },
  row: {
    base: "group/row",
    hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
    striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
  }
  },
  tabs:{
      base: "flex flex-col gap-2",
      tablist: {
        base: "flex text-center",
        variant: {
          default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
          underline: "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
          pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
          fullWidth: "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
        },
        tabitem: {
          base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
          variant: {
            default: {
              base: "rounded-t-lg",
              active: {
                on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }
            },
            underline: {
              base: "rounded-t-lg",
              active: {
                on: "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
                off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              }
            },
            pills: {
              base: "",
              active: {
                on: "rounded-lg bg-cyan-600 text-white",
                off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              }
            },
            fullWidth: {
              base: "ml-0 flex w-full rounded-none first:ml-0",
              active: {
                on: "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
                off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              }
            }
          },
          icon: "me-1 lg:me-2 h-6 w-6"
        }
      },
      tabitemcontainer: {
        base: "",
        variant: {
          default: "",
          underline: "",
          pills: "",
          fullWidth: ""
        }
      },
      tabpanel: "py-1"
    
  },
  textInput:{
    base: "flex",
    addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
      },
      input: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base"
        },
        colors: {
          gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        },
        withRightIcon: {
          on: "pr-10",
          off: ""
        },
        withIcon: {
          on: "pl-10",
          off: ""
        },
        withAddon: {
          on: "rounded-r-lg",
          off: "rounded-lg"
        },
        withShadow: {
          on: "shadow-sm dark:shadow-sm-light",
          off: ""
        }
      }
    }
  },
  checkbox:{
    root: {
    base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700",
    color: {
     default: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600",
     dark: "text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",
     failure: "text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",
     gray: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
     info: "text-cyan-800 focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800",
     light: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
     purple: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600",
     success: "text-green-800 focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800",
     warning: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
     blue: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700",
     cyan: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",
     green: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600",
     indigo: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",
     lime: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700",
     pink: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600",
     red: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600",
     teal: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600",
     yellow: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
    }
  }
  }
  
};
