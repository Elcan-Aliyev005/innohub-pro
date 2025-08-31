import { useTranslations } from 'next-intl'
import { TeacherCard } from './teacher.card'
import DotBackgroundDemo from '@/components/ui/background-ripple-effect'

function TeacherSection() {



    const apiData = [
        { id: 1, fullname: "Fariz Əsədzadə", job: "Marketinq specialist" },
        { id: 2, fullname: "Vəliyev Səməndər", job: "Software developer" },
        { id: 3, fullname: "Daşdəmirli İsmayıl", job: "UI/UX designer" },
        { id: 4, fullname: "Elvin İsayev", job: "Web developer" }
    ]



    const t = useTranslations('home')

    return (
        <DotBackgroundDemo effect={false}>

            <section className="container mx-auto px-5 py-[50px]">
                <div className="mb-[50px] text-center">
                    <h2 className="text-balance font-bold leading-[112%] tracking-tight text-neutral-900 dark:text-neutral-50 text-2xl sm:text-4xl md:text-[44px] xl:text-[48px]">
                        {t('teachers')}
                    </h2>
                    <p className=" max-w-2xl mx-auto text-base   sm:text-lg text-neutral-500 dark:text-neutral-400">
                        {t('teachersSubtitle')}
                    </p>
                </div>

                <div className='flex items-center flex-wrap gap-[30px]'>
                    {apiData.map(teacher => <TeacherCard key={teacher.id} {...teacher} />)}
                </div>
            </section>
        </DotBackgroundDemo>
    )
}

export default TeacherSection
