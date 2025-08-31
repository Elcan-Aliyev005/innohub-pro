"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export type FaqItem = { question: string; answer: React.ReactNode };

// Base props
type BaseProps = {
  items: FaqItem[];
  className?: string;
};

// type="single"
type SingleProps = BaseProps & {
  type?: "single";                 // default single
  defaultValue?: string;
};

// type="multiple"
type MultipleProps = BaseProps & {
  type: "multiple";
  defaultValue?: string[];
};

type FAQAccordionProps = SingleProps | MultipleProps;

export default function FAQAccordion(props: FAQAccordionProps) {
  const { items, className } = props;

  if (props.type === "multiple") {
    // burada TS bilir ki, defaultValue string[]-dir
    return (
      <Accordion type="multiple" defaultValue={props.defaultValue} className={className}>
        {items.map((it, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-left text-base sm:text-lg">
              {it.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-muted-foreground">
              {it.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  // single (collapsible yalnız single-da olur)
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={props.defaultValue}
      className={className}
    >
      {items.map((it, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="text-left text-base sm:text-lg">
            {it.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-muted-foreground">
            {it.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
