"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Lang = "id" | "en";

type Translations = {
  meta: {
    title: string;
    description: string;
  };
  navbar: {
    home: string;
    about: string;
    partnership: string;
    contact: string;
    cta: string;
    menu: string;
  };
  hero: {
    badge: string;
    badgeSub: string;
    headline: string;
    headlineAccent: string;
    description: string;
    ctaShop: string;
    ctaLearn: string;
    badge100: string;
    badgeNatural: string;
  };
  about: {
    label: string;
    headline: string;
    headlineAccent: string;
    description: string;
  };
  productStory: {
    label: string;
    headline: string;
    headlineAccent: string;
    description: string;
  };
  features: {
    headline: string;
    subheadline: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  partnership: {
    badge: string;
    headline: string;
    subheadline: string;
    tiers: {
      name: string;
      description: string;
      price: string;
      features: string[];
      buttonText: string;
      isContact?: boolean;
      popular: string;
    }[];
  };
  commitment: {
    headline: string;
    description: string;
  };
  footer: {
    tagline1: string;
    tagline2: string;
    tagline2Sub: string;
    linksTitle: string;
    aboutLink: string;
    partnershipLink: string;
    faqLink: string;
    addressTitle: string;
    address: {
      name: string;
      street: string;
      district: string;
      province: string;
    };
    copyright: string;
    footerCta: string;
    phone: string;
  };
};

const translations: Record<Lang, Translations> = {
  id: {
    meta: {
      title: "GutJoy - Happy Gut, Happy Day",
      description:
        "Nikmati yogurt segar kaya probiotik setiap hari. Rasakan tekstur lembut dan manfaat kesehatan yang mengubah harimu menjadi lebih cerah.",
    },
    navbar: {
      home: "Home",
      about: "About",
      partnership: "Partnership",
      contact: "Contact",
      cta: "Join Us",
      menu: "Menu",
    },
    hero: {
      badge: "GUTJOY",
      badgeSub: "Happy Gut, Happy Day",
      headline: "Kebahagiaan Dimulai dari",
      headlineAccent: "Usus yang Sehat",
      description:
        "Nikmati yogurt segar kaya probiotik setiap hari. Rasakan tekstur lembut dan manfaat kesehatan yang mengubah harimu menjadi lebih cerah.",
      ctaShop: "Belanja Sekarang",
      ctaLearn: "Pelajari Lebih Lanjut",
      badge100: "100%",
      badgeNatural: "Bahan Alami",
    },
    about: {
      label: "Tentang GutJoy",
      headline: "Kami Percaya Kesehatan Harus Menjadi",
      headlineAccent: "Kebiasaan yang Menyenangkan",
      description:
        "GutJoy hadir untuk membuktikan bahwa menjaga kesehatan usus tidak perlu membosankan. Dengan perpaduan rasa yang lezat dan manfaat probiotik yang kuat, kami membuat rutinitas sehat menjadi momen yang paling Anda tunggu setiap hari.",
    },
    productStory: {
      label: "Our Story",
      headline: "Your Gut Deserves Better.",
      headlineAccent: "Happy Gut. Happy You.",
      description:
        "Yogurt probiotik yang enak, creamy, dan bantu jaga kesehatan pencernaan setiap hari.",
    },
    features: {
      headline: "Lebih dari Sekadar Yogurt",
      subheadline:
        "Kebaikan alam dalam setiap sendok untuk mendukung gaya hidup aktifmu.",
      items: [
        {
          title: "Kaya Probiotik",
          description:
            "Mengandung miliaran bakteri baik untuk menyeimbangkan mikroflora usus Anda.",
        },
        {
          title: "Rasa Premium",
          description:
            "Tekstur selembut sutra dengan varian rasa buah asli yang menyegarkan.",
        },
        {
          title: "Bahan Berkualitas",
          description:
            "Hanya menggunakan susu segar dan buah-buahan pilihan tanpa pengawet buatan.",
        },
        {
          title: "Gaya Hidup Aktif",
          description:
            "Mendukung energi harian dan sistem imun untuk aktivitas tanpa henti.",
        },
      ],
    },
    partnership: {
      badge: "Peluang Bisnis",
      headline: "Bergabung Bersama GutJoy",
      subheadline:
        "Pilih paket kemitraan yang sesuai dengan skala bisnis Anda dan mulai sebarkan kebahagiaan.",
      tiers: [
        {
          name: "Reseller",
          description: "Langkah awal untuk bisnis mandiri.",
          price: "Mulai 1Jt",
          features: ["Modal terjangkau", "Materi promosi digital"],
          buttonText: "Pilih Paket",
          popular: "Populer",
        },
        {
          name: "Agen",
          description: "Jangkauan lebih luas, margin lebih besar.",
          price: "Mulai 5Jt",
          features: [
            "Harga khusus agen",
            "Support chiller (S&K)",
            "Brosur & Spanduk",
          ],
          buttonText: "Daftar Agen",
          popular: "Populer",
        },
        {
          name: "Distributor",
          description: "Kuasai area dan bangun jaringan.",
          price: "Hubungi Kami",
          features: [
            "Eksklusivitas wilayah",
            "Margin maksimal",
            "Support marketing full",
          ],
          buttonText: "Konsultasi",
          popular: "Populer",
        },
        {
          name: "Horeca",
          description: "Solusi B2B untuk bisnis Anda.",
          price: "Custom",
          features: ["Kemasan bulk/grosir", "Suplai rutin terjamin"],
          buttonText: "Hubungi Tim",
          isContact: true,
          popular: "Populer",
        },
      ],
    },
    commitment: {
      headline: "Membangun Generasi yang Lebih Sehat",
      description:
        "Bersama GutJoy, mari kita wujudkan masyarakat yang peduli pada kesehatan pencernaan, satu sendok setiap harinya.",
    },
    footer: {
      tagline1: "Happy Gut, Happy Day. Memberikan kebaikan probiotik untuk keseharian yang lebih menyenangkan.",
      tagline2: "Happy Gut. Happy You.",
      tagline2Sub: "Karena semua hal baik dimulai dari usus yang sehat.",
      linksTitle: "Tautan Pantas",
      aboutLink: "Tentang Kami",
      partnershipLink: "Kemitraan",
      faqLink: "FAQ",
      addressTitle: "Alamat",
      address: {
        name: "HiFeed Technoplex",
        street: "Jl. Spatirasmi No. 52",
        district: "Kab. Bandung Barat",
        province: "Jawa Barat",
      },
      copyright: "@2026 GutJoy Life. All rights reserved.",
      footerCta: "Hubungi Kami",
      phone: "0852-8671-0314",
    },
  },
  en: {
    meta: {
      title: "GutJoy - Happy Gut, Happy Day",
      description:
        "Enjoy fresh probiotic-rich yogurt every day. Feel the smooth texture and health benefits that brighten your day.",
    },
    navbar: {
      home: "Home",
      about: "About",
      partnership: "Partnership",
      contact: "Contact",
      cta: "Join Us",
      menu: "Menu",
    },
    hero: {
      badge: "GUTJOY",
      badgeSub: "Happy Gut, Happy Day",
      headline: "Happiness Starts from",
      headlineAccent: "a Healthy Gut",
      description:
        "Enjoy fresh probiotic-rich yogurt every day. Feel the smooth texture and health benefits that brighten your day.",
      ctaShop: "Shop Now",
      ctaLearn: "Learn More",
      badge100: "100%",
      badgeNatural: "Natural Ingredients",
    },
    about: {
      label: "About GutJoy",
      headline: "We Believe Health Should Be an",
      headlineAccent: "Enjoyable Habit",
      description:
        "GutJoy is here to prove that maintaining gut health doesn't have to be boring. With delicious flavors and powerful probiotic benefits, we make healthy routines the moment you look forward to every day.",
    },
    productStory: {
      label: "Our Story",
      headline: "Your Gut Deserves Better.",
      headlineAccent: "Happy Gut. Happy You.",
      description:
        "Probiotic yogurt that's delicious, creamy, and helps maintain digestive health every day.",
    },
    features: {
      headline: "More Than Just Yogurt",
      subheadline:
        "Nature's goodness in every spoonful to support your active lifestyle.",
      items: [
        {
          title: "Rich in Probiotics",
          description:
            "Contains billions of good bacteria to balance your gut microflora.",
        },
        {
          title: "Premium Taste",
          description:
            "Silky smooth texture with refreshing real fruit flavor variants.",
        },
        {
          title: "Quality Ingredients",
          description:
            "Only uses fresh milk and premium fruits with no artificial preservatives.",
        },
        {
          title: "Active Lifestyle",
          description:
            "Supports daily energy and immune system for non-stop activities.",
        },
      ],
    },
    partnership: {
      badge: "Business Opportunity",
      headline: "Join GutJoy",
      subheadline:
        "Choose a partnership package that fits your business scale and start spreading happiness.",
      tiers: [
        {
          name: "Reseller",
          description: "First step to independent business.",
          price: "From 1M",
          features: ["Affordable capital", "Digital promotion materials"],
          buttonText: "Choose Package",
          popular: "Popular",
        },
        {
          name: "Agent",
          description: "Wider reach, bigger margins.",
          price: "From 5M",
          features: [
            "Special agent pricing",
            "Chiller support (T&C)",
            "Brochures & Banners",
          ],
          buttonText: "Register as Agent",
          popular: "Popular",
        },
        {
          name: "Distributor",
          description: "Dominate your area and build networks.",
          price: "Contact Us",
          features: [
            "Area exclusivity",
            "Maximum margins",
            "Full marketing support",
          ],
          buttonText: "Consult Now",
          popular: "Popular",
        },
        {
          name: "Horeca",
          description: "B2B solutions for your business.",
          price: "Custom",
          features: ["Bulk/wholesale packaging", "Guaranteed routine supply"],
          buttonText: "Contact Team",
          isContact: true,
          popular: "Popular",
        },
      ],
    },
    commitment: {
      headline: "Building a Healthier Generation",
      description:
        "Together with GutJoy, let's create a society that cares about digestive health, one spoonful at a time.",
    },
    footer: {
      tagline1: "Happy Gut, Happy Day. Bringing probiotic goodness for a more delightful daily life.",
      tagline2: "Happy Gut. Happy You.",
      tagline2Sub: "Because all good things start from a healthy gut.",
      linksTitle: "Quick Links",
      aboutLink: "About Us",
      partnershipLink: "Partnership",
      faqLink: "FAQ",
      addressTitle: "Address",
      address: {
        name: "HiFeed Technoplex",
        street: "Jl. Spatirasmi No. 52",
        district: "Kab. Bandung Barat",
        province: "West Java, Indonesia",
      },
      copyright: "@2026 GutJoy Life. All rights reserved.",
      footerCta: "Contact Us",
      phone: "0852-8671-0314",
    },
  },
};

type LangContextValue = {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");
  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within LangProvider");
  }
  return ctx;
}
