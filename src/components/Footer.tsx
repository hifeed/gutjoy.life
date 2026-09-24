"use client";

import { useLang } from "@/contexts/LangContext";
import ClubButton from "@/components/ClubButton";
import { CLUB_URL } from "@/lib/club";

export default function Footer() {
  const { t } = useLang();

  const instagramLink = "https://www.instagram.com/gutjoylife/";

  return (
    <footer
      id="contact"
      className="w-full py-20 px-4 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 bg-surface-container border-t border-surface-variant"
    >
      <div className="flex flex-col gap-4">
        <div className="font-[family-name:var(--font-brand)] text-2xl md:text-3xl font-bold">
          <span className="text-primary">Gut</span>
          <span className="text-secondary">Joy</span>
        </div>
        <p className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant max-w-sm">
          {t.footer.tagline1}
        </p>
        <p className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant max-w-sm">
          {t.footer.tagline2}
          <br />
          {t.footer.tagline2Sub}
        </p>
        <div className="flex gap-3 mt-4">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary hover:bg-secondary hover:text-on-secondary transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <ClubButton className="h-10 px-4 text-xs rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h5 className="font-[family-name:var(--font-label-md)] text-sm text-on-surface font-semibold mb-2">
          {t.footer.linksTitle}
        </h5>
        <a
          className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
          href="#about"
        >
          {t.footer.aboutLink}
        </a>
        <a
          className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
          href="#partnership"
        >
          {t.footer.partnershipLink}
        </a>
        <ClubButton className="text-sm px-4 py-2 w-fit" />
        <a
          href={CLUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          {t.footer.faqLink}
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <h5 className="font-[family-name:var(--font-label-md)] text-sm text-on-surface font-semibold mb-2">
          {t.footer.addressTitle}
        </h5>
        <div className="flex items-start gap-2">
          <span className="material-symbols-outlined text-secondary mt-1">
            location_on
          </span>
          <p className="font-[family-name:var(--font-body-md)] text-base text-on-surface-variant">
            {t.footer.address.name}
            <br />
            {t.footer.address.street}
            <br />
            {t.footer.address.district}
            <br />
            {t.footer.address.province}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:items-end justify-between">
        <ClubButton className="text-sm px-6 py-3 w-fit" />
        <div className="font-[family-name:var(--font-body-md)] text-base text-secondary mt-8 md:mt-0 text-left md:text-right">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
