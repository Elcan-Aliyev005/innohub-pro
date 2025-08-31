"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { centerTitles, educationTitles } from "@/const";
import SwitchMode from "./switch-mode";
import Image from "next/image";
import Logo from '@/assets/image/logo.png'
import LanguageSelectClientOnly from "./language-select.client";

export function MobileMenu() {
    const t = useTranslations("header");

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" aria-label="Open menu">
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="flex flex-col  z-999 gap-4">
                <SheetHeader className="text-left  flex items-center flex-row justify-between border-b">
                    <SheetTitle className="text-base">
                        <Link href={'/'} className='flex  items-center text-[20px] gap-2 font-semibold'>
                            <Image src={Logo} className='w-[40px]' alt='logo' />
                            InnoHub
                        </Link>
                    </SheetTitle>
                    <SheetClose asChild>
                        <Button variant="outline"><XIcon size={'5'} /></Button>
                    </SheetClose>

                </SheetHeader>



                <nav className="flex-1  px-4 overflow-y-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {/* Center / Mərkəz */}
                        <AccordionItem value="center">
                            <AccordionTrigger className="text-sm hover:bg-muted py-3 px-2">
                                {t("center")}
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="space-y-1 pt-2">
                                    {centerTitles.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                href={item.href}
                                                className="block rounded-lg px-2 py-1.5 hover:bg-muted focus:outline-none focus:ring-2"
                                            >
                                                <div className="text-sm font-medium">
                                                    {t(item.title)}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Education / Tədris */}
                        <AccordionItem value="education">
                            <AccordionTrigger className="text-sm hover:bg-muted py-3 px-2 my-1">
                                {t("education")}
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="space-y-1 pt-2">
                                    {educationTitles.map((item) => (
                                        <li key={item.title} className="">
                                            <Link
                                                href={item.href}
                                                className="block rounded-lg px-3 py-1.5 hover:bg-muted focus:outline-none focus:ring-2"
                                            >
                                                <div className="text-sm font-medium">
                                                    {t(item.title)}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* Direct links */}
                    <div className="space-y-1 ">
                        <Link
                            href="/docs"
                            className="block rounded-lg px-2 py-3 text-sm font-medium hover:bg-muted focus:outline-none focus:ring-2"
                        >
                            {t("scholarship_programs")}
                        </Link>
                        <Link
                            href="/docs"
                            className="block rounded-lg px-2 py-3 text-sm font-medium hover:bg-muted focus:outline-none focus:ring-2"
                        >
                            {t("contact")}
                        </Link>
                    </div>


                </nav>

                <SheetFooter className="justify-end gap-2">
                    <div className="flex items-center gap-3 justify-end">
                        <SwitchMode />
                        <LanguageSelectClientOnly />
                    </div>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
