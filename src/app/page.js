import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Benefits />
      <Pricing />
      <FooterCTA />
      <Footer />
    </>
  );
}
