import { ReactNode } from "react";
import { GlareCard } from "./glare-card.base";

export function GlareCardComponent({children,radius=true}:{children:ReactNode, radius?:boolean}) {
  return (
    <GlareCard radius={radius}  className="flex w-full relative flex-col items-center justify-center">
      {children}
    </GlareCard>
  );
}
