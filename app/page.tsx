import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AIChatbotDemo from "@/components/landing/AIChatbotDemo";
import Features from "@/components/landing/Features";
import UmkmProgram from "@/components/landing/UmkmProgram";
import UserShowcase from "@/components/landing/UserShowcase";
import TrustedBy from "@/components/landing/TrustedBy";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AIChatbotDemo />
        <Features />
        <UmkmProgram />
        <UserShowcase />
        <TrustedBy />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
