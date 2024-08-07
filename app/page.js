import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Achievement from "./components/Achievement";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-300 w-full p-4">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <Achievement />
          <About />
          <ProjectsSection />
          <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
