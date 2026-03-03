import CtaSection from "@/components/ctaSection";
import FloatingBar from "@/components/floatingBar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navBar";
import Packages from "@/components/packages";
import Portfolio from "@/components/portfolio";
import Problem from "@/components/problem";
import Process from "@/components/process";
import ScrollReveal from "@/components/scrollReveal";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Ticker from "@/components/ticker";
import Trust from "@/components/trust";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Ticker />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Problem />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Portfolio />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Stats />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Packages />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Process />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Trust />
        <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBar />
      <ScrollReveal /> {/* client-only — wires IntersectionObserver */}
    </>
  );
}
