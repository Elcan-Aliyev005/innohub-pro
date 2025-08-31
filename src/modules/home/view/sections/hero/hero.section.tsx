"use client";

import React from "react";
import {
  DraggableCardContainer,
} from "@/components/ui/cards/draggable-card.base";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSectionRight from "./right";
import HeroSectionLeft from "./left";

export function DraggableCardsSection() {
  const t = useTranslations("home");



  return (
    <DraggableCardContainer className="relative container mx-auto flex w-full  flex-col  px-[40px] py-8  xl:flex-row lg:items-center">
      {/* LEFT (Text) */}
      <HeroSectionLeft/>
      {/* RIGHT (Cards) */}
      <HeroSectionRight/>
        
    </DraggableCardContainer>
  );
}
