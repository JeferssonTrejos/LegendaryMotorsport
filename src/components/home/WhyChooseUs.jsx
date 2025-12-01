import React from "react";
import data from "../../data/data.json";

const IconBox = ({ children }) => (
  <div className="mb-6 flex items-center justify-center">
    <div className="text-[var(--color-custom-red-2)]">
      {children}
    </div>
  </div>
);

const BenefitCard = ({ icon, title, desc }) => (
  <article className="min-h-[220px] bg-[var(--color-custom-black-1)] border border-[var(--color-custom-black-4)] p-8 rounded-xl flex flex-col items-center text-center justify-center box-border">
    <IconBox>{icon}</IconBox>

    <h3 className="font-semibold text-[20px] text-[var(--color-custom-white-1)]">
      {title}
    </h3>

    <p className="mt-3 text-sm leading-relaxed text-[var(--color-custom-white-4)] max-w-[80%]">
      {desc}
    </p>
  </article>
);

export default function WhyChooseUs() {
  const section = data?.home?.why_us_section ?? {};
  const benefits = section?.benefits ?? [];

  const makeOutlineIcon = (d, key) => (
    <svg
      key={key}
      viewBox="0 0 24 24"
      width="60"
      height="60"
      className="w-[60px] h-[60px] block"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d={d} />
    </svg>
  );

  const icons = [
    // shield (outline)
    makeOutlineIcon("M12 2l7 4v5c0 5.5-3.5 9.5-7 11-3.5-1.5-7-5.5-7-11V6l7-4z M12 8l-2 2 2 2 2-2-2-2z", "i0"),
    // wallet / card (outline)
    makeOutlineIcon("M3 7h18v10H3z M7 9h10", "i1"),
    // truck
    makeOutlineIcon("M3 7h13v6H3z M16 9h4l1 3v2h-5 M6 16a1 1 0 100 2 1 1 0 000-2 M18 16a1 1 0 100 2 1 1 0 000-2", "i2"),
    // bolt
    makeOutlineIcon("M13 2L4 14h7l-1 8 9-12h-7l1-8z", "i3"),
    // wrench
    makeOutlineIcon("M21 8l-6 6-3-3-7 7-1-1 7-7-3-3 6-6 4 4z", "i5"),
    // star
    makeOutlineIcon("M12 17l-4 2 1-4-3-3 4-.5L12 9l1.5 2.5 4 .5-3 3 1 4z", "i4"),
  ];

  return (
    <section id="features" className="bg-[var(--color-custom-black-2)] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-custom-white-1)]">
            {section?.title ?? "POR QUÉ ELEGIRNOS"}
          </h2>
          {section?.slogan && (
            <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-[var(--color-custom-white-4)]">
              {section.slogan}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {benefits.map((b, i) => (
            <div key={i} className="p-2">
              <BenefitCard
                icon={icons[i % icons.length]}
                title={b.title}
                desc={b.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
