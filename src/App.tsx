import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { LanguageProvider } from "./lib/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Work />
          <About />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}