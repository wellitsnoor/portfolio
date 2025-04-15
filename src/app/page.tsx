import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Lander from "@/components/Lander";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Lander />
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
