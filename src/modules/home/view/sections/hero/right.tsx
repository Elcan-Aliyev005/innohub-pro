"use client"
import {
  DraggableCardBody,
} from "@/components/ui/cards/draggable-card.base";
import { GlareCardComponent } from "@/components/ui/cards/glare-card";
import { useTranslations } from "next-intl";

function HeroSectionRight() {
  const items = [
    { title: "Web programming Durden", image: "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3", className: "absolute top-10 left-[20%] rotate-[-5deg]" },
    { title: "The Narrator", image: "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3", className: "absolute top-40 left-[25%] rotate-[-7deg]" },
    { title: "Iceland", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3", className: "absolute top-5 left-[40%] rotate-[8deg]" },
    { title: "Japan", image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3", className: "absolute top-32 left-[55%] rotate-[10deg]" },
    { title: "Norway", image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3", className: "absolute top-20 right-[35%] rotate-[2deg]" },
    { title: "New Zealand", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3", className: "absolute top-24 left-[45%] rotate-[-7deg]" },
    { title: "Canada", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3", className: "absolute top-8 left-[30%] rotate-[4deg]" },
  ];
  const t = useTranslations("home");


  return (
    <div className="relative w-full xl:w-2/5 hidden xl:flex min-h-[50vh] items-center justify-center">
      <p className="absolute top-1/2 z-10 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black
                      text-gray-400 md:text-4xl dark:text-neutral-300">
        {t("slogan")}
      </p>

      <div className="relative z-20 h-[520px] w-[720px] max-w-full">
        {items.map((item) => (
          <DraggableCardBody key={item.title} className={item.className}>
            <GlareCardComponent>
              <img
                src={item.image}
                alt={"image"}
                className="pointer-events-none relative z-10 h-full w-full  object-cover"
                draggable={false}
              />
            </GlareCardComponent>
          </DraggableCardBody>
        ))}
      </div>
    </div>
  )
}

export default HeroSectionRight