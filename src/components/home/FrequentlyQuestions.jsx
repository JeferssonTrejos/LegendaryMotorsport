import React, { useState } from "react";
import data from "../../data/data.json";

/**
 * FrequentlyQuestions.jsx
 * - Accordeón accesible
 * - Tailwind-only (usa variables CSS de la paleta)
 * - Consume data.home.faq_section
 */

export default function FrequentlyQuestions() {
  const faq = data?.home?.faq_section ?? {};
  const items = faq.questions ?? [];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="py-16 bg-[var(--color-custom-black-1)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[var(--color-custom-white-1)]">
            {faq.title ?? "Preguntas frecuentes"}
          </h2>
          {faq.subtitle && (
            <p className="mt-3 text-sm text-[var(--color-custom-white-4)] max-w-2xl mx-auto">
              {faq.subtitle}
            </p>
          )}
        </div>

        <div className="mt-8 space-y-3">
          {items.map((it, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-[var(--color-custom-black-2)] border border-[var(--color-custom-black-4)] rounded-lg overflow-hidden">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(i);
                      }
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    className="w-full text-left px-5 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[var(--color-custom-red-2)]"
                  >
                    <span className="text-[var(--color-custom-white-1)] font-medium">
                      {it.question}
                    </span>

                    <svg
                      className={`w-5 h-5 text-[var(--color-custom-white-2)] transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`px-5 pb-4 ${isOpen ? "block" : "hidden"}`}
                >
                  <p className="pt-1 text-sm leading-relaxed text-[var(--color-custom-white-4)]">
                    {it.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

