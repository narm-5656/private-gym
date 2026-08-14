import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { Equipment } from "@/components/Equipment";
import { Pricing } from "@/components/Pricing";
import { HowToUse } from "@/components/HowToUse";
import { FAQ } from "@/components/FAQ";
import { Access } from "@/components/Access";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Equipment />
        <Pricing />
        <HowToUse />
        <FAQ />
        <Access />
      </main>
      <Footer />
    </>
  );
}
