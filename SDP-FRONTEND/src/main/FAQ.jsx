import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is LL-Art?",
      answer:
        "LL-Art is a curated platform connecting artists and art lovers, offering authentic and inspiring artworks.",
    },
    {
      question: "Do I need an account to explore LL-Art?",
      answer:
        "No, you can browse the art collections freely, but an account is required to purchase or save your favorite artworks.",
    },
    {
      question: "Is LL-Art available on mobile devices?",
      answer:
        "Yes, LL-Art is fully mobile-friendly and works seamlessly on all devices.",
    },
    {
      question: "How secure is my personal information on LL-Art?",
      answer:
        "We use advanced encryption and secure payment methods to protect your data and purchases.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none hover:bg-gray-100"
            >
              <span className="font-medium">{item.question}</span>
              {openItem === index ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>

            {openItem === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
