import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="wrap">
        <Hero />
        <About />
        <Experience/>
        <Projects />
        <Skills />
        <Articles/>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
