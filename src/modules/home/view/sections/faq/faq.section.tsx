// import FAQAccordion from "@/components/ui/accordion/faq-accordion";
// import { faqItems } from "@/const";



// export default function FaqSection() {
//   return (
//     <section className="container mx-auto px-5 py-12">
//       <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">FAQ</h2>
//       <p className="mt-2 text-muted-foreground">
//         Tez-tez verilən suallar
//       </p>

//       <div className="mt-6">
//         <FAQAccordion items={faqItems} type="single" />
//       </div>
//     </section>
//   );
// }



import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/const"



export default function FAQSection() {
  return (
    <section className="py-16 bg-muted/30 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Tez-tez Verilən Suallar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ən çox soruşulan suallara cavablar tapın
          </p>
        </div>

        <div className="w-full mx-auto">
          <Accordion   type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-900 rounded-lg border shadow-sm px-6"
              >
                <AccordionTrigger activeBg={false} className="text-left hover:no-underline py-6 text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-pretty leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
