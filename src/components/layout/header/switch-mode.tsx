"use client"

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const SwitchMode = () => {

  const { theme, setTheme } = useTheme()
  const TOGGLE_CLASSES =
    "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-1.5 transition-colors relative z-10";

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${theme === "light" ? "text-white" : "text-slate-300"}`}
        onClick={() => {
          setTheme("light");
        }}
      >
        <Moon width={18} className="relative z-10 text-lg lg:text-sm" />
        <span className="relative z-10  hidden lg:block">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${theme === "dark" ? "text-white" : "text-slate-800"
          }`}
        onClick={() => {
          setTheme("dark");
        }}
      >
        <Sun width={18} className="relative z-10 text-lg lg:text-sm" />
        <span className="relative z-10 hidden lg:block">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${theme === "dark" ? "justify-end" : "justify-start"
          }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
        />
      </div>
    </div>
  );
};



export default SwitchMode;