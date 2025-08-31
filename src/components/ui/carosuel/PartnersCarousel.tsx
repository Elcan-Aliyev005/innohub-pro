"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

type Partner = { src: string; alt: string; href?: string };

interface PartnersSwiperProps {
  partners: Partner[];
  continuous?: boolean; // kəsintisiz axış
  className?: string;
}

export default function PartnersSwiper({
  partners,
  continuous = false,
  className = "",
}: PartnersSwiperProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  // refs hazır olanda navigation-u bağla
  useEffect(() => {
    if (!swiperRef || !prevRef.current || !nextRef.current) return;
    swiperRef.params.navigation = {
      ...(swiperRef.params.navigation as any),
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    };
    swiperRef.navigation.destroy();
    swiperRef.navigation.init();
    swiperRef.navigation.update();
  }, [swiperRef]);

  const baseBreakpoints = {
    320: { slidesPerView: 2, spaceBetween: 12 },
    480: { slidesPerView: 3, spaceBetween: 14 },
    640: { slidesPerView: 4, spaceBetween: 16 },
    768: { slidesPerView: 5, spaceBetween: 18 },
    1024: { slidesPerView: 6, spaceBetween: 20 },
  };

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Autoplay, A11y, FreeMode]}
        onSwiper={setSwiperRef}
        loop
        watchSlidesProgress
        breakpoints={baseBreakpoints}
        {...(continuous
          ? {
              // kəsintisiz axış (marquee)
              speed: 4500,
              freeMode: { enabled: true, momentum: false },
              autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true },
            }
          : {
              // standart autoplay (dots yoxdur!)
              speed: 700,
              freeMode: { enabled: false },
              autoplay: { delay: 2400, disableOnInteraction: false, pauseOnMouseEnter: true },
            })}
      >
        {partners.map((p, i) => (
          <SwiperSlide key={i}>

            
            <a
              href={p.href || "#"}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noopener noreferrer" : undefined}
              className="
                 group h-20 sm:h-24 md:h-28 rounded-xl
    bg-neutral-200 dark:bg-neutral-800   
    border border-neutral-300 dark:border-neutral-700
    hover:bg-neutral-300/80 dark:hover:bg-neutral-700
    transition flex items-center justify-center
              "
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="
                  max-h-[60%] max-w-[70%] object-contain
    opacity-80 group-hover:opacity-100 transition
        

                "
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Oxlar (indi işləyəcək) */}
      {!continuous && (
        <>
          <button
            ref={prevRef}
            aria-label="Previous"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur"
          >
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            ref={nextRef}
            aria-label="Next"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur"
          >
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
