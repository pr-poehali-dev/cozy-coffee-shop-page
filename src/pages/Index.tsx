import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Features from "@/components/Features";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MenuPreview />
      <Gallery />
      <Reviews />
      <Features />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
