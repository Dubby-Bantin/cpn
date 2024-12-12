"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";
import { faqs } from "@/lib/constants";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faqs" className="w-full h-full">
      <div className="space-y-4 mx-auto md:max-w-2xl">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            isOpen={i === openIndex}
            onClick={() => toggleFAQ(i)}
            question={faq.question}
            answer={faq.answer}
            Icon={faq.Icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
