import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import GithubStats from "../components/GithubStats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-clip">
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-orb hero-orb-three" />
        </div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
