import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductStory from "@/components/ProductStory";
import Features from "@/components/Features";
import Partnership from "@/components/Partnership";
import Commitment from "@/components/Commitment";
import Footer from "@/components/Footer";
import { SHOW_PARTNERSHIP } from "@/lib/club";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductStory />
        <Features />
        {SHOW_PARTNERSHIP && <Partnership />}
        <Commitment />
      </main>
      <Footer />
    </>
  );
}
