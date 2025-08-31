"use client";
import { GlareCardComponent } from "@/components/ui/cards/glare-card";
import { BackgroundGradient } from "@/components/ui/cards/profile-card";
import React from "react";
import Person from '@/assets/image/person.png'
import Image from "next/image";


interface IPropsTeacherCard { fullname: string, job: string }
export function TeacherCard({ fullname, job }: IPropsTeacherCard) {
    return (
        <div className={`md:w-[calc((100%-30px)/2)]  lg:w-[calc((100%-60px)/3)] xl:w-[calc((100%-90px)/4)] group `}>
            <GlareCardComponent  >
                <>
                    <Image
                        src={Person}
                        alt="jordans"

                        className="object-contain"
                    />

                    <div className="absolute opacity-[0]
                    inset-0
                    group-hover:opacity-[1]  transition-all  duration-[.5s]   flex items-end  p-[20px] bg-gray-900/50">

                        <div className="translate-y-[100%] group-hover:translate-y-[0%] transition-all  duration-[.5s] " >

                            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                                {fullname}
                            </p>

                            <p className="text-[16px] font-medium text-neutral-600 drop-shadow-2xl dark:text-neutral-400">
                                {job}
                            </p>
                            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                <span>Buy now </span>
                                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                    $100
                                </span>
                            </button>
                        </div>
                    </div>
                </>
            </GlareCardComponent>
        </div>
    );
}
