"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";
import { services } from "@/lib/constants";

const FAQSection = ({ start, end }: { start?: number; end?: number }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faqs" className="w-full h-full px-4 md:px-0">
      <div className="space-y-4 md:mx-auto md:max-w-2xl">
        {services.slice(start, end).map((faq, i) => (
          <FAQItem
            key={i}
            isOpen={i === openIndex}
            onClick={() => toggleFAQ(i)}
            question={faq.word}
            answer={faq.description}
            Icon={faq.Icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
