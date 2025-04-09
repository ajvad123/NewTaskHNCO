
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What Is The Best Time To Visit Dubai?",
    answer:
      "The best time to visit Dubai is from November to March when the weather is pleasant for outdoor activities. The temperatures are cooler, ranging from 24°C to 35°C (75°F to 95°F), making it ideal for sightseeing, desert safaris, and beach activities. Avoid the summer months (June to September) when temperatures can soar above 40°C (104°F).",
  },
  {
    id: 2,
    question: "What Is The Local Currency, And Where Can I Exchange Money?",
    answer:
      "The local currency is the United Arab Emirates Dirham (AED). You can exchange money at banks, exchange offices, malls, and hotels. ATMs are widely available throughout Dubai, and credit cards are accepted in most establishments. It's advisable to have some cash on hand for small purchases and taxis.",
  },
  {
    id: 3,
    question: "What Is The Main Language Spoken, And Is English Widely Understood?",
    answer:
      "Arabic is the official language of Dubai, but English is widely spoken and understood throughout the city. Most signs, menus, and official communications are in both Arabic and English. You'll have no trouble communicating in English with locals, hotel staff, restaurant servers, and taxi drivers.",
  },
  {
    id: 4,
    question: "What Are The Local Customs Or Cultural Etiquettes To Be Aware Of?",
    answer:
      "Dubai is a modern city but still maintains Islamic traditions. Dress modestly in public places (covering shoulders and knees), especially in religious sites. Public displays of affection should be minimal. Alcohol is only served in licensed venues like hotels and restaurants. During Ramadan, eating, drinking, and smoking in public during daylight hours should be avoided. Always ask permission before photographing locals, particularly women.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Faqs</h2>
          <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-sm max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
