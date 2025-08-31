import GridBackgroundDemo from '@/components/ui/background-ripple-effect'
import Squares from '@/components/ui/bg.base'
import { DraggableCardContainer } from '@/components/ui/cards/draggable-card.base'
import FaqSection from '@/modules/home/view/sections/faq/faq.section'
import { DraggableCardsSection } from '@/modules/home/view/sections/hero/hero.section'
import { PartnersSection } from '@/modules/home/view/sections/partners.section'
import SurveySection from '@/modules/home/view/sections/survey/survey.section'
import TeacherSection from '@/modules/home/view/teachers/teacher.section'
import React from 'react'

function page() {
  return (
    <div className=''>


      <section className='w-full relative '>
        <GridBackgroundDemo effect={true} >
          <DraggableCardsSection />
        </GridBackgroundDemo>
      </section>
      <PartnersSection />
      <TeacherSection />
      <SurveySection />

      <GridBackgroundDemo effect={true} >
        <DraggableCardContainer className="relative container mx-auto flex w-full  flex-col  px-[40px] py-8  xl:flex-row lg:items-center">
          <FaqSection />
        </DraggableCardContainer>
      </GridBackgroundDemo>
    </div>
  )
}

export default page