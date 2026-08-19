import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <TechStack />
      <Footer />
    </main>
  );
}
