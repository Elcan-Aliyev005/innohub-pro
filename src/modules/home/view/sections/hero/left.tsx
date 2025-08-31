"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function HeroSectionLeft() {
      const t = useTranslations("home");
    
  return (
    <div className="relative w-full xl:w-3/5 ">
        <div className=" grid py-[40px] xl:min-h-[40vh] w-full max-w-3xl grid-cols-1 items-center">
          <div>
            <h1 className="text-balance font-bold leading-[112%] tracking-tight text-neutral-900 dark:text-neutral-50 text-2xl sm:text-4xl md:text-[44px] xl:text-[48px] 2xl:text-[63px]">
              <span className="block">{t("hero_line1")}</span>
              <span className="block">{t("hero_line2")}.</span>
              <span className="block">{t("hero_line3")}</span>
            </h1>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <Button asChild size="lg" className="shadow-md hover:shadow-lg">
                <Link href="/join">{t("cta_join", { default: "Join us" })}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-neutral-900/40"
              >
                <Link href="/programs">{t("cta_programs", { default: "Explore programs" })}</Link>
              </Button>
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-600 dark:text-neutral-300 sm:text-sm">
              <li>500+ məzun</li>
              <li>20+ tədris proqramı</li>
              <li>təqaüd imkanları</li>
            </ul>
          </div>
        </div>
      </div>

  )
}

export default HeroSectionLeft