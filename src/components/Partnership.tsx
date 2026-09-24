"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LangContext";
import ClubButton from "@/components/ClubButton";
import { CLUB_URL } from "@/lib/club";

export default function Partnership() {
  const { t } = useLang();

  return (
    <section
      className="py-20 px-4 md:px-16 bg-surface-container-low relative"
      id="partnership"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="bg-secondary/10 text-secondary font-[family-name:var(--font-label-md)] text-sm px-3 py-1 rounded-full inline-block mb-4">
            {t.partnership.badge}
          </span>
          <h2 className="font-[family-name:var(--font-headline-lg)] text-2xl md:text-4xl text-on-surface mb-4">
            {t.partnership.headline}
          </h2>
          <p className="font-[family-name:var(--font-body-lg)] text-lg text-on-surface-variant max-w-2xl mx-auto">
            {t.partnership.subheadline}
          </p>
        </div>

        <div className="mb-12">
          <Image
            alt="GutJoy Professional Product Lineup"
            width={1200}
            height={384}
            className="w-full h-64 md:h-96 object-cover rounded-2xl cloud-shadow"
            src="/Gambar tengah.png"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {t.partnership.tiers.map((tier, index) => {
            const isPopular = index === 1;
            return (
              <div
                key={index}
                className={`bg-surface-container-lowest rounded-3xl p-8 flex flex-col border ${
                  isPopular
                    ? "border-2 border-secondary relative transform md:-translate-y-4"
                    : "border-surface-container-high"
                } cloud-shadow hover-lift`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full font-[family-name:var(--font-label-sm)] text-xs tracking-wide uppercase">
                    {tier.popular}
                  </div>
                )}

                <div className="mb-6 mt-2">
                  <h4 className="font-[family-name:var(--font-headline-md)] text-xl text-on-surface mb-2">
                    {tier.name}
                  </h4>
                  <p className="font-[family-name:var(--font-body-md)] text-on-surface-variant mb-4">
                    {tier.description}
                  </p>
                  <div className="text-primary font-[family-name:var(--font-headline-lg)] text-2xl font-bold">
                    {tier.price}
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-xl">
                        check_circle
                      </span>
                      <span className="font-[family-name:var(--font-body-md)] text-on-surface">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {tier.isContact ? (
                  <ClubButton className="w-full py-3 text-sm mt-auto shadow-md" />
                ) : (
                  <a
                    href={CLUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-lg font-[family-name:var(--font-label-md)] text-sm transition-colors mt-auto text-center ${
                      isPopular
                        ? "bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant shadow-md"
                        : "border-2 border-primary text-primary hover:bg-primary/5"
                    }`}
                  >
                    {tier.buttonText}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
