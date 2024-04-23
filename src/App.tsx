import AboutUsSection from "./components/AboutUsSection";
import ContactsSection from "./components/ContactsSection";
import ExamplesSection from "./components/ExamplesSection";
import WhatsIcon from "./components/WhatsIcon";
import HeroSlider from "./components/HeroSlider";
import Nav from "./components/Nav";
import OffersSection from "./components/OffersSection";

function App() {
  return (
    <main dir="rtl" className="bg-primary-100 h-screen text-secondary-400">
      <Nav />
      <HeroSlider />
      <AboutUsSection />
      <ExamplesSection />
      <OffersSection />
      <WhatsIcon />
      <ContactsSection />
      <footer className="py-2 bg-dark text-white text-center">
        <p>
          Developed By{" "}
          <a
            className="hover:text-primary-300 text-secondary-200 transition"
            href="https://www.facebook.com/mohaned.hano.9">
            Mohanad Zaghloul
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
