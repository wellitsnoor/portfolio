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
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
