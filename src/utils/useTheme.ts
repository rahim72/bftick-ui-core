import { useEffect, useState } from "react";
export const useTheme = () => {
    const [theme, setTheme] = useState<string>("light");
  
    useEffect(() => {
      const savedTheme = localStorage.getItem("flowbite-theme-mode");
      if (savedTheme) {
        setTheme(savedTheme);
      }
  
      // const updateTheme = () => {
      //   if (theme === "dark") {
      //     document.documentElement.classList.add("dark");
      //   } else {
      //     document.documentElement.classList.remove("dark");
      //   }
      // };
  
      // updateTheme();
  
      // localStorage.setItem("flowbite-theme-mode", theme);
  
    }, [theme]);
  
    return [theme, setTheme] as const; 
  };