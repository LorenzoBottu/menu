import Hero from "./components/Hero";
import MenuTabs from "./components/MenuTabs";

function App() {
  return (
    <div className="bg-brand-background font-sans text-brand-text">
      <Hero />
      <main id="menu" className="container mx-auto px-6 py-20 md:py-32">
        <MenuTabs />
      </main>
      <footer className="text-center p-8 bg-black/50 text-brand-text-secondary">
        <p className="font-serif text-xl text-brand-primary">Caffè del Corso</p>
        <p className="text-sm mt-2">Piazza Principale, 123 - La Tua Città</p>
      </footer>
    </div>
  );
}

export default App;
