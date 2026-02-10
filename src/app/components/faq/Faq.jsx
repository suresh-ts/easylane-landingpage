"use client";
import React, { useRef, useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      title: "How do I become a partner with Easy Lane?",
      content:
"Transporters can sign up through our platform and submit the required documents. Once onboarded, they gain access to our load management system, optimized trip planning, and various incentives that help grow their business."    },
    {
      title: "What technology powers Easy Lane's platform?",
      content:
        "Easy Lane’s platform is powered by a sophisticated load and route optimization algorithm that leverages real-time data to match loads with available transporters. Our cloud-based system ensures seamless coordination, efficient trip planning, and real-time tracking of shipments.",
    },
    {
      title: "What kind of support does Easy Lane offer for technical issues?",
      content:
        "Easy Lane provides 24/7 technical support through multiple channels, including phone, email, and live chat. Our team is dedicated to resolving any platform or integration issues as quickly as possible, ensuring uninterrupted operations for transporters and businesses.",
    },
    {
      title: "Can Easy Lane help reduce logistics costs for my business?",
      content:
        "Absolutely! Easy Lane’s technology-driven approach, including route optimization and return load management, significantly reduces operational costs. We work with businesses to streamline their logistics and provide customized solutions that save both time and money.",
    },
    {
      title: "How do I onboard as a channel partner with Easy Lane?",
      content:
        "Channel partners can reach out through our website or directly contact our sales team. Partners are expected to meet specific KRAs, and all transactions must be processed through our technology. We provide branding support once certain sales milestones are achieved.",
    },
    {
      title: "How is Easy Lane different from other logistics aggregators?",
      content:
        "Unlike other logistics platforms, Easy Lane focuses on both technological optimization and business empowerment. We help small fleet owners and drivers grow their businesses, while also providing clients with cost-effective logistics solutions through route optimization and efficient fleet management."
    },
  ];

  return (
    <section className="bg-white">
      <div className="section-width py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h6 className="inline-flex items-center justify-center">
            Frequently Asked Questions
          </h6>
          <h3 className="font-semibold text-[#0A0226] mb-3">
            Everything You{" "}
            <span className="text-[#824DEB]">Need to Know</span>
          </h3>
        </div>

        <div className="mx-auto mt-20 w-full max-w-6xl space-y-5">
          {questions.map((question, index) => (
            <div key={question.title} className="rounded-2xl bg-[#F5F5FF]">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
              >
                <p className="text-[16px] font-semibold text-[#0A0226]">
                  {question.title}
                </p>
                <span
                  className={`flex h-6 w-6 items-center justify-center text-[#0A0226] transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0px",
                }}
              >
                <p className="px-6 pb-6 text-[#0A0226]">
                  {question.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
