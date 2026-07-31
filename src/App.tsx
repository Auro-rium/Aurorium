import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResumeSection } from "./components/ResumeSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { PortfolioAssistant } from "./components/PortfolioAssistant";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      theme === "dark"
        ? "bg-black text-white selection:bg-white selection:text-black"
        : "bg-white text-black selection:bg-black selection:text-white"
    }`}>
      {/* Header navbar */}
      <Header />

      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Selected engineering work (from first principles) */}
        <ProjectsSection />

        {/* Paper/Printable Resume Dossier Section */}
        <ResumeSection />

        {/* Interactive mail/contact mechanism */}
        <ContactSection />
      </main>

      {/* Symmetrical footer */}
      <Footer />

      {/* Portfolio-grounded assistant */}
      <PortfolioAssistant />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
