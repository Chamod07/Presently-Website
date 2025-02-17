
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Team />
      <FAQ />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
