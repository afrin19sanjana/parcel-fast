import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa';

const faqData = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer: "Yes, it is adjustable and designed to fit people of various ages and body types comfortably.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer: "Many users report noticeable improvement in posture and reduced back pain with regular use.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer: "Some models include vibration sensors to alert you when you slouch.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer: "You can subscribe to notifications, and we will alert you via email when it's restocked.",
  },
];

const FindQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-center text-2xl font-bold mb-2">Frequently Asked Question (FAQ)</h2>
      <p className="text-center text-gray-600 mb-8">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br></br>pain, and strengthen your body with ease.
      </p>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium bg-white hover:bg-gray-50 transition"
            >
              {faq.question}
              <span>{activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-teal-50 text-sm text-gray-700 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-6 rounded-full inline-flex items-center gap-2 transition">
          See More FAQ’s <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default FindQuestion;
