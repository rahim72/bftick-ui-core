"use client";

import { changeTheme } from "@/utils/tools";

export default function ChangeTheme() {
  return (
    <div className="h-screen grid place-items-center bg-primary">
      <div>
        <button
          className="py-2 px-8 bg-buttons text-typography m-2"
          onClick={() => changeTheme("")}
        >
          Default
        </button>
        <button
          className="py-2 px-8 bg-buttons text-typography m-2"
          onClick={() => changeTheme("theme1")}
        >
          theme 1
        </button>
        <button
          className="py-2 px-8 bg-buttons text-typography m-2"
          onClick={() => changeTheme("theme2")}
        >
          theme 2
        </button>
        <button
          className="py-2 px-8 bg-buttons text-typography m-2"
          onClick={() => changeTheme("theme3")}
        >
          theme 3
        </button>
      </div>
    </div>
  );
}
