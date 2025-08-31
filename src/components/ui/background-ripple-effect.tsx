
'use client'
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function DotBackgroundDemo({ children, effect }: { children: ReactNode, effect: boolean }) {
  return (
    <div className="relative flex xl:h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      {children}
      {effect && <div aria-hidden className="pointer-events-none absolute inset-0  overflow-hidden">
        {/* Əsas bənövşəyi-çəhrayı enerji sahəsi */}
        <div className="absolute -left-28 top-0 h-[40%] w-[30%] rounded-full blur-3xl
                          bg-gradient-to-br from-blue-400/60 via-pink-blue/60 to-fuchsia-400/40
                          dark:from-fuchsia-600/25 dark:via-pink-600/20 dark:to-indigo-600/25
                          animate-pulse" />

        <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full blur-3xl
                          bg-gradient-to-br from-blue-400/60 via-pink-blue/60 to-indigo-400/0
                          dark:from-fuchsia-600/25 dark:via-pink-600/20 dark:to-indigo-600/25
                          animate-pulse" />

        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full blur-2xl
                          border border-fuchsia-400/20 dark:border-fuchsia-500/20
                          animate-pulse" />
      </div>}
    </div>

  );
}
