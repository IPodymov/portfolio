import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import {
  About,
  Contact,
  Hero,
  Projects,
  Services,
  Skills,
  Stats,
} from "@/sections";

/** Page composition: reorder, add or remove sections here. */
export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
