"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LangContext";
import ClubButton from "@/components/ClubButton";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="pt-[120px] pb-20 md:pb-20 px-4 md:px-16 soft-gradient min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative z-10">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full w-fit">
            <span className="text-primary font-[family-name:var(--font-label-md)] text-sm">
              {t.hero.badge}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-secondary font-[family-name:var(--font-label-md)] text-sm">
              {t.hero.badgeSub}
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-headline-xl)] text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight">
            {t.hero.headline}{" "}
            <span className="text-primary">{t.hero.headlineAccent}</span>
          </h1>

          <p className="font-[family-name:var(--font-body-lg)] text-lg text-on-surface-variant max-w-xl">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <ClubButton className="text-sm px-8 py-3.5 cloud-shadow hover:-translate-y-0.5" />
            <a
              href="#about"
              className="border-2 border-secondary text-secondary font-[family-name:var(--font-label-md)] text-sm px-8 py-3.5 rounded-lg hover:bg-secondary/5 transition-all"
            >
              {t.hero.ctaLearn}
            </a>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0">
          <div className="aspect-square md:aspect-[4/3] lg:aspect-square relative rounded-3xl overflow-hidden cloud-shadow group">
            <Image
              alt="GutJoy Campaign Image"
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs5EpJWWAU7aQQKJwXOVMNQDaJYrExysfM8dAmO3twfBmuIBefSEvmRxfBH6Z6_IZhN9VURZgJHcxpNcJ5yflfUza-ryHJ8ayPGubZ4VUhh9OPXG6cw2zfDSbFIs9NdZtFF6f1jCupr8a2jBVmaEIn6DikjBafBJ26-YMz0yUje1vftEAMlDkhg6v0lJgYRMe2H6GRUaALwQSZKfXiDfcYo-aWbG_K0MRmIsG6uu-i0DD2LRHrDRrfwXhqlCDYytduBQhFZFrJV_tD"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 md:-left-12 bg-surface-container-lowest p-4 rounded-2xl cloud-shadow flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined icon-fill">
                favorite
              </span>
            </div>
            <div>
              <p className="font-[family-name:var(--font-headline-md)] text-xl md:text-2xl text-on-surface font-semibold">
                {t.hero.badge100}
              </p>
              <p className="font-[family-name:var(--font-label-sm)] text-xs text-on-surface-variant">
                {t.hero.badgeNatural}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
