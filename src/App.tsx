import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { HowItWorks } from "./components/HowItWorks";
import { Drivers } from "./components/Drivers";
import { Pricing } from "./components/Pricing";
import { Standards } from "./components/Standards";
import { Faq } from "./components/Faq";
import { CtaBand } from "./components/CtaBand";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <HowItWorks />
        <Drivers />
        <Pricing />
        <Standards />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
